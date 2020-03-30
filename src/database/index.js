const Sequelize = require('sequelize');
const dbCongif = require('../config/database');

const connection = new Sequelize(dbConfig);

module.exports = connection;