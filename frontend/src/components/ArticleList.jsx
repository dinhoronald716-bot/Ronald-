import ArticleCard from "./ArticleCard";

function ArticleList({
    articles,
    onDelete,
    onEdit
}) {
    return (
        <>
            {articles.map(article => (
                <ArticleCard
                    key={article.id}
                    article={article}
                    onDelete={onDelete}
                    onEdit={onEdit}
                />
            ))}
        </>
    );
}

export default ArticleList;
