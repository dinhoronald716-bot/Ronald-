const express = require("express");
const cors = require("cors");

const articleRoutes = require("./routes/articleRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// routes
app.use("/api/articles", articleRoutes);
app.use("/api/users", userRoutes);

module.exports = app;