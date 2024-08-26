const { Sequelize } = require('sequelize');
const Courses = require('../models/courses');

const courses = new Courses(Sequelize);
courses.defineSchema();
