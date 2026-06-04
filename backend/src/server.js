const app = require("./app");
const seedDb = require("./config/seedDb");
require("dotenv").config();

const PORT = process.env.PORT || 5000;

seedDb();

app.listen(PORT, "0.0.0.0", () => {
    console.log(`🚀 Server running on port ${PORT}`);
});