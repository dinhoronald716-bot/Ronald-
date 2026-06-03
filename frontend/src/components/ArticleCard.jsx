function ArticleCard({
    article,
    onDelete,
    onEdit
}) {
    return (
        <div className="article-card">

            <span className="badge">
                React
            </span>

            <h2>{article.title}</h2>

            <p>{article.content}</p>

            <div className="buttons">
                <button
                    className="edit"
                    onClick={() => onEdit(article)}
                >
                    Edit
                </button>

                <button
                    className="danger"
                    onClick={() => onDelete(article.id)}
                >
                    Delete
                </button>
            </div>
        </div>
    );
}
