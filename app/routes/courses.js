const express = require('express');
const CourseController = require('../controller/coursesController');
const courseValidationRules = require('../middleware/coursesMiddleware');

const router = express.Router();

router.get('/', CourseController.getAllCourses);

router.get('/:id', CourseController.getCourseById);

router.post('/', courseValidationRules, CourseController.createCourse);

router.put('/:id', CourseController.updateCoursePut);

router.delete('/:id', CourseController.deleteCourse);

// router.get('/', async (req, res) => {
//     res.send({
//         status: true
//     })
// });

module.exports = router;
