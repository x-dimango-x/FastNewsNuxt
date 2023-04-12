const NewsService = require('./news.service')
const config = require('../../../config')

class NewsController {
  // newsData: {title, body, image, Categories: ['Cat']}

  async getNews(req, res, next) {
    try {
      const news = await NewsService.getNews()
      return await res.json(news)
    } catch (err) {
      next(err)
    }
  }

  async getNewsImage(req, res, next) {
    try {
      const imagePath = req.params.imagePath;
      return await res.sendFile(`${config.rootDir}/uploads/${imagePath}`)
    } catch (err) {
      next(err)
    }
  }

  async addNews(req, res, next) {
    try {
      const imageFile = req.file || null;
      const newsData = req.body
      const news = await NewsService.addNews(newsData, imageFile)
      return await res.json(news)
    } catch (err) {
      next(err)
    }
  }

  async updateNews(req, res, next) {
    try {
      const newsData = req.body
      const news = await NewsService.updateNews(newsData)
      return await res.json(news)
    } catch (err) {
      next(err)
    }
  }

  async getNewsById(req, res, next) {
    try {
      const id = req.params.id
      const news = await NewsService.getNewsById(id)
      return await res.json(news)
    } catch (err) {
      next(err)
    }
  }

  async getNewsByCategory(req, res, next) {
    try {
      const id = req.params.id
      const news = await NewsService.getNewsByCategory(id)
      console.log(news);
      return await res.json(news)
    } catch (err) {
      next(err)
    }
  }
}

module.exports = new NewsController()