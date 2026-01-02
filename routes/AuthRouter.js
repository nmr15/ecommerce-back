const express = require('express');
const { getAllUsers, registerUser, loginUser } = require('../controllers/AuthController');

const authRouter = express.Router();

authRouter.get('/all', getAllUsers);
authRouter.post('/register', registerUser);
authRouter.post('/login', loginUser);

module.exports = authRouter;