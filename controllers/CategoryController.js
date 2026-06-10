const Category = require('../models/CategoryModel');

const getAllCategories = async (req, res) =>
{
  const categoryData = await Category.find([]);

  try
  {
    res.send(categoryData);
  }
  catch(error)
  {
    res.status(500).send(error);
  }
}

module.exports = { getAllCategories }