import React from "react";
import LevelUpNavLabel from "./../fields/levelUpNavLabel";
import BlogSearch from "../search";

const BlogNav = () => {
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light mb-3 p-0">
            <div className="d-flex flex-column w-100">
                <div className="d-flex justify-content-between w-100 p-2">
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
                                <a className="nav-link" href="#">
                                    Home <span className="sr-only">(current)</span>
                                </a>
                            </li>
                            <li className="nav-item border-left dropdown">
                                <a
                                    className="nav-link ml-2 dropdown-toggle"
                                    href="#"
                                    id="navbarDropdown"
                                    role="button"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    Category
                                </a>
                                <div
                                    className="dropdown-menu"
                                    aria-labelledby="navbarDropdown"
                                >
                                    <a className="dropdown-item" href="#">
                                        About-Me
                                    </a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">
                                        Javascript
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        Java
                                    </a>
                                </div>
                            </li>
                            <li className="nav-item border-left">
                                <a className="nav-link ml-2" href="#/blog/author/login">
                                    Author <span className="sr-only">(current)</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row bg-dark p-4">
                    <div className="col-12">
                        <BlogSearch />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default BlogNav;
