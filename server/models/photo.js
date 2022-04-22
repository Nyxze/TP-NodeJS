'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Photo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.folder);
      this.belongsTo(models.user)

      // define association here
    }
  }
  Photo.init({
    photoName: DataTypes.STRING,
    uploadedPhotoName: DataTypes.STRING,
    legend: DataTypes.STRING
  }, {
    underscored: true,
    sequelize,
    modelName: 'photo',
  });
  return Photo;
};