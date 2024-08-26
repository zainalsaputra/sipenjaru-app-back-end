/* eslint-disable no-unused-vars */
const { Sequelize } = require('sequelize');
const Programs = require('../models/programs');

const programs = new Programs(Sequelize);

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'programs',
      programs.defineSchema(),
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('programs');
  },
};
