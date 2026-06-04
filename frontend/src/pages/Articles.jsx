import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineLike,
  AiFillLike,
  AiOutlineDislike,
  AiFillDislike,
} from "react-icons/ai";
import { getArticles } from "../services/articleService";
import "../styles/article.css";

function Articles() {
  const [articles, setArticles] = useState([]);
  const [search, setSearch] = useState("");
  const [likedArticles, setLikedArticles] = useState([]);
  const [dislikedArticles, setDislikedArticles] = useState([]);

  useEffect(() => {
    fetchArticles();

    const savedLikes =
      JSON.parse(localStorage.getItem("likedArticles")) || [];
    const savedDislikes =
      JSON.parse(localStorage.getItem("dislikedArticles")) || [];

    setLikedArticles(savedLikes);
    setDislikedArticles(savedDislikes);
  }, []);

  const fetchArticles = async () => {
    try {
      const response = await getArticles();
      setArticles(response.data);
    } catch (error) {
      console.error("Erreur :", error);
    }
  };

  // LIKE
  const handleLike = (id) => {
    let updatedLikes = [...likedArticles];
    let updatedDislikes = [...dislikedArticles];

    if (likedArticles.includes(id)) {
      updatedLikes = updatedLikes.filter((item) => item !== id);

      setArticles((prev) =>
        prev.map((article) =>
          article.id === id
            ? {
                ...article,
                likes: Math.max((article.likes || 0) - 1, 0),
              }
            : article
        )
      );
    } else {
      updatedLikes.push(id);

      // enlever dislike si existe
      updatedDislikes = updatedDislikes.filter((item) => item !== id);

      setArticles((prev) =>
        prev.map((article) =>
          article.id === id
            ? {
                ...article,
                likes: (article.likes || 0) + 1,
                dislikes:
                  article.dislikes > 0 ? article.dislikes - 1 : 0,
              }
            : article
        )
      );
    }

    setLikedArticles(updatedLikes);
    setDislikedArticles(updatedDislikes);

    localStorage.setItem("likedArticles", JSON.stringify(updatedLikes));
    localStorage.setItem(
      "dislikedArticles",
      JSON.stringify(updatedDislikes)
    );
  };

  // DISLIKE
  const handleDislike = (id) => {
    let updatedDislikes = [...dislikedArticles];
    let updatedLikes = [...likedArticles];

    if (dislikedArticles.includes(id)) {
      updatedDislikes = updatedDislikes.filter((item) => item !== id);

      setArticles((prev) =>
        prev.map((article) =>
          article.id === id
            ? {
                ...article,
                dislikes: Math.max((article.dislikes || 0) - 1, 0),
              }
            : article
        )
      );
    } else {
      updatedDislikes.push(id);

      updatedLikes = updatedLikes.filter((item) => item !== id);

      setArticles((prev) =>
        prev.map((article) =>
          article.id === id
            ? {
                ...article,
                dislikes: (article.dislikes || 0) + 1,
                likes: article.likes > 0 ? article.likes - 1 : 0,
              }
            : article
        )
      );
    }

    setDislikedArticles(updatedDislikes);
    setLikedArticles(updatedLikes);

    localStorage.setItem(
      "dislikedArticles",
      JSON.stringify(updatedDislikes)
    );
    localStorage.setItem("likedArticles", JSON.stringify(updatedLikes));
  };

  const filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="articles-page">
      {/* HEADER */}
      <header className="header">
        <div>
          <h1>🚀 Tech Articles</h1>
          <p>Modern blog platform with React</p>
        </div>

        <Link to="/create">
          <button className="btn-add">+ Add Article</button>
        </Link>
      </header>

      {/* SEARCH */}
      <input
        type="text"
        className="search"
        placeholder="Search articles..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* GRID */}
      <div className="grid">
        {filteredArticles.length > 0 ? (
          filteredArticles.map((article) => (
            <div className="card" key={article.id}>
              <h2>{article.title}</h2>

              <p>
                {article.content?.length > 120
                  ? article.content.slice(0, 120) + "..."
                  : article.content}
              </p>

              <div className="actions">
                <Link to={`/articles/${article.id}`}>
                  <button className="btn-read">Read More</button>
                </Link>

                {/* REACTIONS */}
                <div className="reactions">
                  {/* LIKE */}
                  <button
                    className={`like-btn ${
                      likedArticles.includes(article.id) ? "liked" : ""
                    }`}
                    onClick={() => handleLike(article.id)}
                  >
                    {likedArticles.includes(article.id) ? (
                      <AiFillLike />
                    ) : (
                      <AiOutlineLike />
                    )}
                    <span>{article.likes || 0}</span>
                  </button>

                  {/* DISLIKE */}
                  <button
                    className={`dislike-btn ${
                      dislikedArticles.includes(article.id)
                        ? "disliked"
                        : ""
                    }`}
                    onClick={() => handleDislike(article.id)}
                  >
                    {dislikedArticles.includes(article.id) ? (
                      <AiFillDislike />
                    ) : (
                      <AiOutlineDislike />
                    )}
                    <span>{article.dislikes || 0}</span>
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h2 className="empty">Aucun article trouvé</h2>
        )}
      </div>
    </div>
  );
}

export default Articles;