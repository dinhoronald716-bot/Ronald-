const Article = require("../models/articleModel");
const pool = require("../db/database");

// LIKE ARTICLE
async function likeArticle(req, res) {
    try {
        const { id } = req.params;

        const result = await pool.query(
            "UPDATE articles SET likes = likes + 1 WHERE id = $1 RETURNING *",
            [id]
        );

        res.json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}



// GET
async function getArticles(req, res) {
    try {
        const data = await Article.getAll();
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

// POST
async function createArticle(req, res) {
    try {
        const { title, content } = req.body;

        const data = await Article.create(title, content);

        res.status(201).json({
            message: "Article created",
            article: data
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

// PUT
async function updateArticle(req, res) {
    try {
        const { id } = req.params;
        const { title, content } = req.body;

        await Article.update(id, title, content);

        res.json({ message: "Article updated" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

// DELETE
async function deleteArticle(req, res) {
    try {
        const { id } = req.params;

        await Article.remove(id);

        res.json({ message: "Article deleted" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

module.exports = {
    getArticles,
    createArticle,
    updateArticle,
    deleteArticle,
    likeArticle 
};