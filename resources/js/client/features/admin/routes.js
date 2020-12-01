import React from "react";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";

import SideNav from "./../../components/navbar/sideNav";
import AdminNav from "./../../components/navbar/adminNav";
import HomeFeature from "./home";
import PostsFeature from "./posts";

const MainContainer = styled.div`
    margin-top: 4rem;
    display: flex;
`;

const AdminRoutes = props => {
    const { location } = props;
    const { pathname } = location;

    return (
        <React.Fragment>
            <AdminNav />
            <div className="d-flex justify-content-start">
                <SideNav activePath={pathname} />
                <MainContainer className="container-fluid">
                    <Switch>
                        <Route
                            path="/blog/admin/home"
                            component={HomeFeature}
                        />
                        <Route
                            path="/blog/admin/post/*"
                            component={PostsFeature}
                        />
                    </Switch>
                </MainContainer>
            </div>
        </React.Fragment>
    );
};

export default AdminRoutes;
