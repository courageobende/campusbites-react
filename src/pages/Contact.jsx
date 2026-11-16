
import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      alert("Please fill in all fields.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    alert("Your message has been submitted successfully!");

    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  }

  return (
    <div className="contact-page">
      <section className="contact-header">
        <p>WE'D LOVE TO HEAR FROM YOU</p>
        <h1>Get In Touch</h1>
        <p>Have a question or suggestion? Send us a message.</p>
      </section>

      <section className="contact-content">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Subject</label>
            <input
              type="text"
              placeholder="Enter subject"
              value={subject}
              onChange={(event) => setSubject(event.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea
              placeholder="Write your message..."
              rows="5"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            />
          </div>

          <button type="submit">Send Message</button>
        </form>
      </section>
    </div>
  );
}

export default Contact;
