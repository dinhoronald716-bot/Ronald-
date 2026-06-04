const db = require("../db/database");

function seedDb() {
    // CREATE TABLE
    db.run(`
        CREATE TABLE IF NOT EXISTS articles (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            content TEXT NOT NULL,
            category TEXT DEFAULT 'general',
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    `);

    // 🔥 RESET DATA (évite doublons)
    db.run(`DELETE FROM articles`);

    // 🔥 10 ARTICLES PRO
    const articles = [
        ["🚀 React Guide 2026", "Learn React step by step with hooks and projects"],
        ["⚡ Node.js Basics", "Backend development with Node.js and Express"],
        ["🧠 JavaScript ES6+", "Modern JavaScript features explained simply"],
        ["🌐 REST API Guide", "Build APIs using Express and best practices"],
        ["💻 Full Stack Roadmap", "Frontend + Backend + Database complete guide"],
        ["🔐 Git & GitHub", "Version control system essentials"],
        ["📱 Responsive Design", "Mobile friendly UI design techniques"],
        ["🗄️ SQL Database Basics", "Learn relational databases easily"],
        ["🔥 Clean Code Tips", "Write professional and readable code"],
        ["🐞 Debugging Guide", "How to fix bugs like a pro developer"]
    ];

    const stmt = db.prepare(
        "INSERT INTO articles (title, content) VALUES (?, ?)"
    );

    articles.forEach(a => {
        stmt.run(a[0], a[1]);
    });

    stmt.finalize();

    console.log("🌱 10 articles inserted successfully");
}

module.exports = seedDb;
