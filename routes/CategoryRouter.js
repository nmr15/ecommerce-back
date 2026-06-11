const express = require('express');
const { getAllCategories, addCategory } = require('../controllers/CategoryController');

const categoryRouter = express.Router();

categoryRouter.get('/getCategories', getAllCategories);
categoryRouter.post('/addCategory', addCategory);

module.exports = categoryRouter