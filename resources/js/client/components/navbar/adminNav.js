import React from "react";
import styled from "styled-components";
import { GoogleLogout } from "react-google-login";
import LevelUpNavLabel from "./../fields/levelUpNavLabel";

const ProfilePic = styled.img`
    width: 2rem;
    height: 2rem;
    cursor: pointer;
`;
const CLIENT_ID =
    "643540525219-947emudk7cr2svpavlc621epqiie02fs.apps.googleusercontent.com";
const AdminNav = () => {
    const [profile, setProfile] = React.useState({});
    const picture = profile.imageUrl || "/empty_profile.jpeg";

    React.useEffect(() => {
        let author = sessionStorage.getItem("GoogleAccessToken");
        if (author) {
            author = JSON.parse(author);
            setProfile(author);
        }
    }, []);

    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark mb-3 p-0">
            <span className="navbar-brand mb-0 h1">
                <LevelUpNavLabel />
            </span>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
            >
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <div className="btn-group">
                            <ProfilePic
                                src={picture}
                                className="rounded-circle"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            />
                            <div className="dropdown-menu dropdown-menu-right">
                                <a
                                    href="#/auth/profile"
                                    className="dropdown-item"
                                >
                                    Profile
                                </a>
                                <div className="dropdown-divider"></div>
                                <GoogleLogout
                                    className="dropdown-item"
                                    clientId={CLIENT_ID}
                                    buttonText="Logout"
                                    style={{boxShadow: 'none'}}
                                    onLogoutSuccess={() => {
                                        sessionStorage.removeItem(
                                            "GoogleAccessToken"
                                        );
                                        history.push("/");
                                    }}
                                    onFailure={() => {
                                        console.log("Failed to log out");
                                    }}
                                ></GoogleLogout>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default AdminNav;
