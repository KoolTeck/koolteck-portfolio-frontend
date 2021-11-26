import React from "react";
import styled from "styled-components";
import resume from "../img/resume.jpg";
import PrimaryButton from "./PrimaryButton";

function ImageSection() {
  return (
    <ImageSectionStyled>
      <div className="left-content">
        <img src={resume} alt="me" />
      </div>
      <div className="right-content">
        <h4>
          I am <span>Kooljoe</span>
        </h4>
        <p className="paragraph">
          A Full-stack JS Developer. I help business and coperate org. to get
          online by writing clean, scalable and cross plartform code with latest
          technologies. Open for hire.
        </p>
        <div className="about-info">
          <ul className="info-title">
            <li>Full Name:</li>
            <li>birth:</li>
            <li>Nationality: </li>
            <li>Languages: </li>
            <li>Location:</li>
            <li>Service:</li>
          </ul>
          <ul className="info">
            <li> Adetunji Adebowale Joel</li>
            <li> Sept. 5th</li>
            <li> Nigerian </li>
            <li>English, Yoruba </li>
            <li> Ogun, NIgeria</li>
            <li> Freelance</li>
          </ul>
        </div>
        <PrimaryButton
          href={
            "https://koolteck-portfolio.herokuapp.com/Adebowale-Adetunji?target=https://hire-kooldev.herokuapp.com/"
          }
          title={"Download Cv"}
        />
      </div>
    </ImageSectionStyled>
  );
}

const ImageSectionStyled = styled.div`
  margin-top: 5rem;
  display: flex;

  .left-content {
    width: 100%;
    img {
      width: 95%;
      object-fit: cover;
    }
  }
  .right-content {
    width: 100%;
    h4 {
      font-size: 2rem;
      color: var(--white-color);
      span {
        font-size: 2rem;
      }
    }
    .paragraph {
      padding: 1rem 0;
    }
    .about-info {
      display: flex;
      padding-bottom: 1.4rem;
      .info-title {
        padding-right: 3rem;
        li {
          font-weight: 600;
        }
      }
      .info-title,
      .info {
        li {
          padding: 0.3rem 0;
        }
      }
    }
  }

  /* media querries */
  @media screen and (max-width: 940px) {
    .right-content .about-info .info-title {
      padding-right: 1.2rem;
    }
  }

  @media screen and (max-width: 858px) {
    .left-content {
      margin-bottom: 2rem;
    }

    .about-info li {
      padding: 0.1rem 0;
      font-size: 12px;
    }
    .right-content .about-info {
      padding-bottom: 0.5rem;
    }
    .right-content h4,
    .right-content h4 span {
      font-size: 1.5rem;
    }
  }

  @media screen and (max-width: 670px) {
    flex-direction: column;
    margin-top: 2rem;
    .left-content img {
      width: 85%;
      border-radius: 50%;
    }

    .right-content .paragraph {
      text-align: justify;
    }

    .about-info li {
      font-size: 1rem;
    }
  }

  @media screen and (max-width: 350px) {
    .left-content img {
      width: 100%;
      border-radius: 100%;
    }
  }
`;
export default ImageSection;
