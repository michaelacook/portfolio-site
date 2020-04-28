const express = require('express');
const router = express.Router();

const homeController = require('../controllers/homeController.js');
const projectController = require('../controllers/projectController.js');
const aboutController = require('../controllers/aboutController.js');


router.get('/', (req, res) => homeController(req, res));
router.get('/about', (req, res) => aboutController(req, res));
router.get('/projects/:id', (req, res) => projectController(req, res));


module.exports = router;