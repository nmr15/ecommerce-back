const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const User = require('../models/UserModel');

const getAllUsers = async (req, res) =>
{
  const userData = await User.find({});
  try
  {
    res.send(userData);
  }
  catch(error)
  {
    res.status(500).send(error);
  }
}

const registerUser = async (req, res) =>
{
  const { username, password, email } = req.body;

  try
  {
    let user = await User.findOne({ username });
    if(user)
    {
      return res.status(400).json({ msg: 'User already exists' });
    }

    user = new User({ username, password, email });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();

    const payload =
    {
      user: { id: user.id }
    };

    jwt.sign(payload, process.env.jwtsecret, { expiresIn: 3600 },
    (err, token) =>
    {
      if(err) throw err;
      res.json({ token });
    })

    res.status(201).json({ message: 'User registered' });
  }
  catch (err)
  {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
}

const loginUser = async (req, res) =>
{
  const { username, password } = req.body;

  try
  {
    // Check if user exists
    let user = await User.findOne({ username });
    if(!user)
    {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    // Validate password
    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch)
    {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    // Generate JWT token
    const payload =
    {
      user: { id: user.id }
    }

    jwt.sign(payload, process.env.jwtsecret, { expiresIn: 3600 }),
    (err, token) =>
    {
      if(err) throw err;
      res.json({ token });
    }

    res.status(201).json({ message: 'User logged in' });
  }
  catch(err)
  {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
}

module.exports =
{
  getAllUsers,
  registerUser,
  loginUser
};