import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import TerminalSidebar from "./components/TerminalSidebar";
import TerminalSection from "./components/TerminalSection";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import ProjectPage from "./components/ProjectPage";

export default function App() {
  return (
    <Router>
      <div className="app-layout">
        <TerminalSidebar />
        <main className="app-main">
          <Routes>
            <Route path="/" element={<TerminalSection />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
