// controllers/courseController.js
const { validationResult } = require('express-validator');
const CourseService = require('../services/coursesService');

class CourseController {
  static async getAllCourses(req, res) {
    try {
      const response = await CourseService.getAllCourses();
      res.status(200)
        .send({
          status: 'success',
          data: response,
        });
    } catch (error) {
      res.status(500)
        .send({
          status: 'error',
          message: error.message,
        });
    }
  }

  static async getCourseById(req, res) {
    try {
      const { id } = req.params;
      const response = await CourseService.getCourseById(id);

      if (!response) {
        return res.status(404).json({ message: 'Course not found' });
      }
      // res.status(200).json(course);
      res.status(200)
        .send({
          status: 'success',
          data: response,
        });
    } catch (error) {
      // res.status(500).json({ message: error.message });
      res.status(500)
        .send({
          status: 'error',
          message: error.message,
        });
    }
  }

  static async createCourse(req, res) {
    try {
      const errors = validationResult(req);
      // if (!errors.isEmpty()) {
      //   return res.status(400).json({ errors: errors.array() });
      // }
      if (!errors.isEmpty()) {
        const formattedErrors = errors.array().map(error => ({
          field: error.param,
          message: error.msg,
        }));
        return res.status(400).json({
          status: false,
          errors: formattedErrors,
        });
      }
      const response = await CourseService.createCourse(req.body);
      res.status(201)
        .send({
          status: 'success',
          message: 'Course is created successfully!!',
          data: response,
        });
    } catch (error) {
      res.status(500)
        .send({
          status: 'error',
          message: error.message,
        });
      console.log(error);
    }
  }

  static async updateCoursePut(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        const formattedErrors = errors.array().map(error => ({
          field: error.param,
          message: error.msg,
        }));
        return res.status(400).json({
          status: false,
          errors: formattedErrors,
        });
      }
      const { id } = req.params;
      const response = await CourseService.updateCoursePut(id, req.body);
      if (response === '0') {
        res.status(400).send({
          status: false,
          message: `Categories with id ${id} not found!!`,
        });
      }
      res.status(201)
        .send({
          status: 'success',
          message: 'Course is updated successfully!!',
          // data: response,
          // password: bcrypt.compare(req.body.password),
        });
    } catch (error) {
      res.status(500)
        .send({
          status: 'error',
          message: error.message,
        });
      console.log(error);
    }
  }

  static async deleteCourse(req, res) {
    try {
      const { id } = req.params;
      const response = await CourseService.deleteCourse(id);
      if (response === 0) {
        res.status(404)
          .send({
            status: false,
            message: `Course failed to deleted, ${response}`,
          });
      }
      res.status(200)
        .send({
          status: true,
          message: 'Course has been success deleted!',
        });
    } catch (error) {
      res.status(500)
        .send({
          status: 'error',
          message: error.message,
        });
      console.log(error);
    }
  }
}

module.exports = CourseController;
