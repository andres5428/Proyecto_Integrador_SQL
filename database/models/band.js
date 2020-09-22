const { Model, DataTypes } = require('sequelize');

const sequelize = require('../db');

class band extends Model {}

band.init({
    name: DataTypes.STRING,
    members: DataTypes.STRING,
    startDate: DataTypes.STRING,
    country: DataTypes.STRING
}, {
    sequelize,
    modelName:"band"
})

module.exports = band;