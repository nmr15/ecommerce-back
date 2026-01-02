const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const authRouter = require('./routes/AuthRouter');

const app = express();
app.use(express.json());
app.use(cors());
const port = 5000

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

app.listen(port, () => 
{
  console.log(`App listening on port ${port}`)
})
