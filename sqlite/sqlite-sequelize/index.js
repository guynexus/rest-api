const { connection, employee } = require('./sequelize');

const CORS = {};
const PORT = 5000;

require('express')()
  .use(require('express').json())
  .use(require('cors')(CORS))
  .use('/api/employees/',require('./router/sequelize')(employee))
  .listen({ port: 5000 }, async () => {
    console.log(`Server running on ${PORT}...`)
    await connection.authenticate()
    console.log('Database Connected!')
  })
