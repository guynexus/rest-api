const { sequelize, Employee } = require('./models');

module.exports = { connection: sequelize, employee: Employee };