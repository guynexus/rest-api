module.exports = {
  development: {
    username: "sbaeqfozmeuhzq",
    password: "bff718c9f64ad3683e785721869a874ef570581a0c77b893dd22e97a3cd5f002",
    database: "d45l2mg789ecrk",
    host: "ec2-52-6-178-202.compute-1.amazonaws.com",
    dialect: "postgres",
    dialectOptions: {
        ssl: {
           require: true,
            rejectUnauthorized: false
        }
    }
  }
  
}
