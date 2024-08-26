require('dotenv').config();
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'production';

const config = {
  username: process.env.POSTGRES_URL_USER,
  password: process.env.POSTGRES_URL_PASSWORD,
  database: process.env.POSTGRES_URL_DATABASE,
  host: process.env.POSTGRES_URL_HOST,
  dialect: 'postgres',
  logging: false,
};

const db = {};

let sequelize;
if (process.env.POSTGRES_URL_URL) {
  sequelize = new Sequelize(process.env.POSTGRES_URL_URL, {
    dialect: 'postgres',
    logging: false,
  });
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter((file) => (
    file.indexOf('.') !== 0
    && file !== basename
    && file.slice(-3) === '.js'
    && file.indexOf('.test.js') === -1
  ))
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
