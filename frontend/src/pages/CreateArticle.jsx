import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createArticle } from "../services/articleService";
import "../styles/createArticle.css";

function CreateArticle() {

    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("Tech");
    const [author, setAuthor] = useState("");
    const [content, setContent] = useState("");

    const navigate = useNavigate();

    const submit = async (e) => {
        e.preventDefault();

        try {
            await createArticle({
                title,
                category,
                author,
                content
            });

            setTitle("");
            setCategory("Tech");
            setAuthor("");
            setContent("");

            navigate("/articles");

        } catch (err) {
            console.error("Erreur create article :", err);
        }
    };

    return (
        <div className="create-page">

            {/* HEADER */}
            <div className="create-header">
                <h1>✍️ Create New Article</h1>
                <p>Share your knowledge with the world 🌍</p>
            </div>

            {/* FORM */}
            <form className="create-card" onSubmit={submit}>

                {/* TITLE */}
                <label>Title</label>
                <input
                    placeholder="Enter a powerful title..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                {/* CATEGORY + AUTHOR */}
                <div className="row">

                    <div className="field">
                        <label>Category</label>
                        <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            <option>Tech</option>
                            <option>Programming</option>
                            <option>Design</option>
                            <option>AI</option>
                            <option>Life</option>
                        </select>
                    </div>

                    <div className="field">
                        <label>Author</label>
                        <input
                            placeholder="Your name..."
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                        />
                    </div>

                </div>

                {/* CONTENT */}
                <label>Content</label>
                <textarea
                    placeholder="Write your article here..."
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />

                <div className="counter">
                    {content.length} characters
                </div>

                {/* ACTIONS */}
                <div className="actions">

                    <button
                        type="button"
                        className="btn secondary"
                        onClick={() => {
                            setTitle("");
                            setCategory("Tech");
                            setAuthor("");
                            setContent("");
                        }}
                    >
                        Reset
                    </button>

                    <button className="btn primary">
                        Publish Article 🚀
                    </button>

                </div>

            </form>

        </div>
    );
}

export default CreateArticle;
