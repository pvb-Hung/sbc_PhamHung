//userRoutes.js
const express = require('express');
const router = express.Router();

// router.get('/:id', (req, res) => {
//   let id = req.params.id; // Sửa đổi ở đây: sử dụng req.params.id để lấy giá trị của tham số id
//   console.log(id);
//   res.status(200).json({ msg: `Get ID ${id}` });
// });

router.get('/test' , (req, res) => {
  console.log('a');
  const {page, sort} = req.query;
  console.log(page, sort);

  res.status(200).json({ msg: `Get` });
})

router.post('/' , (req, res) =>{
  const {username , password} = req.body;

  res.status(200).json({
    username,
    password
  })
})

router.put('/:id', (req, res) => {
  const id = req.params.id;
  // Lấy các thông tin từ req.body để cập nhật dữ liệu
  const { newData } = req.body;

  // Thực hiện cập nhật dữ liệu sử dụng id và newData

  res.status(200).json({ msg: `Updated data with ID ${id}` });
});

// Thêm phương thức DELETE
router.delete('/:id', (req, res) => {
  const id = req.params.id;

  // Thực hiện xóa dữ liệu sử dụng id

  res.status(200).json({ msg: `Deleted data with ID ${id}` });
});

module.exports = router;
