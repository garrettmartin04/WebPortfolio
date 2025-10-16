import React from "react";
import TerminalShellWrapper from "./TerminalShellWrapper";

export default function AboutPage() {
  const lines = [
    { t: "cmd", text: "whoami" },
    { t: "out", text: "Brian Garrett Martin — CS @ Georgia Southern (Dec 2025), Serial Learner and Optimist" },

    { t: "cmd", text: "cat education.txt" },
    { t: "out", text: "Georgia Southern University — B.S. Computer Science" },
    { t: "out", text: "GPA: 3.4 / 4.0 | Graduation: Dec 2025 | Dean’s List (3 semesters)" },

    { t: "cmd", text: "cat coursework.txt" },
    { t: "out", text: "Data Structures · Algorithm Design & Analysis · Database Systems · Operating Systems ·" },
    { t: "out", text: "Computer Architecture · Software Engineering · Distributed Systems · Computer Security" },

    { t: "cmd", text: "cat skills.txt" },
    { t: "out", text: "Languages: Python, Java, JavaScript, HTML, CSS" },
    { t: "out", text: "Frameworks/Libraries: Django, Spring Boot, React, OpenCV, Tesseract, TensorFlow, Keras" },
    { t: "out", text: "Databases/Tools: MySQL, Git, Maven, REST APIs, Agile/Scrum" },

    { t: "cmd", text: "cat experience.txt" },
    { t: "out", text: "Software Engineering Intern — Sports Media Inc. (May 2025 – Aug 2025)" },
    { t: "out", text: "• Optimized SEO/AEO strategies to boost visibility & engagement." },
    { t: "out", text: "• Collaborated in Agile teams to design, develop, and ship production features." },
    { t: "out", text: "• Built responsive, accessible web experiences across devices/browsers." },
    { t: "out", text: "Grill Cook — Cracker Barrel Old Country Store (May 2024 – Present)" },
    { t: "out", text: "• Trained staff & streamlined workflows (teamwork, time mgmt, leadership)." },
    { t: "out", text: "Scoreboard Operator — LakePoint Sports (Jun 2018 – Jul 2019)" },
    { t: "out", text: "• Ran live scoreboard ops; accurate, timely updates & quick troubleshooting." },

    { t: "cmd", text: "cat projects.txt" },
    { t: "out", text: "NoteStream — Full-stack study platform (notes, quizzes, flashcards, friends/collab)." },
    { t: "out", text: "• Java/JS/HTML/CSS · Auth + email verification · Real-time collab tools." },
    { t: "out", text: "Library Management System — Django + React + MySQL (CRUD, search, analytics)." },
    { t: "out", text: "Real-Time OCR System — Python, OpenCV, Tesseract (live text detect + boxes + confidence)." },

    { t: "cmd", text: "cat activities.txt" },
    { t: "out", text: "Theta Xi — Scholarship Chair (Aug 2022 – Aug 2023): +20% chapter GPA via tutoring programs." },
    { t: "out", text: "Association for Computing Machinery (ACM) — Member (May 2025 – Present)." },

    { t: "cmd", text: "open links" },
    { t: "link", label: "GitHub", href: "https://github.com/garrettmartin04" },
    { t: "link", label: "LinkedIn", href: "https://linkedin.com/in/garrettmartin04" },
    { t: "link", label: "Resume (PDF)", href: "/Brian_Martin_Resume.pdf", download: true },
  ];

  return (
    <TerminalShellWrapper path="\\about">
      <div className="space-y-2 leading-relaxed text-emerald-200">
        {lines.map((line, i) => {
          if (line.t === "cmd") {
            return (
              <div key={i} className="text-emerald-300">
                &gt; {line.text}
              </div>
            );
          }
          if (line.t === "out") {
            return (
              <div key={i} className="ml-4 text-emerald-200/90">
                {line.text}
              </div>
            );
          }
          if (line.t === "link") {
            return (
              <div key={i} className="ml-4">
                <a
                  className="a-soft inline-flex items-center gap-2 px-2 py-0.5 rounded border border-emerald-700/40 hover:border-emerald-400/50 bg-emerald-900/10"
                  href={line.href}
                  target={line.download ? undefined : "_blank"}
                  rel={line.download ? undefined : "noopener noreferrer"}
                  download={line.download || undefined}
                >
                  {line.label}
                </a>
              </div>
            );
          }
          return null;
        })}
      </div>
    </TerminalShellWrapper>
  );
}


