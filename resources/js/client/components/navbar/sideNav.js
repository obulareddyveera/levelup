import React from "react";
import styled from "styled-components";

import "./sideNav.css";
import AppNavigationMenu from "./menu";

const SideMenu = styled.div`
  width: 5%;
  position: relative !important;
  min-height: 100vh;
  @media (max-width: 720px) {
    position: absolute !important;
    z-index: 1;
    width: 100%;
  }
`;
export default function SideNav(props) {
  return (
    <SideMenu className="expand bg-dark text-light" id="sideMenuContent">
      <div className="bg-dark pt-4">
        <div style={{marginTop: '18px'}}>
          <AppNavigationMenu {...props} />
        </div>
      </div>
    </SideMenu>
  );
}
