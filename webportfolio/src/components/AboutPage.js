import React from "react";
import TerminalShellWrapper from "./TerminalShellWrapper";
import profilePic from "../assets/profile.jpg"; 

const aboutContent = [
  { type: "cmd", text: "cat about.txt" },
  {
    type: "output",
    text: "Hi, I'm Garrett. I’m a software engineer who enjoys exploring new tech and solving real-world problems."
  },
  {
    type: "output",
    text: "Currently focused on React, AI systems, and full-stack development."
  },
  {
    type: "media",
    src: profilePic,
    alt: "Garrett headshot"
  },
  {
    type: "output",
    text: "In my free time, I golf, play chess, and watch sports."
  }
];

export default function AboutPage() {
  return (
    <TerminalShellWrapper>
      {aboutContent.map((line, i) => {
        if (line.type === "cmd") {
          return (
            <div key={i} className="text-green-300">
              <span>&gt; {line.text}</span>
            </div>
          );
        }
        if (line.type === "output") {
          return (
            <div key={i} className="ml-4 my-2">
              {line.text}
            </div>
          );
        }
        if (line.type === "media") {
          return (
            <div
              key={i}
              className="flex justify-center my-6"
            >
              <img
                src={line.src}
                alt={line.alt}
                className="border-2 border-green-500 rounded-md max-w-xs w-full"
              />
            </div>
          );
        }
        return null;
      })}
    </TerminalShellWrapper>
  );
}
