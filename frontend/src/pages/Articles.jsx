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

    // 👉 10 ARTICLES RÉELS (fallback si API vide)
    const fallbackArticles = [
        {
            id: 1,
            title: "Comment apprendre React rapidement en 2026",
            content: "React est une bibliothèque JavaScript très utilisée. Commence par les composants et hooks."
        },
        {
            id: 2,
            title: "Node.js expliqué simplement",
            content: "Node.js permet d'exécuter JavaScript côté serveur avec performance."
        },
        {
            id: 3,
            title: "Créer une API REST avec Express",
            content: "Express facilite la création d’API REST pour ton backend."
        },
        {
            id: 4,
            title: "JavaScript moderne ES6+",
            content: "Apprends let, const, arrow functions, async/await."
        },
        {
            id: 5,
            title: "Devenir développeur full-stack",
            content: "Frontend + Backend + Base de données = full-stack."
        },
        {
            id: 6,
            title: "Git et GitHub essentiels",
            content: "Git permet de versionner ton code facilement."
        },
        {
            id: 7,
            title: "React Hooks en pratique",
            content: "useState et useEffect sont les hooks principaux."
        },
        {
            id: 8,
            title: "Créer un blog moderne",
            content: "React + API + design responsive = blog moderne."
        },
        {
            id: 9,
            title: "Architecture Node.js propre",
            content: "Sépare routes, controllers et services."
        },
        {
            id: 10,
            title: "Bonnes pratiques web",
            content: "Code propre, simple, réutilisable et testé."
        }
    ];

    const load = async () => {
        try {
            const res = await getArticles();
            const data = res.data || [];

            setArticles(data.length >= 10 ? data : fallbackArticles);

        } catch (err) {
            console.error("Erreur API :", err);
            setArticles(fallbackArticles);
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
        <div className="articles-page">

            <h1>🟠 Tech Blog</h1>

            <input
                className="search-input"
                placeholder="Search article..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            {filtered.length === 0 && (
                <p className="empty-message">
                    Aucun article trouvé
                </p>
            )}

            <div className="articles-grid">
                {filtered.map((a) => (
                    <div className="article-card" key={a.id}>
                        <h2>{a.title}</h2>
                        <p>{a.content}</p>

                        <div className="actions">
                            <button className="edit" onClick={() => edit(a)}>Edit</button>
                            <button className="danger" onClick={() => remove(a.id)}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>

            {editId && (
                <div className="edit-box">
                    <input value={title} onChange={(e) => setTitle(e.target.value)} />
                    <textarea value={content} onChange={(e) => setContent(e.target.value)} />
                    <button className="primary" onClick={save}>Save</button>
                </div>
            )}

        </div>
    );
}

export default Articles;