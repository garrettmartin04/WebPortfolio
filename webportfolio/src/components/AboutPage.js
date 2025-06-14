import React from "react";
import TerminalShellWrapper from "./TerminalShellWrapper";
import TerminalSidebar from "./TerminalSidebar";
import profilePic from "../assets/profile.jpg";

const aboutContent = [
  { type: "cmd", text: "cat about.txt" },
  { type: "output", text: " Hi! I'm Garrett, a Computer Science student at Georgia Southern University. I have a 3.5 GPA and expect to graduate in December 2025. I'm passionate about solving real-world problems through hard work, clean code, AI exploration, and teamwork." },
  { type: "media", src: profilePic, alt: "Garrett" },
  { type: "cmd", text: "cat skills.txt" },
  { type: "output", text: "Skills: Python, Java, React, HTML/CSS, JavaScript" },
  { type: "output", text: "GPA: 3.5 | Graduation: December 2025" },
  {
    type: "output",
    text: (
      <a
        href="/resume.pdf"
        download
        className="underline hover:text-green-100"
      >
        Download Resume
      </a>
    )
  }
];

export default function AboutPage() {
  return (
    <div className="flex">
      <TerminalSidebar />
      <div className="ml-44 w-full">
        <TerminalShellWrapper path ="\about">
          {aboutContent.map((line, i) => {
            if (line.type === "cmd") {
              return <div key={i} className="text-green-300">&gt; {line.text}</div>;
            }
            if (line.type === "output") {
              return <div key={i} className="ml-4 my-2">{line.text}</div>;
            }
            if (line.type === "media") {
              return (
                <div key={i} className="flex justify-center my-6">
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
      </div>
    </div>
  );
}


