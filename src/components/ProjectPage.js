import React from "react";
import TerminalShellWrapper from "./TerminalShellWrapper";

const projects = [
  {
    title: "NoteStream",
    blurb:
      "Full-featured study platform for notes, quizzes, and flashcards with friend collaboration, email verification, and secure auth.",
    tech: ["Java", "JavaScript", "HTML", "CSS", "Auth", "Email"],
    repo: "https://github.com/garrettmartin04/NoteStream",
    demo: "https://notestream.onrender.com",
  },
  {
    title: "Library Management System",
    blurb: "Full-stack app to manage books, members, and loans with CRUD, search, and analytics on book popularity.",
    tech: ["Django", "React", "MySQL", "REST"],
    repo: "https://github.com/garrettmartin04/LibraryManagementSystem",
  },
  {
    title: "Real-Time OCR Demo",
    blurb: "Live text detection using OpenCV + Tesseract, emitting JSON events for downstream use (games/AR).",
    tech: ["Python", "OpenCV", "Tesseract"],
    repo: "https://github.com/garrettmartin04/OCRDemo",
  },
  {
    title: "SkyPhantom",
    blurb:
      "Arcade-style aerial combat game built in Unity. Focus on smooth controls, camera follow, and enemy/pickup systems while iterating on level design.",
    tech: ["Unity", "C#"],
    repo: "https://github.com/garrettmartin04/SkyPhantom",
  },
];

export default function ProjectPage() {
  return (
    <TerminalShellWrapper path="~/projects" title="Projects" command="ls projects --detailed">
      <div className="project-grid">
        {projects.map((project) => (
          <article key={project.title} className="project-card">
            <header>
              <h3>{project.title}</h3>
              <span>build</span>
            </header>
            <p>{project.blurb}</p>
            <div className="tech-list">
              {project.tech.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <div className="project-links">
              <a href={project.repo} target="_blank" rel="noopener noreferrer">Repository</a>
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="demo-link">
                  Live Demo
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </TerminalShellWrapper>
  );
}
