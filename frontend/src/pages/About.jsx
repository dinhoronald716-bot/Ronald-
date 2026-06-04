import "../styles/about.css";

function About() {
    return (
        <div className="about-page">

            {/* HERO ABOUT */}
            <section className="about-hero">
                <h1>About My Tech Blog</h1>
                <p>
                    A modern full-stack blog built for learning and sharing web development knowledge.
                </p>
            </section>

            {/* PROJECT DESCRIPTION */}
            <section className="about-section">

                <h2>🚀 My Project</h2>

                <p>
                    This project is a full-stack web application built using
                    <strong> React</strong> for the frontend,
                    <strong> Node.js + Express</strong> for the backend,
                    and <strong> PostgreSQL / SQLite</strong> for database management.
                </p>

            </section>

            {/* FEATURES */}
            <section className="about-section">

                <h2>⚙️ What This Blog Can Do</h2>

                <ul>
                    <li>📝 Create, edit, and delete articles</li>
                    <li>🔍 Search articles instantly</li>
                    <li>📱 Fully responsive design (mobile + desktop)</li>
                    <li>💾 Backend API with database integration</li>
                    <li>⚡ Fast and modern UI with React</li>
                </ul>

            </section>

            {/* PURPOSE */}
            <section className="about-section">

                <h2>🎯 Why I Built This</h2>

                <p>
                    I created this project to improve my skills in full-stack development,
                    understand real-world architecture, and build a strong portfolio project.
                </p>

            </section>

            {/* STACK */}
            <section className="about-section">

                <h2>🛠️ Tech Stack</h2>

                <div className="stack">
                    <span>React</span>
                    <span>Node.js</span>
                    <span>Express</span>
                    <span>SQLite / PostgreSQL</span>
                    <span>CSS3</span>
                    <span>REST API</span>
                </div>

            </section>

        </div>
    );
}

export default About;
