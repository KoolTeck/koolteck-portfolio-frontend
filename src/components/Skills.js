import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import Title from "./Title";
import ProgressBar from "./ProgressBar";

function Skills() {
  return (
    <SkillsStyled>
      <Title title={"My Skills"} span={"my skills"} />
      <InnerLayout>
        <div className="skills">
          <ProgressBar title={"HTML5"} width={"75%"} text={"75%"} />
          <ProgressBar title={"CSS3"} width={"75%"} text={"75%"} />
          <ProgressBar title={"JAVASCRIPT"} width={"75%"} text={"75%"} />
          <ProgressBar title={"React JS"} width={"65%"} text={"65%"} />
          <ProgressBar title={"PHP"} width={"45%"} text={"45%"} />
          <ProgressBar title={"NODE JS"} width={"55%"} text={"55%"} />
          <ProgressBar title={"EXPRESS"} width={"65%"} text={"65%"} />
        </div>
      </InnerLayout>
    </SkillsStyled>
  );
}

const SkillsStyled = styled.section`
  .skills {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 2rem;
    column-gap: 3rem;
    @media screen and (max-width: 700px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export default Skills;
