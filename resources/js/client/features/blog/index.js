import React from "react";
import styled from "styled-components";

import BlogNav from "./../../components/navbar/blogNav";
import Row from "./../../components/fields/row";
import TopPostCard from "../../components/cards/toppost";
import SlideCard from "../../components/cards/slide";
import FooterCard from "../../components/cards/footer";

const MainContainer = styled.div`
    margin-top: 10rem;
`;

const BlogFeature = () => {
    return (
        <React.Fragment>
            <header>
                <BlogNav />
            </header>
            <MainContainer className="container-fluid">
                <SlideCard />
                <Row className="col-12 border-bottom">
                    <h2 className="ml-4 mt-4">Recent Posts</h2>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="ml-4">
                                <img
                                    src="images/img_1.jpg"
                                    className="img-fluid"
                                />
                                <div className="d-flex flex-wrap">
                                    <div className="badge badge-success mt-2 mr-2">
                                        Javascript
                                    </div>
                                    <div className="badge badge-secondary mt-2 mr-2">
                                        React.js
                                    </div>
                                </div>
                                <h2 className="mt-3 mb-3">
                                    <a href="single.html" className="text-dark">
                                        The AI magically removes moving objects
                                        from videos.
                                    </a>
                                </h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Quo sunt tempora dolor
                                    laudantium sed optio, explicabo ad deleniti
                                    impedit facilis fugit recusandae! Illo,
                                    aliquid, dicta beatae quia porro id est.
                                </p>
                                <p>
                                    <a href="#">Read More</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </Row>
                <Row className="col-12">
                    <div className="d-flex justify-content-center">
                        <div className="d-flex p-2">
                            <a href="#" className="badge badge-primary m-1">
                                1
                            </a>
                            <a href="#" className="badge badge-primary m-1">
                                2
                            </a>
                            <a href="#" className="badge badge-primary m-1">
                                3
                            </a>
                        </div>
                    </div>
                </Row>
                <Row className="col-12">
                    <h2 className="ml-4 mt-4">Similar Posts</h2>
                    <div className="row p-4">
                        <div className="col-md-6">
                            <Row className="col-12">
                            <TopPostCard
                            routePath="#"
                            bgImgUrl="images/img_1.jpg"
                            text="The AI magically removes moving objects from videos."
                            dateStr="July 19, 2019"
                        />
                            </Row>
                            <div className="row">
                                <div className="col-md-6">
                                <TopPostCard
                            routePath="#"
                            bgImgUrl="images/img_1.jpg"
                            text="The AI magically removes moving objects from videos."
                            dateStr="July 19, 2019"
                        />
                                </div>
                                <div className="col-md-6">
                                <TopPostCard
                            routePath="#"
                            bgImgUrl="images/img_1.jpg"
                            text="The AI magically removes moving objects from videos."
                            dateStr="July 19, 2019"
                        />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                        <TopPostCard
                            routePath="#"
                            bgImgUrl="images/img_1.jpg"
                            isVertical
                            text="The AI magically removes moving objects from videos."
                            dateStr="July 19, 2019"
                        />
                        </div>
                    </div>
                </Row>
            </MainContainer>
            <footer>
                <FooterCard />
            </footer>
        </React.Fragment>
    );
};

export default BlogFeature;
