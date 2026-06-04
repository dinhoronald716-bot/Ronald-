import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getArticles } from "../services/articleService";
import "../styles/articleDetails.css";

function ArticleDetails() {
    const { id } = useParams();

    const [article, setArticle] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const load = async () => {
            try {
                const res = await getArticles();

                const data = res.data; // 👈 TON API EST BIEN UN ARRAY
				console.log(typeof id);
                console.log("ALL ARTICLES:", data);
                console.log("CURRENT ID:", id);

                // 🔥 FIX IMPORTANT
                const found = data.find(
                    (a) => Number(a.id) === Number(id)
                );

                console.log("FOUND ARTICLE:", found);

                setArticle(found || null);
            } catch (err) {
                console.error("Error:", err);
            } finally {
                setLoading(false);
            }
        };

        load();
    }, [id]);

    if (loading) {
        return (
            <div className="article-details">
                <p>Loading article...</p>
            </div>
        );
    }

    if (!article) {
        return (
            <div className="article-details">
                <p>Article not found ❌</p>

                <Link to="/articles" className="back-btn">
                    ← Back to Articles
                </Link>
            </div>
        );
    }

    return (
        <div className="article-details">

            <Link to="/articles" className="back-btn">
                ← Back to Articles
            </Link>

            <h1>{article.title}</h1>

            <div className="meta">
                <span>🧑 Author: Admin</span>
                <span>📅 ID: {article.id}</span>
            </div>

            <div className="content">
                <p>{article.content}</p>
            </div>

        </div>
    );
}

export default ArticleDetails;
