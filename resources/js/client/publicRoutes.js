import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";

import BlogRoute from "./features/blog";
import AuthorRoute from "./features/author";
import AdminRoute from "./features/admin/routes";

export default class Routes extends React.Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route path="/blog/admin/*" exact component={AdminRoute} />
                    <Route path="/blog/author/login" exact component={AuthorRoute} />
                    <Route path="/" exact component={BlogRoute} />
                </Switch>
            </HashRouter>
        );
    }
}
