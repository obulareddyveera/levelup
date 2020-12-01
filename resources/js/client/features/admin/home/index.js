import React from "react";

const AdminHome = () => {
    const handleEditorChange = (content, editor) => {
        console.log("Content was updated:", content);
    };

    return (
        <React.Fragment>
            <div className="row w-100">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-header">
                            <div className="card-title">
                                Review Posts
                            </div>
                        </div>
                        <div className="card-body">
                            <h6>Posts</h6>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default AdminHome;
