import React from "react";
import styled from "styled-components";
import ImageSection from "../components/ImageSection";
import Title from "../components/Title";
import { MainLayout } from "../styles/Layouts";
import ServicesSection from "../components/ServicesSection";
import ReviewsSection from "../components/ReviewsSection";

function AboutPage() {
  return (
    <MainLayout>
      <Title title={"About Me"} span={"About Me"} />
      <AboutStyled>
        <ImageSection />
        <ServicesSection />
        <ReviewsSection />
      </AboutStyled>
    </MainLayout>
  );
}

const AboutStyled = styled.section``;

export default AboutPage;
