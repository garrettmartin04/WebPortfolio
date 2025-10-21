import React, { useState } from "react";
import emailjs from "emailjs-com";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_ffe7sov",    
      "template_j04z1g9",   
      e.target,
      "fadAvfNs1pGXi_gok"        
    )
    .then(() => {
      setSubmitted(true);
      e.target.reset();
    })
    .catch((error) => {
      console.error("EmailJS error:", error);
    });
  };

  return (
    <form onSubmit={sendEmail} className="flex flex-col max-w-md mx-auto space-y-4 p-4 border border-green-500 rounded-md bg-black text-green-300 font-mono">
      <input type="text" name="name" placeholder="Your Name" required className="p-2 bg-gray-900 border border-green-500 rounded" />
      <input type="email" name="email" placeholder="Your Email" required className="p-2 bg-gray-900 border border-green-500 rounded" />
      <textarea name="message" placeholder="Your Message" required className="p-2 bg-gray-900 border border-green-500 rounded" rows={5} />
      <button type="submit" className="bg-green-500 text-black font-bold py-2 rounded hover:bg-green-600 transition">Send</button>
      {submitted && <p className="text-green-400 mt-2">Thanks for your message!</p>}
    </form>
  );
}
