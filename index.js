const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());
const port = 5000

app.get('/', (req, res) => 
{
  res.send('Hello World!')
})

app.listen(port, () => 
{
  console.log(`Example app listening on port ${port}`)
})
