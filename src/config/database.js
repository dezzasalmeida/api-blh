require('dotenv').config();
const { Sequelize } = require('sequelize');
const pg = require('pg'); 

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    port: process.env.DB_PORT || 5432,
    dialectOptions: {
      ssl: {
        require: true, 
        rejectUnauthorized: false
      }
    },
    logging: false
  }
);

module.exports = sequelize;