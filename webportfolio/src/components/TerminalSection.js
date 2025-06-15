import React, { useState } from "react";
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
  const [displayedLines, setDisplayedLines] = useState([fullLines[0]]);

  const handleClick = () => {
    if (index < fullLines.length) {
      setDisplayedLines((prev) => [...prev, fullLines[index]]);
      setIndex(index + 1);
    }
  };

  return (
    <div
      className="font-mono text-green-400 bg-black p-8 rounded-xl shadow-lg max-w-3xl mx-auto mt-10 leading-relaxed cursor-pointer"
      onClick={handleClick}
    >
      {displayedLines.map((line, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {line.type === "cmd" && <span>&gt; {line.text}</span>}

          {line.type === "output" && <span className="ml-4">{line.text}</span>}

          {line.type === "links" && (
            <div className="ml-4 space-x-4">
              {line.text.map((link, idx) => (
                <Link
                  key={idx}
                  to={link}
                  className="underline hover:text-green-300 transition-colors"
                >
                  {link}
                </Link>
              ))}
            </div>
          )}
        </motion.div>
      ))}
      {index < fullLines.length && <span className="animate-pulse">█</span>}
    </div>
  );
}
