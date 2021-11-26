import { useState } from "react";
import { useEffect } from "react";
import Sidebar from "./components/Sidebar";
import styled from "styled-components";
import HomePage from "./Pages/Home";
import AboutPage from "./Pages/About";
import ResumePage from "./Pages/Resume";
import PortfoliosPage from "./Pages/Portfolios";
import BlogsPage from "./Pages/Blogs";
import ContactPage from "./Pages/Contact";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import MenuIcon from "@mui/icons-material/Menu";
import { Route, Switch as Switching } from "react-router";
import { Switch } from "@mui/material";
import { IconButton } from "@mui/material";
import TopButton from "./components/TopButton";
import Preloader from "../src/img/preloader.svg";

function App() {
  const [theme, setTheme] = useState("dark-theme");
  const [checked, setChecked] = useState(false);
  const [navToggle, setNavToggle] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.addEventListener("load", () => {
      setLoading(false);
    });
  }, []);
  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const themeToggler = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
      setChecked(false);
    } else {
      setTheme("light-theme");
      setChecked(true);
    }
  };

  return (
    <div className="App">
      {loading && (
        <div className="preloader">
          <img src={Preloader} alt="" />
        </div>
      )}
      <Sidebar navToggle={navToggle} />
      <TopButton />

      <div className="light-dark-mode">
        <div className="left-content">
          <Brightness4Icon />
        </div>
        <div className="right-content">
          <Switch
            value=""
            checked={checked}
            inputProps={{ "aria-label": "" }}
            size="medium"
            onClick={themeToggler}
          />
        </div>
      </div>

      <div className="ham-burger-menu" onClick={() => setNavToggle(!navToggle)}>
        <IconButton>
          <MenuIcon />
        </IconButton>
      </div>
      <MainContentStyled>
        <div className="lines">
          <div className="line-1"></div>
          <div className="line-2"></div>
          <div className="line-3"></div>
          <div className="line-4"></div>
        </div>

        <Switching>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/about" exact>
            <AboutPage />
          </Route>
          <Route path="/resume" exact>
            <ResumePage />
          </Route>
          <Route path="/portfolios" exact>
            <PortfoliosPage />
          </Route>
          <Route path="/blogs" exact>
            <BlogsPage />
          </Route>
          <Route path="/contact" exact>
            <ContactPage />
          </Route>
        </Switching>
      </MainContentStyled>
    </div>
  );
}

const MainContentStyled = styled.main`
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;
  @media screen and (max-width: 1200px) {
    margin-left: 0;
  }

  .lines {
    position: absolute;
    min-height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    opacity: 0.4;
    z-index: -1;
    .line-1,
    .line-2,
    .line-3,
    .line-4 {
      width: 1px;
      min-height: 100vh;
      background-color: var(--border-color);
    }
  }
`;

export default App;
