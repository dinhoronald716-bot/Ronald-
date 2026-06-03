import { useEffect, useState } from "react";
import {
    getArticles,
    deleteArticle,
    updateArticle
} from "../services/articleService";

import "../styles/article.css";

function Articles() {
    const [articles, setArticles] = useState([]);
    const [editId, setEditId] = useState(null);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [search, setSearch] = useState("");

    const load = async () => {
        try {
            const res = await getArticles();
            setArticles(res.data);
        } catch (err) {
            console.error("Erreur API :", err);
        }
    };

    useEffect(() => {
        load();
    }, []);

    const remove = async (id) => {
        await deleteArticle(id);
        load();
    };

    const edit = (a) => {
        setEditId(a.id);
        setTitle(a.title);
        setContent(a.content);
    };

    const save = async () => {
        await updateArticle(editId, { title, content });
        setEditId(null);
        load();
    };

    const filtered = articles.filter(a =>
        a.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            <h1>🟠 Tech Blog</h1>

            <input
                type="text"
                placeholder="Search article..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            {filtered.length === 0 && (
                <p className="empty-message">Aucun article trouvé.</p>
            )}

            {filtered.map(a => (
                <div className="article-card" key={a.id}>
                    <h2>{a.title}</h2>
                    <p>{a.content}</p>

                    <div className="actions">
                        <button className="edit" onClick={() => edit(a)}>
                            Edit
                        </button>

                        <button className="danger" onClick={() => remove(a.id)}>
                            Delete
                        </button>
                    </div>
                </div>
            ))}

            {editId && (
                <div className="form-box">
                    <h2>Edit Article</h2>

                    <input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />

                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />

                    <button className="primary" onClick={save}>
                        Save
                    </button>
                </div>
            )}
        </div>
    );
}

export default Articles;