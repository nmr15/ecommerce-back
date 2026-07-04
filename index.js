const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const authRouter = require('./routes/AuthRouter');
const productRouter = require('./routes/ProductRoute');
const categoryRouter = require('./routes/CategoryRouter');
const consoleRouter = require('./routes/ConsoleRouter');
const developerRouter = require('./routes/DeveloperRouter');
const publisherRouter = require('./routes/PublisherRouter');

const app = express();
app.use(express.json());
app.use(cors());
const port = 5000

app.use(cors({
  origin: 'http://localhost:5173/', // Replace with your React app's URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));

app.use((req, res, next) =>
{
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');

  next();
});

const db = module.exports = async () =>
{
  try
  {
    await mongoose.connect(process.env.DBURI, 
    { user: process.env.DBUSERNAME, pass: process.env.DBPASSWORD
    })
    console.log('MongoDB connection is successful');
  }
  catch(error)
  {
    console.log(error);
    console.log('MongoDB connection failed');
  }
}

db();

app.use('/', (req, res, next) =>
{
  console.log('New request received');
  next();
});

app.use('/api/auth', authRouter);
app.use('/api/products', productRouter);
app.use('/api/categories', categoryRouter);
app.use('/api/consoles', consoleRouter);
app.use('/api/developers', developerRouter);
app.use('/api/publishers', publisherRouter);

app.listen(port, () => 
{
  console.log(`App listening on port ${port}`)
})
