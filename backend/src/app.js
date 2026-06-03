const express = require("express");
const cors = require("cors");

const articleRoutes = require("./routes/articleRoutes");
const seedDb = require("./config/seedDb");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/articles", articleRoutes);

// init DB
seedDb();

module.exports = app;
