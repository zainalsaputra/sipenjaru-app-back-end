const express = require('express');
const viewEngineController = require('../controller/viewEngineController');

const router = express.Router();

router.get('/', viewEngineController.renderWelcomePage);

router.get('/not-found', viewEngineController.renderNotFoundPage);

module.exports = router;
