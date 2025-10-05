// User Modell für Datenbank

const { Sequelize, DataTypes } = require("sequelize");
require("dotenv").config();

//Verbindung zur Datenbank
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: process.env.DB_HOST,
        dialect: "mysql",
    }
);

// User Model definieren
const User = sequelize.define("User",{
    username: {
        type:DataTypes.STRING,
        allowNull:false,
        unique:true,
    },
    email: {
        type:DataTypes.STRING,
        allowNull:false,
        unique:true,
    },
    password: {
        type:DataTypes.STRING,
        allowNull:false,
    },
    role: {
        type:DataTypes.STRING,
        defaultValue: "user",
    },
});

module.exports = { User, sequelize };