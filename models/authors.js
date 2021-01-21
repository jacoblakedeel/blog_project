'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class authors extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.authors.hasMany(models.articles, {foreignKey: 'authorID'});
      
    }
  };
  authors.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    imgURL: DataTypes.STRING,
    bio: DataTypes.STRING,
    twitter: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'authors',
  });
  return authors;
};