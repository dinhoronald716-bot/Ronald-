const db = require("../db/database");

async function seedDb() {
    await db.query(`
        CREATE TABLE IF NOT EXISTS articles (
            id SERIAL PRIMARY KEY,
            title TEXT NOT NULL,
            content TEXT NOT NULL,
            category TEXT DEFAULT 'general',
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
    `);

    await db.query(`
        CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            email VARCHAR(150) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
    `);

    const result = await db.query("SELECT COUNT(*) FROM articles");

    if (parseInt(result.rows[0].count) > 0) {
        console.log("⚠️ DB already seeded");
        return;
    }

    const articles = [
        ["🚀 React Guide 2026", "Learn React step by step"],
        ["⚡ Node.js Basics", "Backend with Express"],
        ["🧠 JavaScript ES6+", "Modern JS explained"],
        ["🌐 REST API Guide", "Build APIs easily"],
        ["💻 Full Stack Roadmap", "Frontend + Backend"],
        ["🔐 Git & GitHub", "Version control"],
        ["📱 Responsive Design", "Mobile UI"],
        ["🗄️ SQL Basics", "Database fundamentals"],
        ["🔥 Clean Code", "Better coding style"],
        ["🐞 Debugging", "Fix bugs fast"]
    ];

    for (let a of articles) {
        await db.query(
            "INSERT INTO articles (title, content) VALUES ($1, $2)",
            a
        );
    }

    console.log("🌱 Seed completed");
}

module.exports = seedDb;