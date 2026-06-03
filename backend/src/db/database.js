const sqlite3 = require("sqlite3").verbose();
const path = require("path");
3
// créer ou ouvrir la base de données
const db = new sqlite3.Database(
    path.join(__dirname, "../../database/blog.db"),
    (err) => {
        if (err) {
            console.error("Erreur SQLite :", err.message);
        } else {
            console.log("✅ Connecté à SQLite");
        }
    }
);
module.exports = db;
