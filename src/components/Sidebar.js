import React from "react";
import styled from "styled-components";
import Navigation from "./Navigation";

function Sidebar({ navToggle }) {
  return (
    <SidebarStyled
      className={`${navToggle ? "nav-toggle-on" : "nav-toggle-off"}`}
      id="sideBar"
    >
      <Navigation />
    </SidebarStyled>
  );
}

const SidebarStyled = styled.div`
  width: 16.3rem;
  position: fixed;
  height: 100vh;
  background-color: var(--sidebar-dark-color);
  overflow: hidden;
  transition: all 0.4s ease-in-out;
  @media screen and (max-width: 450px) {
    width: 100%;
  }
`;

export default Sidebar;
