import { Link } from "react-router-dom";
import "../styles/home.css";

function Home() {
    return (
        <div className="home">

            {/* HERO */}
            <section className="hero">

                <div className="hero-text">

                    <h1>
                        Build Modern <span>Web Apps</span> Faster 🚀
                    </h1>

                    <p>
                        A clean full-stack blog built with React, Node.js and modern UI design.
                        Learn, create and improve your developer skills.
                    </p>

                    <div className="hero-buttons">
                        <Link to="/articles">
                            <button className="btn primary">
                                Explore Articles
                            </button>
                        </Link>

                        <Link to="/create">
                            <button className="btn secondary">
                                Write Article
                            </button>
                        </Link>
                    </div>

                </div>

                <div className="hero-image">
                    <img
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
                        alt="team work"
                    />
                </div>

            </section>

            {/* FEATURES */}
            <section className="features">

                <div className="feature-card">
                    ⚡ Fast Learning
                </div>

                <div className="feature-card">
                    💻 Clean Code
                </div>

                <div className="feature-card">
                    🚀 Full Stack
                </div>

            </section>

        </div>
    );
}

export default Home;
