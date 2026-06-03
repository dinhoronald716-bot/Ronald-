const app = require("./app");
require("./config/db");
require("./config/initDb");
require("./config/seedDb");
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`🚀 Serveur lancé sur http://localhost:${PORT}`);
});
