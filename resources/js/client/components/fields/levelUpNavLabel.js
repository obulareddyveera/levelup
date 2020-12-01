import React from "react";
import { MeetingRoom } from "@styled-icons/material";
import styled from "styled-components";

const LevelUpLabel = styled.div`
    margin-top: 4px;
`;

const LevelUpNavLabel = () => {
    return (
        <div className="d-flex justify-content-center ml-2">
            <div>
                <MeetingRoom className="text-primary" size={"24"} />
            </div>
            <LevelUpLabel>Level Up</LevelUpLabel>
        </div>
    );
};

export default LevelUpNavLabel;
