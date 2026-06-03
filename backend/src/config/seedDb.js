const db = require("../db/database");

function seedDb() {
    db.run(`
        CREATE TABLE IF NOT EXISTS articles (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT,
            content TEXT
        )
    `);

    console.log("🌱 DB ready");
}

module.exports = seedDb;
