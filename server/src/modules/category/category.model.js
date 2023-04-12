const sequelize = require("../../database/db.config");
const { DataTypes } = require("sequelize");

const Category = sequelize.define('Category', {
  id: {
    type: DataTypes.UUID,
    unique: true,
    primaryKey: true,
    autoIncrement: true,
    defaultValue: DataTypes.UUIDV4
  },
  title: {
    type: DataTypes.STRING(64),
    allowNull: false
  },
  createdAt: {
    type: DataTypes.DATE,
    field: 'created_at',
  },
  updatedAt: {
    type: DataTypes.DATE,
    field: 'updated_at',
  },
})

module.exports.Category = Category
