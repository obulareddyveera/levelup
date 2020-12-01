import React from "react";
import { MeetingRoom } from "@styled-icons/material";
import styled from "styled-components";

const LevelUpLabel = styled.h2`
    margin-top: 15px;
    letter-spacing: 4px;
    font-weight: 500;
`;

const LevelUpH2Label = () => {
    return (
        <div className="d-flex justify-content-center p-3">
            <div className="mb-3">
                <MeetingRoom className="text-primary" size={"48"} />
            </div>
            <LevelUpLabel>Level Up</LevelUpLabel>
        </div>
    );
};

export default LevelUpH2Label;
