import React from "react";
import TerminalShellWrapper from "./TerminalShellWrapper";

function ProjectCard({ title, blurb, tech, repo, demo }) {
  return (
    <div className="border border-emerald-700/30 rounded-xl p-4 bg-emerald-900/5 hover:bg-emerald-900/10 transition shadow-[0_0_0_1px_rgba(16,185,129,.08)]">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-emerald-100 font-semibold text-lg leading-tight">{title}</h3>
        <span className="text-xs text-emerald-400/70 px-2 py-0.5 border border-emerald-700/40 rounded">
          repo-ready
        </span>
      </div>

      <p className="mt-2 text-emerald-200/90">{blurb}</p>

      <div className="mt-3 flex flex-wrap gap-2">
        {tech.map((t) => (
          <span
            key={t}
            className="text-xs text-emerald-300/90 bg-black/40 border border-emerald-700/40 rounded px-2 py-1"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap gap-3">
        <a
          href={repo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded border border-emerald-600/50 hover:border-emerald-400/60 bg-emerald-900/10 text-emerald-200"
          aria-label={`${title} GitHub repository`}
        >
          <span>↗</span> Repo
        </a>
        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-emerald-500 text-black font-semibold hover:bg-emerald-400 transition"
            aria-label={`${title} live demo`}
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}

export default function ProjectPage() {
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
      blurb:
        "Full-stack app to manage books, members, and loans with CRUD, search, and analytics on book popularity.",
      tech: ["Django", "React", "MySQL", "REST"],
      repo: "https://github.com/garrettmartin04/LibraryManagementSystem",
    },
    {
      title: "Real-Time OCR Demo",
      blurb:
        "Live text detection using OpenCV + Tesseract, emitting JSON events for downstream use (games/AR).",
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

  return (
    <TerminalShellWrapper path="\\projects">
      <div className="text-emerald-300 mb-4">&gt; dir projects</div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>

      <div className="mt-6 text-xs text-emerald-400/70">
        Tip: Press <span className="px-1 rounded bg-black/40 border border-emerald-700/40">Ctrl</span> +
        <span className="px-1 rounded bg-black/40 border border-emerald-700/40">Click</span> a link to open in a new tab.
      </div>
    </TerminalShellWrapper>
  );
}
