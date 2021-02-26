// Router

const { Employee } = require('../sequelize');

module.exports = require('express').Router()

  .use('/employees/', require('./route')(Employee));

