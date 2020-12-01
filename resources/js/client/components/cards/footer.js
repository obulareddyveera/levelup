import React from "react";
import { Facebook } from "@styled-icons/material";
import { Twitter, Instagram, Rss, Heart3 } from "@styled-icons/remix-fill";
import { Envelope } from "@styled-icons/fa-solid";

const FooterCard = () => {
    return (
        <div
            className="bg-dark text-light"
            style={{ paddingTop: "80px", paddingBottom: "80px" }}
        >
            <div className="container">
                <div className="row mb-5">
                    <div className="col-md-4">
                        <h3 className="footer-heading mb-4">About Us</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Placeat reprehenderit magnam deleniti quasi
                            saepe, consequatur atque sequi delectus dolore
                            veritatis obcaecati quae, repellat eveniet omnis,
                            voluptatem in. Soluta, eligendi, architecto.
                        </p>
                    </div>
                    <div className="col-md-3 ml-auto">
                        <ul className="list-unstyled float-left mr-5">
                            <li>
                                <a href="#" className="text-light">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-light">
                                    Advertise
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-light">
                                    Subscribes
                                </a>
                            </li>
                        </ul>
                        <ul className="list-unstyled float-left">
                            <li>
                                <a href="#" className="text-light">
                                    Javascript
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-light">
                                    Node.js
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-light">
                                    Java
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <div>
                            <h3 className="footer-heading">Connect With Us</h3>
                            <p>
                                <a href="#">
                                    <Facebook
                                        size={"48"}
                                        className="pt-2 pr-2 pb-2 pl-0"
                                    />
                                </a>
                                <a href="#">
                                    <Twitter
                                        size={"48"}
                                        className="pt-2 pr-2 pb-2 pl-0"
                                    />
                                </a>
                                <a href="#">
                                    <Instagram
                                        size={"48"}
                                        className="pt-2 pr-2 pb-2 pl-0"
                                    />
                                </a>
                                <a href="#">
                                    <Rss
                                        size={"48"}
                                        className="pt-2 pr-2 pb-2 pl-0"
                                    />
                                </a>
                                <a href="#">
                                    <Envelope
                                        size={"48"}
                                        className="pt-2 pr-2 pb-2 pl-0"
                                    />
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 text-center">
                        <p>
                            Copyright ©{" "}
                            <script>
                                document.write(new Date().getFullYear());
                            </script>
                            2020 All rights reserved | This template is made
                            with{" "}
                            <Heart3
                                size={"48"}
                                className="text-danger"
                                aria-hidden="true"
                            />{" "}
                            by{" "}
                            <a href="https://colorlib.com" target="_blank">
                                Colorlib
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterCard;
