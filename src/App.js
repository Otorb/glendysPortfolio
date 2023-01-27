import { Routes, Route, useLocation } from "react-router";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./components/Themes";
import GlobalStyle from "./globalStyles";
import "./App.css";

//Components
import Main from "./components/Main";
import AboutPage from "./components/AboutPage";
import BlogComponent from "./components/BlogComponent";
import WorkPage from "./components/WorkPage";
import MySkillsPage from "./components/MySkillsPage";
import { AnimatePresence } from "framer-motion";
import SoundBar from "./subComponents/SoundBar";
import Contact from "./components/Contact";
import PowerButton from "./subComponents/PowerButton";

function App() {
  const location = useLocation();
  return (
    <div className="app">
      <GlobalStyle />
      <PowerButton />

      <ThemeProvider theme={lightTheme}>
        {/*  <SoundBar /> */}

        {/* For framer-motion animation on page change! */}
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.pathname}>
            <Route exact path="/" element={<Main />} />
            <Route exact path="/about" element={<AboutPage />} />
            <Route exact path="/portafolio" element={<BlogComponent />} />
            <Route exact path="/work" element={<WorkPage />} />
            <Route exact path="/skills" element={<MySkillsPage />} />
            <Route exact path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </ThemeProvider>
    </div>
  );
}

export default App;
