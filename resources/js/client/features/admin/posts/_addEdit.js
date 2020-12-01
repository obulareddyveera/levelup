import React from "react";
import { Formik, Field, Form } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { Close } from "@styled-icons/material";
import Row from "./../../../components/fields/row";
import {
    RowFormGroup,
    AddNewTag
} from "./../../../components/fields/formikFields";
import EditorField from "./../../../components/fields/editor";
import {
    selector as metadataSelector,
    asyncListCategories
} from "./../../../metadataSlice";
import {
    selector as postSelector,
    asyncCreatePost,
    asyncUpdatePost
} from "./postsSlice";

const AddEditPost = ({ location, history }) => {
    const { state } = location;
    let formikProps;
    let initValues = {
        category: "",
        title: "",
        desc: "",
        content: "",
        tags: [],
        newTag: "",
        newTagColor: "",
        showSketchPicker: false
    };
    if (state) {
        initValues = {
            id: state.id,
            category: state.categoryId,
            title: state.title,
            desc: state.metaTitle,
            content: state.content,
            tags: state.tags,
            newTag: "",
            newTagColor: "",
            showSketchPicker: false
        };
    }
    const metaData = useSelector(metadataSelector);
    const posts = useSelector(postSelector);
    const dispatch = useDispatch();

    React.useEffect(() => {
        console.log("--== posts Selector ", posts);
        if (posts.status === 200) {
            history.push({ pathname: "/blog/admin/post/list" });
        }
    }, [posts]);

    const handleSavePost = (event, values) => {
        event.preventDefault();
        const user = sessionStorage.getItem("GoogleAccessToken");
        if (user) {
            if (values.id) {
                dispatch(
                    asyncUpdatePost({ userId: JSON.parse(user).id, ...values })
                );
            } else {
                dispatch(
                    asyncCreatePost({ userId: JSON.parse(user).id, ...values })
                );
            }
        }
    };
    React.useEffect(() => {
        dispatch(asyncListCategories());
    }, []);

    const onRemoveTag = (tag, values) => {
        const temp = [];
        values.tags.forEach(item => {
            if (tag.name !== item.name) {
                temp.push(item);
            }
        });
        formikProps.setFieldValue("tags", temp, false);
    };

    const { categories } = metaData;
    return (
        <React.Fragment>
            {metaData && categories && (
                <div className="card">
                    <Formik initialValues={initValues}>
                        {props => {
                            formikProps = props;
                            const { values, error, setFieldValue } = props;
                            return (
                                <React.Fragment>
                                    <div className="card-header">
                                        <Row className="col-12 mt-2">
                                            <div className="d-flex justify-content-between">
                                                <Row className="col-12 mr-1">
                                                    <Field
                                                        as="select"
                                                        className="form-control"
                                                        name="category"
                                                    >
                                                        <option>
                                                            Select Category
                                                        </option>
                                                        {categories.map(
                                                            item => {
                                                                return (
                                                                    <option
                                                                        key={
                                                                            item.title
                                                                        }
                                                                        value={
                                                                            item.id
                                                                        }
                                                                    >
                                                                        {
                                                                            item.title
                                                                        }
                                                                    </option>
                                                                );
                                                            }
                                                        )}
                                                    </Field>
                                                </Row>
                                                <div className="btn btn-group">
                                                    <a
                                                        href="#/blog/admin/post/list"
                                                        className="btn btn-sm btn-secondary"
                                                    >
                                                        Cancel
                                                    </a>
                                                    <button
                                                        type="button"
                                                        className="btn btn-sm btn-primary"
                                                        onClick={event =>
                                                            handleSavePost(
                                                                event,
                                                                values
                                                            )
                                                        }
                                                    >
                                                        Save
                                                    </button>
                                                </div>
                                            </div>
                                        </Row>
                                    </div>
                                    <div className="card-body">
                                        <Form>
                                            <div className="row">
                                                <div className="col-sm-12 col-md-6">
                                                    <RowFormGroup
                                                        name="title"
                                                        label="Title"
                                                        error={error}
                                                    />
                                                </div>
                                                <div className="col-sm-12 col-md-6">
                                                    <RowFormGroup
                                                        name="desc"
                                                        label="Description"
                                                        error={error}
                                                    />
                                                </div>
                                            </div>
                                            <h5 className="text-primary border-bottom">
                                                Add Tag
                                            </h5>
                                            <Row className="col-12">
                                                <AddNewTag {...props} />
                                                <div className="d-flex flex-wrap p-3">
                                                    {values.tags &&
                                                        values.tags.map(
                                                            entity => {
                                                                return (
                                                                    <button
                                                                        key={
                                                                            entity.name
                                                                        }
                                                                        onClick={() =>
                                                                            onRemoveTag(
                                                                                entity,
                                                                                values
                                                                            )
                                                                        }
                                                                        className="btn btn-link text-light p-0 m-0"
                                                                    >
                                                                        <span
                                                                            className="badge badge-secondary m-1"
                                                                            style={{
                                                                                backgroundColor:
                                                                                    entity.color
                                                                            }}
                                                                        >
                                                                            {
                                                                                entity.name
                                                                            }
                                                                            <Close size="16" />
                                                                        </span>
                                                                    </button>
                                                                );
                                                            }
                                                        )}
                                                    {values.tags &&
                                                        values.tags.length ===
                                                            0 && (
                                                            <div className="d-flex justify-content-center w-100 h-100 align-items-center">
                                                                <div className="text-danger">
                                                                    No Tags
                                                                    Added
                                                                </div>
                                                            </div>
                                                        )}
                                                </div>
                                            </Row>
                                            <EditorField
                                                data={values.content}
                                                changeHandler={content =>
                                                    setFieldValue(
                                                        "content",
                                                        content,
                                                        false
                                                    )
                                                }
                                            />
                                        </Form>
                                    </div>
                                </React.Fragment>
                            );
                        }}
                    </Formik>
                </div>
            )}
        </React.Fragment>
    );
};

export default AddEditPost;
