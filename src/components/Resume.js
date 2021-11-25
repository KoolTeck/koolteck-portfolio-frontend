import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import Title from "../components/Title";
import SmallTitle from "../components/SmallTitle";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import SchoolIcon from "@mui/icons-material/School";
import ResumeItem from "../components/ResumeItem";

function Resume() {
  const briefcase = <BusinessCenterIcon />;
  const school = <SchoolIcon />;
  return (
    <ResumeStyled>
      <Title title={"Resume"} span={"resume"} />
      <InnerLayout>
        <div className="small-title">
          <SmallTitle icon={briefcase} title={"Working Experience"} />
        </div>
        <div className="resume-content">
          <ResumeItem
            year={"Jan - July-2021"}
            title={"FULLSTACK DEVELOPER"}
            subTitle={"EDCONNECT INTERNSHIP(Remote)"}
            text={
              "developed a web app(project-explorer) with latest industry tools. Reached out to team members to solve challenges "
            }
          />
          <ResumeItem
            year={"May 2020 - August 2020"}
            title={"FRONTEND DEVELOPER [INTERN]"}
            subTitle={"HNG INTERNSHIPS "}
            text={
              "Worked with Node.js developers to create an invoice generating app. Worked with PHP developers to create an airtime procurement web app Contributed to the frontend department of my team to deliver responsive web templates to be sold on envato marketplace online. Built a fun chatbot with rivescript on one of the challenges"
            }
          />
          <ResumeItem
            year={"OCT. 2019 - DEC. 2019"}
            title={"FRONTEND DEVELOPER [INTERN]"}
            subTitle={"NPOWER TECH SOFTWARE PROGRAM "}
            text={
              "I worked as an intern under the Federal Government youth empowerment program called Npower Tech Software during my early days of getting into tech Used PHP and Mysql as backend and database management technology respectively in building my final project called Menu Menu restaurant, a website. Designed websites with bootstrap and CSS as part of the various frontend challenges."
            }
          />
        </div>
        <div className="small-title u-small-title-margin">
          <SmallTitle icon={school} title={"Educational Qualifications"} />
        </div>
        <div className="resume-content ">
          <ResumeItem
            year={"2017-2019"}
            title={"HND / MECHANICAL ENGINEERING"}
            subTitle={"Federal Polytechnic Offa, Kwara State"}
          />
          <ResumeItem
            year={"2012-2016"}
            title={"ND / MECHANICAL ENGINEERING"}
            subTitle={"Federal Polytechnic Offa, Kwara "}
          />
          <ResumeItem
            year={"2004 - 2009"}
            title={"Senior School Certificate Examination(NECO)"}
            subTitle={"Saint Timothy Model Academy"}
          />
        </div>
      </InnerLayout>
    </ResumeStyled>
  );
}

const ResumeStyled = styled.section`
  .small-title {
    padding-bottom: 3rem;
  }
  .u-small-title-margin {
    margin-top: 4rem;
  }

  .resume-content {
    border-left: 2px solid var(--border-color);
  }
`;
export default Resume;
