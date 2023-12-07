// customer.js
const express = require('express');
const router = express.Router();

router.get('/test', (req, res) => {
  console.log('a');
  const { page, sort } = req.query;
  console.log(page, sort);

  res.status(200).json({ msg: `Get` });
});

router.post('/', (req, res) => {
  const { name, email } = req.body;

  res.status(200).json({
    name,
    email,
  });
});

router.put('/:id', (req, res) => {
  const id = req.params.id;
  const { newData } = req.body;

  // Thực hiện cập nhật dữ liệu sử dụng id và newData

  res.status(200).json({ msg: `Updated data with ID ${id}` });
});

router.delete('/:id', (req, res) => {
  const id = req.params.id;

  // Thực hiện xóa dữ liệu sử dụng id

  res.status(200).json({ msg: `Deleted data with ID ${id}` });
});

module.exports = router;
