const { Model, DataTypes } = require('sequelize');

const sequelize = require('../db');

class album extends Model {}

album.init({
    name: DataTypes.STRING,
    band: DataTypes.STRING,
    publishDate: DataTypes.STRING,
}, {
    sequelize,
    modelName:"album"
})

module.exports = album;