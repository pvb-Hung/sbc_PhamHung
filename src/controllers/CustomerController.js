class CustomerController {
    create = (req, res) => {
      try {
        const { username, password } = req.body;
        res.status(200).json({
          username,
          password,
        });
      } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Server error' });
      }
    };
  
    get = (req, res) => {
      try {
        const { username, password } = req.body;
        console.log('Get a user!');
        res.status(200).json({
          username,
          password,
        });
      } catch (error) {
        throw error;
      }
    };
  
    update = (req, res) => {
      try {
        const { id } = req.params;
        const { newData } = req.body;
        // Thực hiện cập nhật dữ liệu sử dụng id và newData
  
        res.status(200).json({ msg: `Updated data with ID ${id}` });
      } catch (error) {
        throw error;
      }
    };
  
    delete = (req, res) => {
      try {
        const { id } = req.params;
        // Thực hiện xóa dữ liệu sử dụng id
  
        res.status(200).json({ msg: `Deleted data with ID ${id}` });
      } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Server error' });
      }
    };
  }
  
  module.exports = new CustomerController();
  