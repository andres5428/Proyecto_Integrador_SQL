const { Model, DataTypes } = require('sequelize');

const sequelize = require('../db');

class article extends Model {}

article.init({
    itemName: DataTypes.STRING,
    price: DataTypes.STRING,
    state: DataTypes.STRING
}, {
    sequelize,
    modelName:"article"
})

module.exports = article;