import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  AiFillLike,
  AiOutlineLike,
  AiFillDislike,
  AiOutlineDislike,
  AiOutlineArrowLeft,
} from "react-icons/ai";

import {
  getArticles,
  likeArticle,
  dislikeArticle,
} from "../services/articleService";

import "../styles/articleDetails.css";

function ArticleDetails() {
  const { id } = useParams();

  const [article, setArticle] = useState(null);

  useEffect(() => {
    loadArticle();
  }, []);

  const loadArticle = async () => {
    const res = await getArticles();
    const found = res.data.find((a) => a.id == id);
    setArticle(found);
  };

  // 👍 LIKE (backend)
  const handleLike = async () => {
    await likeArticle(article);
    loadArticle(); // refresh => update UI
  };

  // 👎 DISLIKE (backend)
  const handleDislike = async () => {
    await dislikeArticle(article);
    loadArticle(); // refresh => update UI
  };

  if (!article) return <h2 className="loading">Chargement...</h2>;

  return (
    <div className="detail-container">

      {/* 🔙 BACK BUTTON */}
      <Link to="/articles" className="back-btn">
        <AiOutlineArrowLeft /> Retour
      </Link>

      {/* HEADER */}
      <div className="detail-card">
        <h1>{article.title}</h1>

        <div className="stats">
          <span>👍 {article.likes || 0}</span>
          <span>👎 {article.dislikes || 0}</span>
        </div>

        {/* ACTIONS */}
        <div className="actions">
          <button className="like-btn" onClick={handleLike}>
            <AiFillLike /> Like
          </button>

          <button className="dislike-btn" onClick={handleDislike}>
            <AiFillDislike /> Dislike
          </button>
        </div>
      </div>

      {/* CONTENT */}
      <div className="content-card">
        <h2>📌 Article complet</h2>
        <p>{article.content}</p>

        <h2>💡 Explication détaillée</h2>
        <p>
          Cet article est développé pour t’aider à comprendre les concepts
          essentiels du développement web moderne avec React et API REST.
        </p>
      </div>
    </div>
  );
}

export default ArticleDetails;