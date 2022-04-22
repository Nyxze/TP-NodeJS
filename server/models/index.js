'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});


let syncDB = async () => {
  await sequelize.sync({ force: true })
  await sequelize.models.role.bulkCreate(ROLE_SAMPLE)
  await sequelize.models.user.bulkCreate(USER_SAMPLE)
  await sequelize.models.folder.bulkCreate(FOLDER_SAMPLE)

}

syncDB();
const ROLE_SAMPLE = [
  { name: "Admin" },
  { name: "Photographe" },
  { name: "Client" },
]

const USER_SAMPLE = [
  { firstName: "Rene", lastName: "Lataupe", roleId: 1 },
  { firstName: "Jean", lastName: "Swag", roleId: 2 },
  { firstName: "Ishtar", lastName: "Yolo", roleId: 3 },
]

const FOLDER_SAMPLE = [

  {
    folderName: "Public",
    userId: 2
  },
  {
    folderName: "Private",
    userId: 1
  },
  {
    folderName: "Downloads",
    parentId: 2,
    userId: 2
  }
]


db.sequelize = sequelize;

db.Sequelize = Sequelize;

module.exports = db;
