/* eslint-disable no-unused-vars */
const { Sequelize } = require('sequelize');
const Lecturers = require('../models/lecturers');

const lecturers = new Lecturers(Sequelize);

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'lecturers',
      lecturers.defineSchema(),
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('lecturers');
  },
};
