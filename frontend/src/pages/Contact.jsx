import { useState } from "react";
import "../styles/contact.css";

function Contact() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        alert("Message sent successfully 🚀");

        setName("");
        setEmail("");
        setMessage("");
    };

    return (
        <div className="contact-page">

            {/* HERO */}
            <section className="contact-hero">
                <h1>📩 Contact Me</h1>
                <p>
                    Got a question, idea or collaboration? Send me a message!
                </p>
            </section>

            {/* FORM */}
            <form className="contact-form" onSubmit={handleSubmit}>

                <div className="input-group">
                    <label>Name</label>
                    <input
                        type="text"
                        placeholder="Your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>

                <div className="input-group">
                    <label>Email</label>
                    <input
                        type="email"
                        placeholder="Your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="input-group">
                    <label>Message</label>
                    <textarea
                        placeholder="Write your message..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                </div>

                <button type="submit" className="btn-send">
                    🚀 Send Message
                </button>

            </form>

        </div>
    );
}

export default Contact;
