const { sequelize, Employee } = require('./models');

( async () => {

  try{

    await sequelize.authenticate();

    console.log('Database Connected!');

  } catch (err) {

    console.log(err);

  }

})()

module.exports = { Employee };