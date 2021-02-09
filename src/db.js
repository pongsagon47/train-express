require('dotenv').config()

const Sequelize = require('sequelize')
const Op = Sequelize.Op
const QueryTypes = Sequelize.QueryTypes

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 500,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  timezone: '+07:00',
  logging: false
})

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.')
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err)
  })

module.exports = { sequelize, Op, QueryTypes }