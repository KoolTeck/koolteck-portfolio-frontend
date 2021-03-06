import React from "react";
import styled from "styled-components";

function SmallTitle({ icon, title }) {
  return (
    <SmallTitleStyled>
      <p>{icon}</p>
      <h3>{title}</h3>
    </SmallTitleStyled>
  );
}

const SmallTitleStyled = styled.div`
  display: flex;
  align-items: center;
  p {
    padding-right: 1rem;
    svg {
      font-size: 3rem;
    }
  }
  h3 {
    color: var(--white-color);
    font-size: 2rem;
  }

  @media screen and (max-width: 450px) {
    flex-direction: column;
    align-items: flex-start;
    h3 {
      font-size: 1.2rem;
    }

    p {
      display: flex;
      align-self: center;
    }
  }
`;

export default SmallTitle;
