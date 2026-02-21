import React from "react";
import { NavLink } from "react-router-dom";

const navItems = [
  { to: "/", label: "/home", icon: "⌂" },
  { to: "/about", label: "/about", icon: "◎" },
  { to: "/projects", label: "/projects", icon: "▣" },
  { to: "/contact", label: "/contact", icon: "✉" },
];

export default function TerminalSidebar() {
  const base =
    "group block px-3 py-2 rounded-md transition border border-transparent relative overflow-hidden";
  const active = "bg-emerald-600/15 border-emerald-500/40 text-emerald-100";
  const idle = "hover:bg-emerald-600/10 text-emerald-300";

  return (
    <aside className="fixed top-0 left-0 h-full w-44 sm:w-56 bg-black/70 backdrop-blur-sm border-r border-emerald-800/30 text-emerald-300 font-mono p-4 text-sm shadow-xl z-20">
      <div className="mb-6 border border-emerald-800/40 rounded-lg bg-emerald-950/20 p-3">
        <div className="font-bold tracking-wide text-emerald-100">C:\\Users\\Garrett</div>
        <div className="text-emerald-400/60 text-xs">~/portfolio</div>
      </div>

      <div className="text-[11px] uppercase tracking-[0.2em] text-emerald-400/60 mb-2">Navigation</div>
      <nav className="space-y-2">
        {navItems.map((item) => (
          <NavLink key={item.to} end={item.to === "/"} to={item.to} className={({ isActive }) => `${base} ${isActive ? active : idle}`}>
            <span className="absolute inset-y-0 left-0 w-[2px] bg-emerald-300/60 opacity-0 group-hover:opacity-100 transition" />
            <span className="inline-flex items-center gap-2">
              <span className="text-emerald-400/80">{item.icon}</span>
              <span>&gt; {item.label}</span>
            </span>
          </NavLink>
        ))}
      </nav>

      <div className="mt-5 rounded-md border border-emerald-800/40 bg-black/30 p-2 text-xs text-emerald-300/75">
        <div className="flex items-center justify-between">
          <span>status</span>
          <span className="inline-flex items-center gap-1">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" /> online
          </span>
        </div>
      </div>

      <div className="absolute bottom-4 left-4 right-4 text-xs text-emerald-400/60">
        <div className="flex items-center justify-between">
          <span>v2.0</span>
          <span className="hidden sm:inline">Enter ↵ to continue</span>
        </div>
      </div>
    </aside>
  );
}
