const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const BLH = sequelize.define('BLH', {
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  institution: {
    type: DataTypes.STRING,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  state: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  zipCode: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phones: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false,
  },
  fax: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  }
});

module.exports = BLH;
