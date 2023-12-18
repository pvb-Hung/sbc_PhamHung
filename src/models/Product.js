const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true, min: 0 },
  // Additional fields can be added based on your needs
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
