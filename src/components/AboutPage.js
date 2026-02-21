import React from "react";
import TerminalShellWrapper from "./TerminalShellWrapper";

const skills = [
  "Languages: Python, Java, JavaScript, HTML, CSS",
  "Frameworks/Libraries: Django, Spring Boot, React, OpenCV, Tesseract, TensorFlow, Keras",
  "Databases/Tools: MySQL, Git, Maven, REST APIs, Agile/Scrum",
];

const experience = [
  "Software Engineering Intern — Sports Media Inc. (May 2025 – Aug 2025)",
  "• Optimized SEO/AEO strategies to boost visibility & engagement.",
  "• Collaborated in Agile teams to design, develop, and ship production features.",
  "• Built responsive, accessible web experiences across devices/browsers.",
  "Grill Cook — Cracker Barrel Old Country Store (May 2024 – Present)",
  "• Trained staff & streamlined workflows (teamwork, time mgmt, leadership).",
  "Scoreboard Operator — LakePoint Sports (Jun 2018 – Jul 2019)",
  "• Ran live scoreboard ops; accurate, timely updates & quick troubleshooting.",
];

export default function AboutPage() {
  return (
    <TerminalShellWrapper path="~/about" title="About" command="cat candidate_profile.json">
      <div className="info-grid">
        <article className="info-card">
          <h3>Profile</h3>
          <p>Brian Garrett Martin — CS @ Georgia Southern (Dec 2025), Serial Learner and Optimist.</p>
        </article>

        <article className="info-card">
          <h3>Education</h3>
          <p>Georgia Southern University — B.S. Computer Science</p>
          <p>GPA: 3.4 / 4.0 | Graduation: Dec 2025 | Dean’s List (3 semesters)</p>
        </article>

        <article className="info-card info-card-wide">
          <h3>Relevant Coursework</h3>
          <p>
            Data Structures · Algorithm Design & Analysis · Database Systems · Operating Systems · Computer
            Architecture · Software Engineering · Distributed Systems · Computer Security
          </p>
        </article>

        <article className="info-card info-card-wide">
          <h3>Skills</h3>
          <ul>
            {skills.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="info-card info-card-wide">
          <h3>Experience</h3>
          <ul>
            {experience.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </div>
    </TerminalShellWrapper>
  );
}
