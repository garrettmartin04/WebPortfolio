import React, { useState } from "react";
import TerminalShellWrapper from "./TerminalShellWrapper";
import emailjs from "emailjs-com";


export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  function handleChange(e) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const serviceID = "service_ffe7sov";      // Replace with your EmailJS Service ID
    const templateID = "template_j04z1g9";    // Replace with your EmailJS Template ID
    const userID = "fadAvfNs1pGXi_gok";            // Replace with your EmailJS User/Public Key

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(serviceID, templateID, templateParams, userID)
      .then(() => {
        setSubmitted(true);
        setError(null);
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        console.error("EmailJS error:", err);
        setError("Oops, something went wrong. Please try again.");
      });
  }

  return (
    <TerminalShellWrapper path ="\contact">
      <div>
        <div className="text-green-300 mb-4">&gt; cat contact.txt</div>

        <div className="ml-4 mb-6">
          {}
          <p>Email:{" "}
            <a
              href="mailto:garrettmartin04@gmail.com"
              className="underline hover:text-green-100"
            >
              garrettmartin04@gmail.com
            </a>
          </p>
          <p>Phone:{" "}
            <a href="tel:4702692985" className="underline hover:text-green-100">
              470-269-2985
            </a>
          </p>
          <p>LinkedIn:{" "}
            <a
              href="https://linkedin.com/in/garrettmartin04"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-green-100"
            >
              linkedin.com/in/garrettmartin04
            </a>
          </p>
          <p>GitHub:{" "}
            <a
              href="https://github.com/garrettmartin04"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-green-100"
            >
              github.com/garrettmartin04
            </a>
          </p>

          <a
            href="/resume.pdf"
            download
            className="inline-block mt-4 px-4 py-2 border border-green-500 rounded hover:bg-green-600 hover:text-black"
          >
            Download Resume
          </a>
        </div>

        <div className="text-green-300 mb-4">&gt; msg Garrett</div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="ml-4 space-y-4 max-w-md">
            <div>
              <label className="block mb-1" htmlFor="name">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-black border border-green-500 text-green-300 font-mono px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            <div>
              <label className="block mb-1" htmlFor="email">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-black border border-green-500 text-green-300 font-mono px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            <div>
              <label className="block mb-1" htmlFor="message">
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-black border border-green-500 text-green-300 font-mono px-2 py-1 rounded resize-none focus:outline-none focus:ring-2 focus:ring-green-400"
              ></textarea>
            </div>

            <button
              type="submit"
              className="px-4 py-2 border border-green-500 rounded hover:bg-green-600 hover:text-black"
            >
              Send
            </button>
            {error && <p className="text-red-600 mt-2">{error}</p>}
          </form>
        ) : (
          <div className="ml-4 text-green-400 font-semibold mt-4">
            Thank you for your message! I’ll get back to you soon.
          </div>
        )}
      </div>
    </TerminalShellWrapper>
  );
}

