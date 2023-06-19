import React from "react";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import About from "./components/About";
import Skills from "./components/LanguagesFrameworks";
import OtherSkills from "./components/OtherSkills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import PowerPongLeague from "./components/PowerPongLeague";
import NomNom from "./components/NomNom";
import GoldenBasket from "./components/GoldenBasket";

function App() {
  const isMobileDevice = useMediaQuery({
    query: "(min-device-width: 480px)",
  });

  const isTabletDevice = useMediaQuery({
    query: "(min-device-width: 768px)",
  });

  const isLaptop = useMediaQuery({
    query: "(min-device-width: 1024px)",
  });

  const isDesktop = useMediaQuery({
    query: "(min-device-width: 1200px)",
  });

  const isBigScreen = useMediaQuery({
    query: "(min-device-width: 1201px)",
  });

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/skills-cont" element={<OtherSkills />} />
        <Route path="/powerpong-league" element={<PowerPongLeague />} />
        <Route path="/nomnom" element={<NomNom />} />
        <Route path="/golden-basket" element={<GoldenBasket />} />
      </Routes>
    </Router>
  );
}

export default App;
