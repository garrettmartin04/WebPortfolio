import React from "react";
import { NavLink } from "react-router-dom";

const navItems = [
  { to: "/", label: "Home", cmd: "./home" },
  { to: "/about", label: "About", cmd: "cat about.md" },
  { to: "/projects", label: "Projects", cmd: "ls projects/" },
  { to: "/contact", label: "Contact", cmd: "ping garrett" },
];

export default function TerminalSidebar() {
  return (
    <aside className="sidebar-shell">
      <div className="terminal-chip">SYSTEM NAV</div>
      <h1 className="sidebar-title">Brian Garrett Martin</h1>
      <p className="sidebar-subtitle">Software Engineering Portfolio</p>

      <nav className="sidebar-nav" aria-label="Primary navigation">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            end={item.to === "/"}
            to={item.to}
            className={({ isActive }) => `sidebar-link ${isActive ? "sidebar-link-active" : ""}`}
          >
            <span className="sidebar-link-label">{item.label}</span>
            <span className="sidebar-link-cmd">{item.cmd}</span>
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-footer">
        <p>&gt; status: open_to_opportunities</p>
        <p>&gt; theme: terminal_hybrid</p>
      </div>
    </aside>
  );
}
