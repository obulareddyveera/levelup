import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";

import InterviewRoute from "./containers/interview";

const history = createBrowserHistory();
export default class Routes extends React.Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" component={InterviewRoute} />
                </Switch>
            </Router>
        );
    }
}
