import React from "react";
import { Editor } from "@tinymce/tinymce-react";

const EditorField = ({ data, changeHandler }) => {
    return (
        <Editor
            apiKey="lsgparhy38aoh4xkcv76a2eiffbjfwrkrjmz17aeubgafvuf"
            initialValue={data}
            init={{
                height: 500,
                plugins: [
                    "advlist autolink lists link image charmap print preview anchor",
                    "searchreplace visualblocks code fullscreen",
                    "insertdatetime media table paste code help wordcount",
                    "code"
                ],
                toolbar:
                    "undo redo | formatselect | bold italic backcolor | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlist outdent indent | removeformat | help"
            }}
            onEditorChange={changeHandler}
        />
    );
};

export default EditorField;
