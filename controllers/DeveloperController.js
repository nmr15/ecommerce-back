const Developer = require('../models/DeveloperModel.js')

const getAllDevelopers = async (req, res) =>
{
  const developerData = await Developer.find({});

  try
  {
    res.send(developerData);
  }
  catch(error)
  {
    res.status(500).send(error);
  }
}

const addDeveloper = async (req, res) =>
{
  try
  {
    const { name } = req.body;

    if(!name)
    {
      return res.status(400).json({ message: "All fields are required"});
    }

    const newDeveloper = new Developer({ name });
    await newDeveloper.save();

    res.status(201).json({ message: "Developer added successfully" })
  }
  catch(error)
  {
    res.status(500).send(error);
  }
}

module.exports = { 
  getAllDevelopers,
  addDeveloper
}