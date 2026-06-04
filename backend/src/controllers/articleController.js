const Article = require("../models/articleModel");

// GET ALL
function getArticles(req, res) {
    Article.getAll((err, data) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(data);
    });
}

// CREATE
function createArticle(req, res) {
    const { title, content } = req.body;

    if (!title || !content) {
        return res.status(400).json({ error: "Title & content required" });
    }

    Article.create(title, content, (err, data) => {
        if (err) return res.status(500).json({ error: err.message });

        res.status(201).json({
            message: "Article created",
            id: data.id
        });
    });
}

// UPDATE
function updateArticle(req, res) {
    const { id } = req.params;
    const { title, content } = req.body;

    Article.update(id, title, content, (err) => {
        if (err) return res.status(500).json({ error: err.message });

        res.json({ message: "Article updated" });
    });
}

// DELETE
function deleteArticle(req, res) {
    const { id } = req.params;

    Article.remove(id, (err) => {
        if (err) return res.status(500).json({ error: err.message });

        res.json({ message: "Article deleted" });
    });
}

module.exports = {
    getArticles,
    createArticle,
    updateArticle,
    deleteArticle
};
