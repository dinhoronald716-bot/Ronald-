import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createArticle } from "../services/articleService";

function CreateArticle() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate();

    const submit = async (e) => {
        e.preventDefault();

        try {
            await createArticle({ title, content });
            setTitle("");
            setContent("");
            navigate("/articles");
        } catch (err) {
            console.error("Erreur create article :", err);
        }
    };

    return (
        <form className="card" onSubmit={submit}>
            <h2>➕ New Article</h2>

            <input
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <textarea
                placeholder="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />

            <button className="primary">Publish</button>
        </form>
    );
}

export default CreateArticle;