// class CustomerController {
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
  
//   module.exports = new CustomerController();
  
const customerService = require("../services/customerService");

class CustomerController {

    create = async (req, res, next) => {
        try {
            const { firstName, lastName, email, age } = req.body;

            // Call the service layer to handle the creation
            let dataCustomer = {
                firstName, lastName, email, age
            };
            const customer = await customerService.createCustomer(dataCustomer);

            res.status(200).json({
                customer
            });

        } catch (error) {
            next(error);
        }
    }

    update = async (req, res, next) => {
        try {
            const customerId = req.params.id; // Get the ID of the customer to update from request params
            const { firstName, lastName, email, age } = req.body;

            // Call the service layer to update customer information
            const updatedCustomer = await customerService.updateCustomer(customerId, { firstName, lastName, email, age });

            res.status(200).json({
                customer: updatedCustomer
            });

        } catch (error) {
            next(error);
        }
    }

    // Method to delete a customer
    delete = async (req, res, next) => {
        try {
            const customerId = req.params.id; // Get the ID of the customer to delete from request params

            // Call the service layer to delete the customer
            await customerService.deleteCustomer(customerId);

            res.status(200).json({
                message: 'Customer deleted successfully'
            });

        } catch (error) {
            next(error);
        }
    }

    // Method to search for customers
    search = async (req, res, next) => {
        try {
            const { keyword } = req.query;

            // Call the service layer to search for customers
            const customers = await customerService.searchCustomers(keyword);

            res.status(200).json({
                customers
            });

        } catch (error) {
            next(error);
        }
    }
}

module.exports = new CustomerController();
