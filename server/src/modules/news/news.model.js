const sequelize = require("../../database/db.config");
const { DataTypes } = require("sequelize");
const { Category } = require("../category/category.model");

const News = sequelize.define('News', {
  id: {
    type: DataTypes.UUID,
    unique: true,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  },
  title: {
    type: DataTypes.STRING(64),
    allowNull: false
  },
  body: {
    type: DataTypes.STRING(1024)
  },
  image: {
    type: DataTypes.STRING(256),
  },
  likes: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  dislikes: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  isPublish: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  },
})

Category.hasMany(News, { foreignKey: 'category_id' })
News.belongsTo(Category, { foreignKey: 'category_id' })

module.exports.News = News
