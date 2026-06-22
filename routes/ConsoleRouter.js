const express = require('express');
const { getAllConsoles, addConsole } = require('../controllers/ConsoleController');

const consoleRouter = express.Router();

consoleRouter.get('/getConsoles', getAllConsoles);
consoleRouter.post('/addConsole', addConsole);

module.exports = consoleRouter;