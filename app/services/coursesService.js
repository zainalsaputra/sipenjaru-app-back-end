// services/courseService.js
const { Sequelize, Op } = require('sequelize');
const Course = require('../models/courses');

class CourseService {
  static async getAllCourses(filters = {}) {
    try {
      const options = {
        where: filters,
        order: [['createdAt', 'DESC']],
      };
      return await Course.findAll(options);
    } catch (error) {
      console.error('Error fetching courses:', error);
      throw new Error('Failed to retrieve courses');
    }
  }

  // static async getAllCourses({
  //   name, session, limit = 10, offset = 0, order = 'DESC',
  // }) {
  //   try {
  //     const options = {
  //       where: {},
  //       limit: parseInt(limit),
  //       offset: parseInt(offset),
  //       order: [['createdAt', order.toUpperCase()]],
  //     };

  //     if (name) {
  //       options.where.name = { [Op.iLike]: `%${name}%` };
  //     }
  //     if (session) {
  //       options.where.session = { [Op.iLike]: `%${session}%` };
  //     }
  //     const courses = await Course.findAll(options);
  //     return courses;
  //   } catch (error) {
  //     console.error('Error fetching courses:', error);
  //     throw new Error('Failed to retrieve courses');
  //   }
  // }

  static async getCourseById(id) {
    try {
      const course = await Course.findByPk(id);
      if (!course) {
        throw new Error('Course not found');
      }
      return course;
    } catch (error) {
      console.error('Failed to retrieve course:', error);
      throw new Error('Failed to retrieve course');
    }
  }

  static async createCourse(data) {
    try {
      if (!data.name) {
        throw new Error('Course name is required');
      }
      const course = await Course.create({
        name: data.name,
        beforeTime: data.beforeTime,
        afterTime: data.afterTime,
        session: data.session,
      });
      return course;
    } catch (error) {
      console.error('Error creating course:', error);
      throw new Error('Failed to create course');
    }
  }

  static async updateCoursePut(id, data) {
    try {
      if (!data.name) {
        throw new Error('Course name is requires');
      }
      const course = await Course.findByPk(id);
      if (!course) {
        throw new Error('Course not found');
      }
      const putCourse = await Course.update(
        {
          name: data.name,
          beforeTime: data.beforeTime,
          afterTime: data.afterTime,
          session: data.session,
          updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
        {
          where: {
            id,
          },
        },
      );
      if (!putCourse[0]) {
        throw new Error('Course not found or nothing to update');
      }
      return putCourse;
    } catch (error) {
      console.log(error);
      console.error('Failed updating course:', Error);
      throw new Error('Failed to update course');
    }
  }

  static async updateCoursePatch(id, data) {
    try {
      if (!data.name) {
        throw new Error('Course name is requires');
      }
      const course = await Course.findByPk(id);
      if (!course) {
        throw new Error('Course not found');
      }
      const patchCourse = await Course.update(
        {
          name: data.name !== undefined ? data.name : Sequelize.literal('name'),
          beforeTime: data.beforeTime !== undefined ? data.beforeTime : Sequelize.literal('beforeTime'),
          afterTime: data.afterTime !== undefined ? data.afterTime : Sequelize.literal('afterTime'),
          session: data.session !== undefined ? data.session : Sequelize.literal('session'),
          updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
        {
          where: {
            id,
          },
          returning: true,
        },
      );
      if (!patchCourse[0]) {
        throw new Error('Course not found or nothing to update');
      }
      // if (patchCourse[0] === 0) {
      //   throw new Error('Course not found or nothing to update');
      // }
      return patchCourse;
    } catch (error) {
      console.error('Failed updating course:', Error);
      throw new Error('Failed to update course');
    }
  }

  static async deleteCourse(id) {
    try {
      const deleted = await Course.destroy({
        where: {
          id,
        },
      });
      if (deleted === 0) {
        throw new Error('Course not found or already deleted');
      }
      return deleted;
      // return { message: 'Course successfully deleted', deletedCount: deleted };
    } catch (error) {
      console.error('Failed to delete course:', error);
      throw new Error('Failed to delete course');
    }
  }

  static async searchCourses(query) {
    try {
      // if (typeof query !== 'string' || query.trim() === '') {
      //   throw new Error('Invalid search query');
      // }
      const courses = await Course.findAll({
        where: {
          [Op.or]: [
            { name: { [Op.iLike]: `%${query}%` } },
            { session: { [Op.iLike]: `%${query}%` } },
          ],
        },
      });

      return courses;
    } catch (error) {
      console.error('Failed to search courses:', error);
      throw new Error('Failed to search courses');
    }
  }
}

module.exports = CourseService;
