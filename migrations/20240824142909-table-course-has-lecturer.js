/* eslint-disable no-unused-vars */
const { Sequelize } = require('sequelize');
const CourseHasLecturer = require('../models/courseHasLecturer');

const courseHasLecturer = new CourseHasLecturer(Sequelize);

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'course-has-lecturer',
      courseHasLecturer.defineSchema(),
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('course-has-lecturer');
  },
};
