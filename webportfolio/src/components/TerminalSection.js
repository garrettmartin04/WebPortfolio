import React, { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const fullLines = [
  { type: "cmd", text: "whoami" },
  { type: "output", text: "Garrett Martin – Software Engineering Intern, Bug Squasher, Eternal Learner" },
  { type: "cmd", text: "cat bio.txt" },
  { type: "output", text: "I’m a Computer Science student at Georgia Southern University with a solid foundation in Java and Python. I’m passionate about building innovative software, learning new programming languages, and exploring AI. I enjoy collaborating and growing as a developer." },
  { type: "cmd", text: "ls" },
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

  // space or enter to advance
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
    <div className="flex">
      <div className="ml-44 sm:ml-56 flex-1 p-4">
        <div
          className="panel cursor-pointer relative"
          onClick={advance}
          role="button"
          aria-label="Terminal. Click or press Enter to reveal the next line."
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              advance();
            }
          }}
        >
          {}
          {!done && (
            <div className="absolute -top-3 left-4 text-xs px-2 py-0.5 rounded border border-emerald-700/40 bg-black/70 text-emerald-300/80 select-none">
              Click anywhere or press <span className="font-semibold">Enter</span> to continue
              <span className="cursor-block ml-1">█</span>
            </div>
          )}

          <div className="px-6 py-6 leading-relaxed text-emerald-200">
            {displayed.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.22 }}
                className="mb-2"
              >
                {line.type === "cmd" && (
                  <div>
                    <span className="prompt-dim">&gt;</span> {line.text}
                  </div>
                )}
                {line.type === "output" && (
                  <div className="ml-4 text-emerald-300/90">{line.text}</div>
                )}
                {line.type === "links" && (
                  <div className="ml-4 flex gap-3 flex-wrap mt-2">
                    {line.text.map((href, idx) => (
                      <Link
                        key={idx}
                        to={href}
                        className="a-soft inline-flex items-center gap-2 px-3 py-1 rounded border border-emerald-700/40 hover:border-emerald-400/50 bg-emerald-900/10"
                      >
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
      </div>
    </div>
  );
}
