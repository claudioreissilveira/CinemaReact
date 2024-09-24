const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('cinemarque_db', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;
