const { Category } = require("./category.model")

// Пропускаем 5 первых объектов и возвращаем 10
// Project.findAll({ offset: 5, limit: 10 })

class CategoryService {
  async getCategories() {
    return await Category.findAll()
  }

  async getCategoryById(CategoryId) {
    return await Category.findOne(CategoryId)
  }

  async deleteCategory(CategoryId) {
    return await Category.destroy({ where: { id: CategoryId } })
  }

  async updateCategory(CategoryData) {
    // CategoryData: {id, title}
    const Category = Category.findOne(CategoryData.id)
    return await Category.update(CategoryData)
  }

  async addCategory(CategoryData) {
    return await Category.create({
      title: CategoryData.title,
    })
  }
}

module.exports = new CategoryService()