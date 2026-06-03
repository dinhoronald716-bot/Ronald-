const app = require("./app");
require("./db/database");
require("./config/seedDb");
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`🚀 Serveur lancé sur http://localhost:${PORT}`);
});
