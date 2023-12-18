const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number, min: 18 },
  // Các trường khác phản ánh thông tin khách hàng
});

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
