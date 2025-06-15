import React from "react";
import TerminalShellWrapper from "./TerminalShellWrapper";
import TerminalSidebar from "./TerminalSidebar";
import profilePic from "../assets/profile.jpg";

const aboutContent = [
  { type: "cmd", text: "cat about.txt" },
  { type: "output", text: " Hi! I'm Garrett, a Computer Science student at Georgia Southern University. I have a 3.5 GPA and expect to graduate in December 2025. I'm passionate about solving real-world problems through hard work, clean code, AI exploration, and teamwork." },
  { type: "media", src: profilePic, alt: "Garrett" },
  { type: "cmd", text: "cat experience.txt" },
  { type: "output", text: "Experience: Software Engineering Intern at Sports Media Inc., May 2025 - Present" },
  { type: "output", text: "-    Collaborated on the development of scalable SaaS tools to support sports content delivery, integrating AI models to enhance user engagement and personalize fan experiences." },
  { type: "output", text: "-    Contributed to SEO optimization efforts by analyzing site performance and implementing data-driven improvements that increased page visibility and organic traffic. " }, 
  { type: "output", text: "Operator at Lakepoint Sports, March 2019 - September 2020" },
  { type: "output", text: "-    Lead Managed live scoreboard operations for sporting events, ensuring accurate and timely updates of scores and game statistics." },
  { type: "output", text: "-    Demonstrated technical proficiency with scoreboard systems and equipment, quickly troubleshooting and resolving operational issues." },    
  { type: "cmd", text: "cat education.txt" },
  { type: "output", text: "Education: Georgia Southern University, B.S. in Computer Science" },
  { type: "output", text: "Relevant Coursework: Data Structures, Algorithms, Web Development, Database Management" },
  { type: "output", text: "GPA: 3.5 | Graduation: December 2025" },
  { type: "cmd", text: "cat skills.txt" },
  { type: "output", text: "Technologies: Git; GitHub; MySQL; PostgreSQL" },
  { type: "output", text: "Languages & Frameworks: Java; Python; HTML; CSS; React; Spring Boot; Django" },
  { type: "output", text: "Interests: Camping; Traveling; Fishing; AI Tools; Golf" },
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


