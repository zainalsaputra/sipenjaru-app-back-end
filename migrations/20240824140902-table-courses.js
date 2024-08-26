/* eslint-disable no-unused-vars */
const { Sequelize } = require('sequelize');
const Courses = require('../models/courses');

const courses = new Courses(Sequelize);

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'courses',
      courses.defineSchema(),
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('courses');
  },
};
