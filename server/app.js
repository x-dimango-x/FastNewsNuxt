const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const sequelize = require('./src/database/db.config')
const NewsRouter = require('./src/modules/news/news.router')
const CategoryRouter = require('./src/modules/category/category.router')

try {
  sequelize.authenticate();
  // sequelize.sync({ alter: true })
  console.log('Connection has been established successfully.');
} catch (error) {
  throw new Error('Unable to connect to the database:', error);
}

const app = express()
app.use(cors())
app.use(bodyParser())

app.use('/api/news/', NewsRouter)
app.use('/api/categories/', CategoryRouter)


app.listen(5000, () => {
  console.log('server is starting...')
})
