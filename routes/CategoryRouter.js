const express = require('express');
const { getAllCategories, addCategory } = require('../controllers/CategoryController');
const { verifyToken, authorizeRoles } = require('../middleware/auth');

const categoryRouter = express.Router();

categoryRouter.get('/getCategories', getAllCategories);
categoryRouter.post('/addCategory', verifyToken, authorizeRoles('admin'), addCategory);

module.exports = categoryRouter;