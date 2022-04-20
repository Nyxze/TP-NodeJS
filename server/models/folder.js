'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Folder extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.folder, {
        foreignKey:"parentId",
        as: "children"
      }),
      this.hasMany(models.photo),
      this.belongsTo(models.folder,{
        foreignKey:"parentId",
        as:"parent"}
        )
      this.belongsTo(models.user, {
        foreignKey: {
          name:"userId",
          allowNull: false
        }
      })
      // define association here
    }
  }
  Folder.init({
    folderName: {
      type:DataTypes.STRING,
      allowNull: false
    },
    description: DataTypes.STRING
  }, {
    underscored: true,
    sequelize,
    modelName: 'folder',
  });
  return Folder;
};