const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Post = sequelize.define('Post', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  content: {
    type: DataTypes.TEXT,
  },
//   userId: {
//   type: DataTypes.INTEGER,
//   references: {
//     model: 'Users',
//     key: 'id'
//   }
// }
});



module.exports = Post;
