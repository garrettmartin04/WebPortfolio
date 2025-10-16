import React, { useState } from "react";
import TerminalShellWrapper from "./TerminalShellWrapper";
import emailjs from "emailjs-com";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  function handleChange(e) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const serviceID = "service_ffe7sov";
    const templateID = "template_j04z1g9";
    const userID = "fadAvfNs1pGXi_gok";

    emailjs
      .send(serviceID, templateID, formData, userID)
      .then(() => {
        setSubmitted(true);
        setError(null);
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() =>
        setError("Oops, something went wrong. Please try again.")
      );
  }

  return (
    <TerminalShellWrapper path="\\contact">
      <div className="text-emerald-300 mb-4">&gt; cat contact.txt</div>

      <div className="ml-1 mb-6 space-y-1 text-emerald-200/90">
        <p>
          Email:{" "}
          <a className="a-soft" href="mailto:garrettmartin04@gmail.com">
            garrettmartin04@gmail.com
          </a>
        </p>
        <p>
          Phone:{" "}
          <a className="a-soft" href="tel:4702692985">
            470-269-2985
          </a>
        </p>
        <p>
          LinkedIn:{" "}
          <a
            className="a-soft"
            href="https://linkedin.com/in/garrettmartin04"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/garrettmartin04
          </a>
        </p>
        <p>
          GitHub:{" "}
          <a
            className="a-soft"
            href="https://github.com/garrettmartin04"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/garrettmartin04
          </a>
        </p>
        <a
          href="/resume.pdf"
          download
          className="inline-block mt-3 px-3 py-1 border border-emerald-700/40 rounded hover:border-emerald-400/60"
        >
          Download Resume
        </a>
      </div>

      <div className="text-emerald-300 mb-3">&gt; msg Garrett</div>

      {!submitted ? (
        <form
          onSubmit={handleSubmit}
          className="grid gap-4 max-w-md ml-1"
          aria-label="Contact form"
        >
          <label className="grid gap-1">
            <span className="text-sm">Name</span>
            <input
              required
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="bg-black/60 border border-emerald-700/40 text-emerald-200 px-3 py-2 rounded placeholder-emerald-300/40 focus-visible:shadow-[var(--ring)]"
              placeholder="Your Name"
            />
          </label>

          <label className="grid gap-1">
            <span className="text-sm">Email</span>
            <input
              required
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="bg-black/60 border border-emerald-700/40 text-emerald-200 px-3 py-2 rounded placeholder-emerald-300/40 focus-visible:shadow-[var(--ring)]"
              placeholder="you@domain.com"
            />
          </label>

          <label className="grid gap-1">
            <span className="text-sm">Message</span>
            <textarea
              required
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="bg-black/60 border border-emerald-700/40 text-emerald-200 px-3 py-2 rounded resize-y placeholder-emerald-300/40 focus-visible:shadow-[var(--ring)]"
              placeholder="Say hello…"
            />
          </label>

          <button
            type="submit"
            className="justify-self-start px-4 py-2 rounded bg-emerald-500 text-black font-semibold hover:bg-emerald-400 transition"
          >
            Send
          </button>
          {error && <p className="text-red-400">{error}</p>}
        </form>
      ) : (
        <div className="ml-1 text-emerald-400 font-semibold mt-2">
          Thank you for your message! I’ll get back to you soon.
        </div>
      )}
    </TerminalShellWrapper>
  );
}
