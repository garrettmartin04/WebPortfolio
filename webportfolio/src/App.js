import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import TerminalSidebar from "./components/TerminalSidebar";  // Import sidebar

import TerminalSection from "./components/TerminalSection";
import AboutPage from "./components/AboutPage";

import ContactPage from "./components/ContactPage"; // Make sure you import your ContactPage

export default function App() {
  return (
    <Router>
      <div className="flex">
        <TerminalSidebar />  {/* Always visible */}
        <main className="flex-1 ml-40 p-6">
          <Routes>
            <Route path="/" element={<TerminalSection />} />
            <Route path="/about" element={<AboutPage />} />

            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}