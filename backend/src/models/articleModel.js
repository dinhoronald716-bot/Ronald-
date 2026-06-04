const db = require("../db/database");

// GET ALL
function getAll(callback) {
    db.all("SELECT * FROM articles", callback);
}

// CREATE
function create(title, content, callback) {
    if (!title || !content) {
        return callback(new Error("Title and content required"));
    }

    db.run(
        "INSERT INTO articles (title, content) VALUES (?, ?)",
        [title, content],
        function (err) {
            callback(err, { id: this?.lastID });
        }
    );
}

// UPDATE
function update(id, title, content, callback) {
    db.run(
        "UPDATE articles SET title=?, content=? WHERE id=?",
        [title, content, id],
        callback
    );
}

// DELETE
function remove(id, callback) {
    db.run("DELETE FROM articles WHERE id=?", [id], callback);
}

module.exports = {
    getAll,
    create,
    update,
    remove
};
