import React from "react";
import styled from "styled-components";

import Title from "../components/Title";
import ServiceCard from "../components/ServiceCard";
import design from "../img/design.svg";

import gamedev from "../img/game-dev.svg";

function ServicesSection() {
  return (
    <ServicesSectionStyled>
      <Title title={"Services"} span={"services"} />
      <div className="services">
        <ServiceCard
          image={design}
          title={"Web Design"}
          paragraph={
            "I build scalabe and cross platform web apps that conform to design standards"
          }
        />
        <ServiceCard
          image={gamedev}
          title={"Game Development"}
          paragraph={"On the verge of building game as projects"}
        />
        <ServiceCard
          image={gamedev}
          title={"Mobile Development"}
          paragraph={"Learning to become a fullstack mobile developer soon"}
        />
      </div>
    </ServicesSectionStyled>
  );
}

const ServicesSectionStyled = styled.section`
  margin-top: 1.8rem;
  .services {
    margin-top: 5rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1.5rem;
    @media screen and (max-width: 1000px) {
      flex-direction: column;
    }
    @media screen and (max-width: 950px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 670px) {
      grid-template-columns: repeat(1, 1fr);
      margin: 2rem auto;
    }
  }
`;

export default ServicesSection;
