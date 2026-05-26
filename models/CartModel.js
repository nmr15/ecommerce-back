const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cartSchema = new Schema(
{
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  cartItems: [
    {
      product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
      name: { type: String, required: true },
      image: { type: String, required: true },
      price: { type: Number, required: true },
      qty: { type: Number, required: true, default: 1 }
      // countInStock: { type: Number, required: true }
    }
  ]
});

module.exports = mongoose.model('Cart', userSchema);