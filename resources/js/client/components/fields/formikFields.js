import React from "react";
import { SwatchesPicker } from "react-color";
import { Field } from "formik";

export const RowFormGroup = ({ name, type, label, error }) => {
    return (
        <div className="form-group">
            <label htmlFor={`${name}Input`}>{label}</label>
            <Field
                id={`${name}Input`}
                name={name}
                type={type}
                className="form-control"
            />
            <small id={`${name}help`} className="form-text text-danger">
                {error && error[name]}
            </small>
        </div>
    );
};

export const AddNewTag = ({ values, errors, setFieldValue }) => {
    const handleAddTag = values => {
        setFieldValue(
            "tags",
            [
                {
                    name: values.newTag,
                    color: values.newTagColor
                },
                ...values.tags
            ],
            false
        );
        setFieldValue("showSketchPicker", false, false);
        setFieldValue("newTag", "", false);
        setFieldValue("newTagColor", "", false);
    };
    return (
        <React.Fragment>
            <RowFormGroup name="newTag" label="Tag" error={errors} />
            <div style={{ position: "relative" }}>
                <label htmlFor="newTagColorInput">Tag Color</label>
                <Field
                    id="newTagColorInput"
                    name="newTagColor"
                    type="text"
                    className="form-control"
                    onFocus={() =>
                        setFieldValue("showSketchPicker", true, false)
                    }
                />
                {values.showSketchPicker && (
                    <div
                        className="card"
                        style={{ position: "absolute", zIndex: 2 }}
                    >
                        <div className="card-body p-2">
                            <div className="d-flex justify-content-end m-2">
                                <button
                                    className="btn btn-sm btn-danger"
                                    onClick={() =>
                                        setFieldValue(
                                            "showSketchPicker",
                                            false,
                                            false
                                        )
                                    }
                                >
                                    Close
                                </button>
                            </div>
                            <SwatchesPicker
                                onChange={params => {
                                    setFieldValue(
                                        "newTagColor",
                                        params.hex,
                                        false
                                    );
                                }}
                            />
                        </div>
                    </div>
                )}
            </div>
            <div className="d-flex justify-content-end m-2">
                <button
                    type="button"
                    className="btn btn-sm btn-success"
                    onClick={() => handleAddTag(values)}
                >
                    Add Tag
                </button>
            </div>
        </React.Fragment>
    );
};
