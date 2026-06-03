const Article = require("../models/articleModel");

// GET
function getArticles(req, res) {
    Article.getAll((err, data) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(data);
    });
}

// POST
function createArticle(req, res) {
    const { title, content } = req.body;

    Article.create(title, content, (err, data) => {
        if (err) return res.status(500).json({ error: err.message });

        res.status(201).json({
            message: "Article créé",
            id: data.id
        });
    });
}

// PUT
function updateArticle(req, res) {
    const { id } = req.params;
    const { title, content } = req.body;

    Article.update(id, title, content, (err) => {
        if (err) return res.status(500).json({ error: err.message });

        res.json({ message: "Article modifié" });
    });
}

// DELETE
function deleteArticle(req, res) {
    const { id } = req.params;

    Article.remove(id, (err) => {
        if (err) return res.status(500).json({ error: err.message });

        res.json({ message: "Article supprimé" });
    });
}

module.exports = {
    getArticles,
    createArticle,
    updateArticle,
    deleteArticle
};
