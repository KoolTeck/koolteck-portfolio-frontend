import React from "react";
import styled from "styled-components";
import ArrowUpIcon from "@mui/icons-material/ArrowCircleUpOutlined";
import { useState, useEffect } from "react";

function TopButton() {
  const [screenHeight, setScreenHeight] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const height = window.scrollY;
      setScreenHeight(height);
    });
  }, []);
  return (
    <TopButtonStyled href="#">
      {screenHeight > 400 && <ArrowUpIcon />}
    </TopButtonStyled>
  );
}

const TopButtonStyled = styled.a`
  display: flex;
  position: fixed;
  color: var(--primary-color);
  align-items: center;
  z-index: 15;
  top: 90vh;
  right: 10px;
  transition: 0.4s all ease-in-out;
  &:hover {
    color: var(--white-color);
    cursor: pointer;
  }

  svg {
    font-size: 2rem;
  }
`;

export default TopButton;
