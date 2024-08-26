// config/database.js
const { Sequelize } = require('sequelize');
const config = require('../../config/config.js');
const pg = require('pg');

const environment = process.env.NODE_ENV || 'production';
const envConfig = config[environment];

const sequelize = new Sequelize(
  envConfig.database,
  envConfig.username,
  envConfig.password,
  {
    host: envConfig.host,
    dialect: envConfig.dialect || 'postgres',
    logging: envConfig.logging || false,
    dialectModule: pg,
    dialectOptions: {
      ssl: {
        require: true,  // Wajib menggunakan SSL
        rejectUnauthorized: false,  // Ini untuk melewati sertifikat SSL yang tidak terverifikasi
      }
    }
  },
);

module.exports = sequelize;
