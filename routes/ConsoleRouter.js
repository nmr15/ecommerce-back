const express = require('express');
const { getAllConsoles, addConsole } = require('../controllers/ConsoleController');
const { verifyToken, authorizeRoles } = require('../middleware/auth');

const consoleRouter = express.Router();

consoleRouter.get('/getConsoles', getAllConsoles);
consoleRouter.post('/addConsole', verifyToken, authorizeRoles('admin'), addConsole);

module.exports = consoleRouter;