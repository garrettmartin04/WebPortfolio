import React from "react";
import { NavLink } from "react-router-dom";


export default function TerminalSidebar(){
const base = "block px-3 py-2 rounded-md transition";
const active = "bg-emerald-600/15 border border-emerald-500/30 text-emerald-200";
const idle = "hover:bg-emerald-600/10 text-emerald-300";


return (
<aside className="fixed top-0 left-0 h-full w-44 sm:w-56 bg-black/70 backdrop-blur-sm border-r border-emerald-800/30 text-emerald-300 font-mono p-4 text-sm shadow-xl z-20">
<div className="mb-6">
<div className="font-bold tracking-wide text-emerald-200">C:\\Users\\Garrett</div>
<div className="text-emerald-400/60 text-xs">~ portfolio</div>
</div>


<nav className="space-y-2">
<NavLink end to="/" className={({isActive})=>`${base} ${isActive?active:idle}`}> &gt; /home </NavLink>
<NavLink to="/about" className={({isActive})=>`${base} ${isActive?active:idle}`}> &gt; /about </NavLink>
<NavLink to="/projects" className={({isActive})=>`${base} ${isActive?active:idle}`}> &gt; /projects </NavLink>
<NavLink to="/contact" className={({isActive})=>`${base} ${isActive?active:idle}`}> &gt; /contact </NavLink>
</nav>


<div className="absolute bottom-4 left-4 right-4 text-xs text-emerald-400/60">
<div className="flex items-center justify-between">
<span>v1.0</span>
<span className="hidden sm:inline">Press ↵ to continue</span>
</div>
</div>
</aside>
);
}