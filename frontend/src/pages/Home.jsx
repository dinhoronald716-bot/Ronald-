import { useNavigate } from "react-router-dom";
import hero from "../assets/hero.png";
import "../styles/home.css";

function Home() {
    const navigate = useNavigate();
    return (
        <div className="hero">
            <div className="hero-text">
                <h1>
                    Learn React, Node.js
                    and Modern Web Development
                </h1>

                <p>
                    Tutorials, projects and guides
                    for future developers.
                </p>

                <button onClick={() => navigate("/articles")}>
                    Explore Articles
                </button>
            </div>

            <img src={hero} alt="hero" />
        </div>
    );
}

export default Home;
