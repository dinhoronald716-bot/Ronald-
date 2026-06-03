 1 const sqlite3 = require("sqlite3").verbose();
 2 const path = require("path");
 3
 4 // créer ou ouvrir la base de données
 5 const db = new sqlite3.Database(
 6   path.join(__dirname, "../../database/blog.db"),
 7   (err) => {
 8     if (err) {
 9       console.error("Erreur SQLite :", err.message);
10     } else {
11       console.log("✅ Connecté à SQLite");
12     }
13   }
14 );
15
16 module.exports = db;
