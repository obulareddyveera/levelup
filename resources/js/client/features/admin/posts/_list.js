import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { Edit } from "@styled-icons/fa-solid";
import { RemoveCircleOutline } from "@styled-icons/material";
import { selector as postSelector, asyncListPosts } from "./postsSlice";
import Row from "./../../../components/fields/row";

const BtnRowResWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const ListPosts = props => {
    const listData = useSelector(postSelector);
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(asyncListPosts());
    }, []);

    const { posts } = listData;

    const onEditPost = item => {
        props.history.push({
            pathname: "/blog/admin/post/add",
            state: item
        });
    };

    return (
        <div className="card">
            <div className="card-body">
                <Row className="col-12">
                    <BtnRowResWrapper className="m-2">
                        <a
                            href="#/blog/admin/post/add"
                            className="btn btn-sm btn-primary"
                        >
                            Add
                        </a>
                    </BtnRowResWrapper>
                </Row>
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Title</th>
                            <th>Category</th>
                            <th>Tags</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts && posts.length > 0 ? (
                            posts.map((item, index) => {
                                return (
                                    <tr key={`blog_post_${index}`}>
                                        <td>{index + 1}</td>
                                        <td>
                                            <a
                                                href={`#/blog/admin/post/add/${item.id}`}
                                            >
                                                {item.title}
                                            </a>
                                        </td>
                                        <td>{item.categoryName}</td>
                                        <td>
                                            {item.tags &&
                                                item.tags.map(tag => {
                                                    return (
                                                        <span
                                                            key={tag.name}
                                                            className="badge badge-secondary m-1"
                                                            style={{
                                                                backgroundColor:
                                                                    tag.color
                                                            }}
                                                        >
                                                            {tag.name}
                                                        </span>
                                                    );
                                                })}
                                        </td>
                                        <td>
                                            {item.published === 0 && (
                                                <div>Pending</div>
                                            )}
                                            {item.published === 1 && (
                                                <div>Published</div>
                                            )}
                                            {item.published === 2 && (
                                                <div>Achived</div>
                                            )}
                                        </td>
                                        <td className="p-0 pt-2">
                                            <div className="btn-group">
                                                <button
                                                    onClick={() =>
                                                        onEditPost(item)
                                                    }
                                                    className="btn btn-sm btn-link"
                                                >
                                                    <Edit
                                                        className="text-success"
                                                        size="18"
                                                    />
                                                </button>
                                                <button className="btn btn-sm btn-link">
                                                    <RemoveCircleOutline
                                                        className="text-danger"
                                                        size="18"
                                                    />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })
                        ) : (
                            <tr>
                                <th colSpan="6">
                                    <div className="d-flex justify-content-center">
                                        No Data Found
                                    </div>
                                </th>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ListPosts;
