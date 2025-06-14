import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TerminalSection from "./components/TerminalSection";
import AboutPage from "./components/AboutPage";

function About() {
  return <div className="p-10">About Me Page – Fill me in!</div>;
}

function Projects() {
  return <div className="p-10">Projects Page – Show your cool stuff here!</div>;
}

function Contact() {
  return <div className="p-10">Contact Page – Add a form or your socials here!</div>;
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TerminalSection />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

