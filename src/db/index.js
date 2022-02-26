import Sequelize from "sequelize";

export const databaseConnection = new Sequelize({
  dialect: "sqlite",
  storage: "src/db/dev.db",
  logging: false,
});
