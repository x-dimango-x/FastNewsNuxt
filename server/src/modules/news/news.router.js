const NewsController = require('./news.controller')
const Router = require('express').Router
const multer = require('multer')
const path = require('path')

const router = new Router()

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads');
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const name = path.basename(file.originalname, ext);
    cb(null, `${name}-${Date.now()}${ext}`);
  },
});

const upload = multer({ storage });

router.get('/all',
  NewsController.getNews
)

router.post('/add',
  upload.single('image'),
  NewsController.addNews
)

router.get('/image/:imagePath',
  NewsController.getNewsImage
)

router.get('/get/:id',
  NewsController.getNewsById
)

router.get('/getNews/byCategory/:id',
  NewsController.getNewsByCategory
)

module.exports = router
