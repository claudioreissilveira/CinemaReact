const sequelize = require("./config/config");
const User = require("./models/User");

sequelize
  .sync({ force: true })
  .then(() => {
    console.log("BD sincronizado.");
  })
  .catch((error) => {
    console.error("Erro ao sincronizar BD:", error);
  });
