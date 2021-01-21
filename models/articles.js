'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class articles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.articles.belongsTo(models.authors, {foreignKey: 'authorID'});
      
    }
  };
  articles.init({
    title: DataTypes.STRING,
    body: DataTypes.STRING,
    isPublished: DataTypes.BOOLEAN,
    authorID: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'articles',
  });
  return articles;
};