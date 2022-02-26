import Sequelize from "sequelize";

import { databaseConnection } from "../index.js";

export const DogModel = databaseConnection.define("Dog", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  breed: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  isGoodBoy: {
    type: Sequelize.BOOLEAN,
    default: true,
  },
});
