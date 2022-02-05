import React from "react";
import Particle from "../components/Particle";
import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import GithubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import Emoji from "a11y-react-emoji";

function Home() {
  return (
    <HomeStyled>
      <div className="p-particles-js">
        <Particle />
      </div>
      <div className="typography">
        <h1>
          Hi
          <div className="emoji">
            {" "}
            <StyledEmoji symbol="👋" label="waving" />
          </div>
          , I'm <span>Adebowale Adetunji</span>
        </h1>

        <p>
          Creative Full Stack JS Developer. Skilled in designing, developing and
          testing multiple web-based applications incorporating a range of
          technologies. Aspiring to combine broad background with strong
          technical skills to excel as a backend developer.
        </p>
        <div className="icons">
          <a
            href="https://www.twitter.com/kooljoe247/"
            className="icon i-twitter"
            rel="noreferrer"
            target="_blank"
          >
            <TwitterIcon />
          </a>
          <a
            href="https://www.facebook.com/adebowale.adetunji/"
            className="icon i-facebook"
            rel="noreferrer"
            target="_blank"
          >
            <FacebookIcon />
          </a>
          <a
            href="https://github.com/KoolTeck/"
            className="icon i-github"
            target="_blank"
            rel="noreferrer"
          >
            <GithubIcon />
          </a>
          <a
            href="https://www.youtube.com/channel/UCpjP7FBAuyOwONPPn5gB1Uw/"
            className="icon i-youtube"
            target="_blank"
            rel="noreferrer"
          >
            <YouTubeIcon />
          </a>
        </div>
      </div>
    </HomeStyled>
  );
}
const HomeStyled = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;

  .p-particles-js {
    position: absolute;
    top: 0;
    left: 0;
  }

  .typography {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 80%;

    .icons {
      display: flex;
      justify-content: center;
      margin-top: 1rem;
      .icon {
        border: 2px solid var(--border-color);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: all 0.4s ease-in-out;
        cursor: pointer;
        &:hover {
          border: 2px solid var(--primary-color);
          color: var(--primary-color);
        }
        &:not(:last-child) {
          margin-right: 1rem;
        }
        svg {
          margin: 0.5rem;
        }
      }
      .i-youtube {
        &:hover {
          border: 2px solid red;
          color: red;
        }
      }
      .i-github {
        &:hover {
          border: 2px solid #5f4687;
          color: #5f4687;
        }
      }
      .i-twitter {
        &:hover {
          border: 2px solid #1da1f2;
          color: #1da1f2;
        }
      }
    }
  }

  .emoji {
    width: 50px;
    height: 50px;
    /* background-color: #0cb1c4; */
    animation-name: spin;
    animation-duration: 5000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    display: inline-flexbox;
  }
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(60deg);
    }
  }
`;

const StyledEmoji = styled(({ ...props }) => <Emoji {...props} />)`
  font-size: 32px;
`;

export default Home;
