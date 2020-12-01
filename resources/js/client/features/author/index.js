import React from "react";
import { GoogleLogin } from "react-google-login";
import {useDispatch, useSelector} from 'react-redux';

import { asycCreateAuthor, selector } from "./authorSlice";
import LevelUpH2Label from "./../../components/fields/levelUpH2Label";
const CLIENT_ID =
    "643540525219-947emudk7cr2svpavlc621epqiie02fs.apps.googleusercontent.com";

const GoogleLoginCard = props => {
    const dispatch = useDispatch();
    const author = useSelector(selector);
    React.useEffect(() => {
        if (author && author.googleId) {
            sessionStorage.setItem(
                "GoogleAccessToken",
                JSON.stringify(author)
            );
            props.history.push("/blog/admin/home");
        }
    }, [author]);
    React.useEffect(() => {
        let googleAccessToken = sessionStorage.getItem("GoogleAccessToken");
        if (googleAccessToken) {
            googleAccessToken = JSON.parse(googleAccessToken);
            if (googleAccessToken && googleAccessToken.accessToken) {
                props.history.push("/blog/admin/home");
            }
        }
    });

    const login = response => {
        if (response.accessToken) {
            const {profileObj} = response;
            dispatch(asycCreateAuthor({phone: '--', ...profileObj}));
        }
    };

    const handleLoginFailure = response => {
        console.log("--== handleLoginFailure ", response);
    };

    return (
        <div className="container" style={{ height: "100vh" }}>
            <div className="d-flex justify-content-around align-items-center h-100">
                <div className="card">
                    <div className="card-body p-3">
                        <LevelUpH2Label />
                        <div className="d-flex justify-content-center p-3">
                        <GoogleLogin
                            className="bg-primary text-white"
                            clientId={CLIENT_ID}
                            onSuccess={login}
                            onFailure={handleLoginFailure}
                            cookiePolicy={"single_host_origin"}
                            responseType="code,token"
                        />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GoogleLoginCard;
