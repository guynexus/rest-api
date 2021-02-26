const { sequelize, Employee } = require('./models')

require('express')()
  .use(require('express').json())
  .use(require('cors')())
  .use('/api/employees/',require('./router')(Employee))
  .listen({ port: 5000 }, async () => {
    console.log('Server running on port 8080')
    await sequelize.authenticate()
    console.log('Database Connected!')
  })
