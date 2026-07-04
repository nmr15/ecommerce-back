const Publisher = require('../models/PublisherModel');

const getAllPublishers = async (req, res) =>
{
  const publisherData = await Publisher.find({});

  try
  {
    res.send(publisherData);
  }
  catch(error)
  {
    res.status(500).send(error);
  }
}

const addPublisher = async (req, res) =>
{
  try
  {
    const { name } = req.body;

    if(!name)
    {
      return res.status(400).json({ message: "All fields are required"});
    }

    const newPublisher = new Publisher({ name });
    await newPublisher.save();

    res.status(201).json({ message: "Publisher added successfully" })
  }
  catch(error)
  {
    res.status(500).send(error);
  }
}

module.exports = { 
  getAllPublishers,
  addPublisher
}