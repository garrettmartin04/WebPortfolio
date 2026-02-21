import React from "react";

export default function TerminalShellWrapper({ path = "~", title, command, children }) {
  return (
    <section className="terminal-window">
      <header className="terminal-topbar">
        <div className="terminal-dots" aria-hidden="true">
          <span className="dot dot-red" />
          <span className="dot dot-yellow" />
          <span className="dot dot-green" />
        </div>
        <div className="terminal-path">garrett@portfolio:{path}</div>
      </header>

      <div className="terminal-content">
        {(title || command) && (
          <div className="terminal-meta">
            {title && <h2>{title}</h2>}
            {command && <p>&gt; {command}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
