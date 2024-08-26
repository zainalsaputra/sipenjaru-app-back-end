const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Path ke konfigurasi database
const Courses = require('../../models/courses');

const courses = new Courses(DataTypes);

class Course extends Model {}

Course.init(courses.defineSchema(), {
  sequelize,
  modelName: 'Course',
  tableName: 'courses',
  timestamps: true,
});

module.exports = Course;
