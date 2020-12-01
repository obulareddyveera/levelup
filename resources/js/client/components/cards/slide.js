import React from "react";
import styled from "styled-components";

import TopPostCard from "./toppost";

const MoreVisitCards = styled.div`
    background-color: #f8f9fa !important;
    padding: 1rem;
`;

const SlideCards = () => {
    return (
        <MoreVisitCards>
            <div className="row p-4">
                <div className="col-md-4">
                    <TopPostCard
                        routePath="#"
                        bgImgUrl="images/img_1.jpg"
                        text="The AI magically removes moving objects from videos."
                        dateStr="July 19, 2019"
                    />
                    <TopPostCard
                        routePath="#"
                        bgImgUrl="images/img_1.jpg"
                        text="The AI magically removes moving objects from videos."
                        dateStr="July 19, 2019"
                    />
                </div>
                <div className="col-md-4">
                    <TopPostCard
                        routePath="#"
                        bgImgUrl="images/img_v_1.jpg"
                        isVertical
                        text="The AI magically removes moving objects from videos."
                        dateStr="July 19, 2019"
                    />
                </div>
                <div className="col-md-4">
                    <TopPostCard
                        routePath="#"
                        bgImgUrl="images/img_1.jpg"
                        text="The AI magically removes moving objects from videos."
                        dateStr="July 19, 2019"
                    />
                    <TopPostCard
                        routePath="#"
                        bgImgUrl="images/img_1.jpg"
                        text="The AI magically removes moving objects from videos."
                        dateStr="July 19, 2019"
                    />
                </div>
            </div>
        </MoreVisitCards>
    );
};

export default SlideCards;
