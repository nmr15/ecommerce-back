const Category = require('../models/CategoryModel');

const getAllCategories = async (req, res) =>
{
  const categoryData = await Category.find({});

  try
  {
    res.send(categoryData);
  }
  catch(error)
  {
    res.status(500).send(error);
  }
}

const addCategory = async (req, res) =>
{
  try
  {
    const { name } = req.body;

    if(!name)
    {
      return res.status(400).json({ message: "All fields are required"});
    }

    const newCategory = new Category({ name });
    await newCategory.save();

    res.status(201).json({ message: "Category added successfully" })
  }
  catch(error)
  {
    res.status(500).send(error);
  }
}

module.exports = { 
  getAllCategories,
  addCategory
}