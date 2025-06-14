import React from "react";
import { Link } from "react-router-dom";

export default function TerminalSidebar() {
  return (
    <div className="fixed top-0 left-0 h-full w-40 bg-black border-r border-green-500 text-green-300 font-mono p-4 text-sm shadow-lg z-10">
      <div className="mb-6 font-bold tracking-wide">C:\Users\Garrett</div>
      <nav className="space-y-4">
        <Link to="/" className="block hover:text-green-100">&gt; /home</Link>
        <Link to="/about" className="block hover:text-green-100">&gt; /about</Link>
        <Link to="/projects" className="block hover:text-green-100">&gt; /projects</Link>
        <Link to="/contact" className="block hover:text-green-100">&gt; /contact</Link>
      </nav>
    </div>
  );
}