const express = require('express');
const { getAllDevelopers, addDeveloper } = require('../controllers/DeveloperController');

const developerRouter = express.Router();

developerRouter.get('/getDevelopers', getAllDevelopers);
developerRouter.post('/addDeveloper', addDeveloper);

module.exports = developerRouter;