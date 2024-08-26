// routes/courseRoutes.js
const express = require('express');

const app = express();

const courses = require('./courses');
const viewEngine = require('./viewEngine');
// const CourseController = require('../controllers/courseController');

const router = express.Router();

app.use(router);

// Define routes for courses
// router.use((req, res) => {
//   res.send({
//     status: true,
//     data: 'hello dek',
//   });
// });

router.use('/courses', courses);

router.use(viewEngine);

module.exports = router;
