const CategoryService = require('./category.service')
const config = require('../../../config')

class CategoryController {
  // categoryData: {title, }

  async getCategories(req, res, next) {
    try {
      const category = await CategoryService.getCategories()
      return await res.json(category)
    } catch (err) {
      next(err)
    }
  }

  async addCategory(req, res, next) {
    try {
      const categoryData = req.body
      const category = await CategoryService.addCategory(categoryData)
      return await res.json(category)
    } catch (err) {
      next(err)
    }
  }
}

module.exports = new CategoryController()