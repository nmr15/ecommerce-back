const Console = require('../models/ConsoleModel');

const getAllConsoles = async (req, res) =>
{
  const consoleData = await Console.find({});

  try
  {
    res.send(consoleData);
  }
  catch(error)
  {
    res.status(500).send(error);
  }
}

const addConsole = async (req, res) =>
{
  try
  {
    const { name } = req.body;

    if(!name)
    {
      return res.status(400).json({ message: "All fields are required"});
    }

    const newConsole = new Console({ name });
    await newConsole.save();

    res.status(201).json({ message: "Console added successfully" })
  }
  catch(error)
  {
    res.status(500).send(error);
  }
}

module.exports = {
  getAllConsoles,
  addConsole
}