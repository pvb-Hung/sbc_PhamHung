// class UserController {
//     create = (req, res) => {
//       try {
//         const { username, password } = req.body;
//         res.status(200).json({
//           username,
//           password,
//         });
//       } catch (error) {
//         console.log(error);
//         res.status(500).json({ msg: 'Server error' });
//       }
//     };
  
//     get = (req, res) => {
//       try {
//         const { username, password } = req.body;
//         console.log('Get a user!');
//         res.status(200).json({
//           username,
//           password,
//         });
//       } catch (error) {
//         throw error;
//       }
//     };
  
//     update = (req, res) => {
//       try {
//         const { id } = req.params;
//         const { newData } = req.body;
//         // Thực hiện cập nhật dữ liệu sử dụng id và newData
  
//         res.status(200).json({ msg: `Updated data with ID ${id}` });
//       } catch (error) {
//         throw error;
//       }
//     };
  
//     delete = (req, res) => {
//       try {
//         const { id } = req.params;
//         // Thực hiện xóa dữ liệu sử dụng id
  
//         res.status(200).json({ msg: `Deleted data with ID ${id}` });
//       } catch (error) {
//         console.log(error);
//         res.status(500).json({ msg: 'Server error' });
//       }
//     };
//   }
  
//   module.exports = new UserController();
  
const userService = require("../services/userService");

class UserController {

    create = async (req, res, next) =>{
        try {
            const {username, email, age} = req.body;
            
            // Gọi đến tầng service để xử lý
            let dataUser = {
              username, email, age
            }
            const user = await userService.createUser(dataUser)

            res.status(200).json({
                user
            })

        } catch (error) {
            next(error)
        }
    }

    update = async (req, res, next) => {
      try {
          const userId = req.params.id; // Lấy ID của người dùng cần sửa từ request params
          const { username, email, age } = req.body;

          // Gọi đến tầng service để cập nhật thông tin người dùng
          const updatedUser = await userService.updateUser(userId, { username, email, age });

          res.status(200).json({
              user: updatedUser
          });

      } catch (error) {
          next(error);
      }
  }

  // Phương thức xóa người dùng
  delete = async (req, res, next) => {
      try {
          const userId = req.params.id; // Lấy ID của người dùng cần xóa từ request params

          // Gọi đến tầng service để xóa người dùng
          await userService.deleteUser(userId);

          res.status(200).json({
              message: 'User deleted successfully'
          });

      } catch (error) {
          next(error);
      }
  }

  // Phương thức tìm kiếm người dùng
  search = async (req, res, next) => {
      try {
          const { keyword } = req.query;

          // Gọi đến tầng service để tìm kiếm người dùng
          const users = await userService.searchUsers(keyword);

          res.status(200).json({
              users
          });

      } catch (error) {
          next(error);
      }
  }
}

module.exports = new UserController();