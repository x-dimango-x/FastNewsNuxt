const CategoryController = require('./category.controller')
const Router = require('express').Router

const router = new Router()


router.get('/all',
  CategoryController.getCategories
)

router.post('/add',
  CategoryController.addCategory
)


module.exports = router
