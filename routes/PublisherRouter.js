const express = require('express');
const { getAllPublishers, addPublisher } = require('../controllers/PublisherController');

const publisherRouter = express.Router();

publisherRouter.get('/getPublishers', getAllPublishers);
publisherRouter.post('/addPublisher', addPublisher);

module.exports = publisherRouter;