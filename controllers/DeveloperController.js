const Developer = require('../models/DeveloperModel.js')

const getAllDevelopers = async (req, res) =>
{
  const developerData = await Developer.find([]);

  try
  {
    res.send(developerData);
  }
  catch(error)
  {
    res.status(500).send(error);
  }
}

module.exports = { getAllDevelopers }