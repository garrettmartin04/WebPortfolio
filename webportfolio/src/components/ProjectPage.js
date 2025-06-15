import React from "react";
import TerminalShellWrapper from "./TerminalShellWrapper";

export default function ProjectPage() {
  return (
    <TerminalShellWrapper path ="\projects">
      <div className="text-green-300 mb-4">&gt; dir projects</div>

      <div className="ml-4 space-y-6">
        <div>
          <div className="text-green-200 font-semibold">📁 NoteStream</div>
          <p className="ml-2">NoteStream is a full-featured, web-based study platform designed to help students organize, review, and collaborate on academic material. Users can create and manage notes, quizzes, and flashcards, as well as connect with friends to work on content together. A user authentication system, email verification, and a dedicated support email provide a secure and user-friendly experience. </p>
          <p className="ml-2">Built with Java, JavaScript, HTML, and CSS.</p>
          <p className="ml-2">
            GitHub:{" "}
            <a
              href="https://github.com/garrettmartin04/team6Project"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-green-100"
            >
              NoteStream Repo
            </a>
          </p>
        </div>

        <div>
          <div className="text-green-200 font-semibold">📁 Library Management System</div>
          <p className="ml-2">A full-stack web app built to manage books, members, and loans in a library setting. Users can add, edit, delete, and search records, with advanced features like analyzing book popularity based on loan history. A Django backend handles logic and APIs, while the React frontend provides a responsive user interface. Built with Django, React, MySQL, and Python.</p>
          <p className="ml-2">
            GitHub:{" "}
            <a
              href="https://github.com/garrettmartin04/LibraryManagementSystem"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-green-100"
            >
                Library Management System Repo
            </a>
          </p>
          <p className="ml-2">
            NoteStream Live Demo!:{" "}
            <a
              href="https://notestream.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-green-100"
            >
                Link
            </a>
          </p>
        </div>
         <div>
          <div className="text-green-200 font-semibold">📁 XOR Neural Network</div>
          <p className="ml-2">A simple neural network built in Python using TensorFlow and Keras to solve the XOR logic gate — a foundational non-linear problem in machine learning. The model features one hidden layer (8 neurons, tanh activation) and a sigmoid output layer, trained with binary cross-entropy and the Adam optimizer. After 5000 epochs, it successfully learned XOR outputs. This project was a hands-on intro to neural network architecture and training fundamentals.</p>
            <p className="ml-2">Built with Python, TensorFlow, and Keras.</p>
          <p className="ml-2">
            GitHub:{" "}
            <a
              href="https://github.com/garrettmartin04/PythonXOR"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-green-100"
            >
                XOR Neural Network Repo
            </a>
          </p>
        </div>
      </div>
    </TerminalShellWrapper>
  );
}
