const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema(
{
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 6 },
  email: { type: String, required: true, unique: true }
});

module.exports = mongoose.model('User', userSchema);