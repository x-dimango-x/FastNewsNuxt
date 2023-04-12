const { Sequelize } = require("sequelize")
require('dotenv').config()

const sequelize = new Sequelize({
  dialect: "sqlite",
  host: "localhost",
  pool: {
    max: 10,
    min: 0,
    idle: 10000
  },
  storage: `${__dirname}/db.sqlite`,
  logging: false
})

module.exports = sequelize