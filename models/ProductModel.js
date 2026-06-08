const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema(
{
  // user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User'},
  name: { type: String, required: true},
  images: [{ 
      type: String, 
      required: true 
    }],
  categories: [{ 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'Category',
      required: true
    }],
  console: { type: mongoose.Schema.Types.ObjectId, ref: 'Console', required: true},
  developer: { type: mongoose.Schema.Types.ObjectId, ref: 'Developer', required: true},
  publisher: { type: mongoose.Schema.Types.ObjectId, ref: 'Publisher', required: true},
  description: { type: mongoose.Schema.Types.ObjectId, required: true},
  price: { type: Number, required: true, default: 0},
},
{
  timestamps: true
});

module.exports = mongoose.model('Product', productSchema);