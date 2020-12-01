import React from "react";
import styled from "styled-components";

const BgImage = styled.a`
    display: block;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
    background-size: cover;
    background-position: center center;
`;

const Text = styled.div`
    position: absolute;
    bottom: 0;
    z-index: 10;
    text-align: left;
    padding: 6px;
`;
const TopPostCard = ({bgImgUrl, text, dateStr, routePath, isVertical }) => {
    return (
        <BgImage
            href={routePath}
            className={`img-fluid mb-2 gradient ${
                isVertical ? "h-100" : "v-height"
            }`}
            style={{
                backgroundImage: `url(${bgImgUrl})`,
                minHeight: "200px"
            }}
        >
            <Text>
                <h4 className="text-light">{text}</h4>
                <span className="text-light date">{dateStr}</span>
            </Text>
        </BgImage>
    );
};

export default TopPostCard;
