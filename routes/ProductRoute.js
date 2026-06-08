const express = require('express');
const { getAllProducts } = require('../controllers/ProductController')

const productRouter = express.Router();

productRouter.get('/getProducts', getAllProducts);

module.exports = productRouter;