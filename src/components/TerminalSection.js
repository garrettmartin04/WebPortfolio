import React from "react";
import { Link } from "react-router-dom";
import TerminalShellWrapper from "./TerminalShellWrapper";

export default function TerminalSection() {
  return (
    <TerminalShellWrapper path="~/home" title="Welcome" command="init portfolio --recruiter-friendly">
      <div className="hero-grid">
        <div>
          <p className="hero-kicker">TERMINAL MODE ACTIVE</p>
          <h1 className="hero-title">Hi, I&apos;m Brian Garrett Martin.</h1>
          <p className="hero-copy">
            Computer Science student building practical, polished software experiences with a strong focus on
            full-stack development and clean UI.
          </p>
          <div className="hero-actions">
            <Link to="/projects" className="btn-primary">View Projects</Link>
            <Link to="/contact" className="btn-secondary">Contact Me</Link>
          </div>
        </div>

        <div className="quick-stats" aria-label="Quick facts">
          <div>
            <span>Current Focus</span>
            <strong>Full Stack + AI Exploration</strong>
          </div>
          <div>
            <span>Graduation</span>
            <strong>Dec 2025</strong>
          </div>
          <div>
            <span>Based In</span>
            <strong>Georgia, USA</strong>
          </div>
        </div>
      </div>

      <div className="command-row">
        <p>&gt; Suggested commands:</p>
        <div>
          <Link to="/about">cat about.md</Link>
          <Link to="/projects">ls projects/featured</Link>
          <Link to="/contact">./reach-out.sh</Link>
        </div>
      </div>
    </TerminalShellWrapper>
  );
}
