import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
