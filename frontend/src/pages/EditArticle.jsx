import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
    getArticles,
    updateArticle
} from "../services/articleService";

function EditArticle() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    useEffect(() => {
        const loadArticle = async () => {
            try {
                const res = await getArticles();
                const article = res.data.find(a => a.id === id);

                if (article) {
                    setTitle(article.title);
                    setContent(article.content);
                }
            } catch (err) {
                console.error("Erreur load article :", err);
            }
        };

        loadArticle();
    }, [id]);

    const submit = async (e) => {
        e.preventDefault();

        try {
            await updateArticle(id, { title, content });
            navigate("/articles");
        } catch (err) {
            console.error("Erreur update :", err);
        }
    };

    return (
        <div className="container">
            <h1>Edit Article</h1>

            <form onSubmit={submit}>
                <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />

                <button className="primary">
                    Save
                </button>
            </form>
        </div>
    );
}

export default EditArticle;