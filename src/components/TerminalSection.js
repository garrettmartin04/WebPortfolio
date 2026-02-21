import React, { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const fullLines = [
  { type: "cmd", text: "./boot_profile.sh" },
  { type: "output", text: "Launching GarrettOS portfolio shell..." },
  { type: "ascii", text: ["  ____   __   ____   ____   ____  _____ _____", " / ___| / /  |  _ \\ |  _ \\ / ___||_   _| ____|", "| |  _ / /   | |_) || |_) | |  _   | | |  _|", "| |_| / /___ |  __/ |  _ <| |_| |  | | | |___", " \\____|_____|_|    |_| \\_\\\\____|  |_| |_____|"] },
  { type: "cmd", text: "whoami" },
  {
    type: "output",
    text: "Garrett Martin — Software Engineer in progress, building practical products with clean UX and a hacker vibe.",
  },
  { type: "cmd", text: "cat mission.txt" },
  {
    type: "output",
    text: "I design full-stack projects, enjoy rapid iteration, and obsess over making software feel polished, fast, and useful.",
  },
  { type: "stats", text: [{ k: "Focus", v: "Full Stack + AI" }, { k: "Mode", v: "Curious Builder" }, { k: "Status", v: "Available for internships" }] },
  { type: "cmd", text: "ls -la" },
  { type: "links", text: ["/about", "/projects", "/contact"] },
];

export default function TerminalSection() {
  const [index, setIndex] = useState(1);
  const [displayed, setDisplayed] = useState([fullLines[0]]);
  const done = index >= fullLines.length;

  const advance = useCallback(() => {
    if (!done) {
      setDisplayed((prev) => [...prev, fullLines[index]]);
      setIndex((i) => i + 1);
    }
  }, [done, index]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        advance();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [advance]);

  return (
    <div className="panel cursor-pointer relative" onClick={advance} role="button" aria-label="Terminal. Click or press Enter to reveal the next line." tabIndex={0} onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && (e.preventDefault(), advance())}>
      {!done && (
        <div className="absolute -top-3 left-4 text-xs px-2 py-0.5 rounded border border-emerald-700/40 bg-black/70 text-emerald-300/80 select-none">
          Click anywhere or press <span className="font-semibold">Enter</span> to continue
          <span className="cursor-block ml-1">█</span>
        </div>
      )}

      <div className="px-6 py-6 leading-relaxed text-emerald-200">
        {displayed.map((line, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.22 }} className="mb-2">
            {line.type === "cmd" && (
              <div>
                <span className="prompt-dim">&gt;</span> {line.text}
              </div>
            )}
            {line.type === "output" && <div className="ml-4 text-emerald-300/90">{line.text}</div>}
            {line.type === "ascii" && (
              <pre className="ml-4 text-[10px] sm:text-xs text-emerald-400/80 overflow-x-auto">{line.text.join("\n")}</pre>
            )}
            {line.type === "stats" && (
              <div className="ml-4 grid gap-2 sm:grid-cols-3 mt-2">
                {line.text.map((item) => (
                  <div key={item.k} className="rounded border border-emerald-700/40 bg-black/40 px-3 py-2">
                    <div className="text-emerald-400/70 text-xs">{item.k}</div>
                    <div>{item.v}</div>
                  </div>
                ))}
              </div>
            )}
            {line.type === "links" && (
              <div className="ml-4 flex gap-3 flex-wrap mt-2">
                {line.text.map((href, idx) => (
                  <Link key={idx} to={href} className="a-soft inline-flex items-center gap-2 px-3 py-1 rounded border border-emerald-700/40 hover:border-emerald-400/50 bg-emerald-900/10">
                    {href}
                  </Link>
                ))}
              </div>
            )}
          </motion.div>
        ))}
        {!done && <span className="cursor-block">█</span>}
      </div>
    </div>
  );
}
