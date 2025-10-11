const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("./User");
const Post = require("./Post");
const { User } = require("./User");

// Comment Model definieren

const Comment = sequelize.define("Comment", {
    content: {
        type:DataTypes.TEXT,
        allowNull:false,
    },
});

User.hasMany(Comment, { foreignKey: "userId"});
Comment.belongsTo(User, {foreignKey: "userId" });

Post.hasMany(Comment, { foreignKey: "postId" });
Comment.belongsTo(Post, { foreignKey: "postid" });

module.exports = Comment;