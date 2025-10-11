const { Sequelize, DataTypes, Model } = require("sequelize");
const { sequelize } = require ("./User");
const { User } = require ("./User");

// Post Model definieren
const Post = sequelize.define("Post",{
    title: {
        type:DataTypes.STRING,
        allowNull:false,
    },
    content: {
        type:DataTypes.TEXT,
        allowNull:false,
    },
});

User.hasMany(Post, {foreignKey: "userId" });
Post.belongsTo(User, {foreignKey: "userId" });

module.exports = Post;

