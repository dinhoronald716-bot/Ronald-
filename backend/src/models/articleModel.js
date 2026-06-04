const db = require("../db/database");

// GET ALL
async function getAll() {
    const result = await db.query(
        "SELECT * FROM articles ORDER BY id DESC"
    );
    return result.rows;
}

// CREATE
async function create(title, content) {
    const result = await db.query(
        "INSERT INTO articles (title, content) VALUES ($1, $2) RETURNING *",
        [title, content]
    );
    return result.rows[0];
}

// UPDATE
async function update(id, title, content) {
    await db.query(
        "UPDATE articles SET title=$1, content=$2 WHERE id=$3",
        [title, content, id]
    );
}

// DELETE
async function remove(id) {
    await db.query(
        "DELETE FROM articles WHERE id=$1",
        [id]
    );
}

module.exports = {
    getAll,
    create,
    update,
    remove
};