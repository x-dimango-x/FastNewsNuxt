const { News } = require("./news.model")

class NewsService {
  async addNews(newsData, imagePath) {
    if (imagePath) {
      imagePath = imagePath.filename
    }
    return await News.create({
      title: newsData.title,
      body: newsData.body,
      image: imagePath,
      category_id: newsData.category
    })
  }

  async getNewsByCategory(categoryId) {
    return await News.findAll({ where: { isPublish: true, category_id: categoryId } })
  }

  async getNewsById(newsId) {
    return await News.findByPk(newsId)
  }

  async deleteNews(newsId) {
    return await News.destroy({ where: { id: newsId } })
  }

  async updateNews(newsData) {
    // newsData: {id, title, body, image}
    const news = News.findOne(newsData.id)
    return await news.update(newsData)
  }



  async getNews() {
    // Пропускаем 5 первых объектов и возвращаем 10
    // Project.findAll({ offset: 5, limit: 10 })
    return await News.findAll({ where: { isPublish: true } })
  }
}

module.exports = new NewsService()