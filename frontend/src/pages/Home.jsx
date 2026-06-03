import hero from "../assets/hero.png";

function Home() {
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

                <button>
                    Explore Articles
                </button>
            </div>

            <img src={hero} alt="hero" />
        </div>
    );
}

export default Home;
