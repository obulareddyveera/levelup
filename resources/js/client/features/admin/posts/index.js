import React from "react";
import { Switch, Route } from "react-router-dom";

import ListPosts from "./_list";
import AddEditPosts from "./_addEdit";
import Row from "./../../../components/fields/row";

const PostsFeature = () => {
    return (
        <div className="container-fluid">
            <Row className="col-12 mt-2">
                <Switch>
                    <Route path="/blog/admin/post/list" component={ListPosts} />
                    <Route
                        path="/blog/admin/post/add"
                        component={AddEditPosts}
                    />
                </Switch>
            </Row>
        </div>
    );
};

export default PostsFeature;
