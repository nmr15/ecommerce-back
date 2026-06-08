require('dotenv').config;
const Product = require('../models/ProductModel');

const getAllProducts = async (req, res) =>
{
  const productData = await Product.find([]);

  try
  {
    res.send(productData);
  }
  catch(error)
  {
    res.status(500).send(error);
  }
}

const addProduct = async (req, res) =>
{
  try
  {
    const { name, images, categories, console, developer, publisher, description, price } = req.body;

    if(!name || !images || !categories || !console || !developer || !publisher || !descrption || !price)
    {
      return res.status(400).json({ message: "All fields are required"});
    }

    const newProduct = new Product({ name, images, categories, console, developer, publisher, description, price });
    await newProduct.save();

    res.status(201).json({ message: "Product added successfully", product: newProduct});
  }
  catch(error)
  {
    res.status(500).send(error);
  }
  
}

module.exports =
{
  getAllProducts
}