'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.role,
        {
          foreignKey: {
            allowNull: false
          }
      }),
      this.hasMany(models.folder)

    }
  }
  User.init({
    firstName: {
      type:DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type:DataTypes.STRING,
      allowNull: false
    }
  }, {
    underscored: true,
    sequelize,
    modelName: 'user',
  });
  return User;
};