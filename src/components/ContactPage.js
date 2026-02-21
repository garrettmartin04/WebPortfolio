import React, { useState } from "react";
import emailjs from "emailjs-com";
import TerminalShellWrapper from "./TerminalShellWrapper";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (event) => {
    setFormData((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    emailjs
      .send("service_ffe7sov", "template_j04z1g9", formData, "fadAvfNs1pGXi_gok")
      .then(() => {
        setSubmitted(true);
        setError(null);
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => setError("Oops, something went wrong. Please try again."));
  };

  return (
    <TerminalShellWrapper path="~/contact" title="Contact" command="open communication_channel">
      <div className="contact-grid">
        <section className="info-card">
          <h3>Direct Contact</h3>
          <ul className="contact-list">
            <li>Email: <a href="mailto:garrettmartin04@gmail.com">garrettmartin04@gmail.com</a></li>
            <li>Phone: <a href="tel:4702692985">470-269-2985</a></li>
            <li>
              LinkedIn: <a href="https://linkedin.com/in/garrettmartin04" target="_blank" rel="noopener noreferrer">linkedin.com/in/garrettmartin04</a>
            </li>
            <li>
              GitHub: <a href="https://github.com/garrettmartin04" target="_blank" rel="noopener noreferrer">github.com/garrettmartin04</a>
            </li>
          </ul>
          <a className="btn-secondary" href="/Brian_Martin_Resume.pdf" download>
            Download Resume
          </a>
        </section>

        <section className="info-card">
          <h3>Send a Message</h3>
          {!submitted ? (
            <form onSubmit={handleSubmit} className="contact-form" aria-label="Contact form">
              <label>
                Name
                <input name="name" value={formData.name} onChange={handleChange} required />
              </label>
              <label>
                Email
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
              </label>
              <label>
                Message
                <textarea name="message" rows="5" value={formData.message} onChange={handleChange} required />
              </label>
              <button type="submit" className="btn-primary">Send Message</button>
              {error && <p className="form-error">{error}</p>}
            </form>
          ) : (
            <p className="form-success">Thanks for your message — I&apos;ll get back to you soon.</p>
          )}
        </section>
      </div>
    </TerminalShellWrapper>
  );
}
