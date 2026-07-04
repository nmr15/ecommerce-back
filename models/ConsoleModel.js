const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const consoleSchema = new Schema(
{
  name: { type: String, required: true, unique: true },
  shorthand: { type: String, required: true, unique: true }
});

module.exports = mongoose.model('Console', consoleSchema);