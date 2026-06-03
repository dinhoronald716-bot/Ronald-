import { useState } from "react";
import { createArticle } from "../services/articleService";

function CreateArticle() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const submit = async (e) => {
        e.preventDefault();
        await createArticle({ title, content });
        setTitle("");
        setContent("");
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
