const { Model, DataTypes } = require('sequelize');

const sequelize = require('../db');

class user extends Model {}

user.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName:DataTypes.STRING,
    phone:DataTypes.STRING
}, {
    sequelize,
    modelName:"user"
})

module.exports = user;