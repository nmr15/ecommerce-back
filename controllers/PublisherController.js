const Publisher = require('../models/PublisherModel');

const getAllPublishers = async (req, res) =>
{
  const publisherData = await Publisher.find([]);

  try
  {
    res.send(publisherData);
  }
  catch(error)
  {
    res.status(500).send(error);
  }
}

module.exports = { getAllPublishers }