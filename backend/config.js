const Sequelize = require('sequelize');
const config = new Sequelize("planner-app", "bobby", "password", {dialect: 'mysql'});

module.exports = config;