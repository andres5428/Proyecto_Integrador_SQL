const { Model, DataTypes } = require('sequelize');

const sequelize = require('../db');

class song extends Model {}

song.init({
    name: DataTypes.STRING,
    duration: DataTypes.STRING,
    album: DataTypes.STRING,
    band: DataTypes.STRING
}, {
    sequelize,
    modelName:"song"
})

module.exports = song;