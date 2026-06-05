require("dotenv").config();
const app = require("./app");
const seedDb = require("./config/seedDb");
const userRoutes = require("./routes/userRoutes");

const PORT = process.env.PORT || 5000;

// routes
app.use("/api/users", userRoutes);

// seed database
seedDb();

app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server running on port ${PORT}`);
});