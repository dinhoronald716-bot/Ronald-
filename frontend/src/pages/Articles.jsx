import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/article.css";

function Articles() {

    const [search, setSearch] = useState("");
    const handleSave = (article) => {
        let saved = JSON.parse(localStorage.getItem("saved")) || [];
    
        saved.push(article);
    
        localStorage.setItem("saved", JSON.stringify(saved));
    
        alert("Article saved!");
    };
    const articles = [
        {
            id: 1,
            title: "🚀 How to Learn React in 2026",
            content: "Master React step by step using components, hooks and real projects."
        },
        {
            id: 2,
            title: "⚡ Node.js for Beginners",
            content: "Understand backend development with Node.js and Express."
        },
        {
            id: 3,
            title: "🧠 JavaScript ES6+ Explained",
            content: "Learn modern JavaScript features used in real projects."
        },
        {
            id: 4,
            title: "🌐 Full Stack Developer Roadmap",
            content: "Frontend + Backend + Database = complete developer skills."
        },
        {
            id: 5,
            title: "💾 REST API with Express",
            content: "Build powerful APIs using Express and best practices."
        },
        {
            id: 6,
            title: "🔐 Git & GitHub Essentials",
            content: "Version control system every developer must master."
        },
        {
            id: 7,
            title: "🎯 React Hooks Deep Dive",
            content: "useState, useEffect and custom hooks explained clearly."
        },
        {
            id: 8,
            title: "📱 Responsive Web Design",
            content: "Make websites look perfect on mobile, tablet and desktop."
        },
        {
            id: 9,
            title: "🗄️ Database Basics",
            content: "Learn SQL, PostgreSQL and how backend stores data."
        },
        {
            id: 10,
            title: "🔥 Clean Code Practices",
            content: "Write readable, maintainable and professional code."
        }
    ];

    const filtered = articles.filter(a =>
        a.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="articles-page">

            {/* HEADER */}
            <div className="articles-header">

                <div>
                    <h1>🟠 Tech Articles</h1>
                    <p>Learn modern web development step by step</p>
                </div>

                {/* ✅ ADD BUTTON */}
                <Link to="/create">
                    <button className="btn-add">
                        + Add Article
                    </button>
                </Link>

            </div>

            {/* SEARCH */}
            <input
                className="search"
                placeholder="Search articles..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            {/* GRID */}
            <div className="articles-grid">

                {filtered.map((a) => (
                    <div className="article-card" key={a.id}>

                        <h2>{a.title}</h2>

                        <p>{a.content}</p>

                        <div className="card-actions">

                            <Link to={`/articles/${a.id}`}>
                                <button className="btn read">
                                    Read More
                                </button>
                            </Link>

                            <button className="btn save" onClick={() => handleSave(a)}>
                                Save
                            </button>

                        </div>

                    </div>
                ))}

            </div>

        </div>
    );
}

export default Articles;
