import { useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/contact.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      "service_vmgzdys",
      "template_6zx80hg",
      {
        from_name: name,
        from_email: email,
        message: message,
      },
      "6TfPUNkwBhSWn03wv"
    ).then(() => {
      alert("Message envoyé 🚀");

      setName("");
      setEmail("");
      setMessage("");
      setLoading(false);
    }).catch((error) => {
      console.log(error);
      alert("Erreur envoi");
      setLoading(false);
    });
  };

  return (
    <div className="contact-page">

      <section className="contact-hero">
        <h1>📩 Contact Me</h1>
        <p>Got a question, idea or collaboration?</p>
      </section>

      <form className="contact-form" onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <textarea
          placeholder="Your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />

        <button type="submit" className="btn-send" disabled={loading}>
          {loading ? "Envoi..." : "🚀 Send Message"}
        </button>

      </form>
    </div>
  );
}

export default Contact;