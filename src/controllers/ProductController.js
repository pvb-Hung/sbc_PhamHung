// class ProductController {
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
  
//   module.exports = new ProductController();
  
const productService = require("../services/productService");

class ProductController {

    create = async (req, res, next) => {
        try {
            const { name, description, price } = req.body;

            // Call the service layer to handle the creation
            let dataProduct = {
                name, description, price
            };
            const product = await productService.createProduct(dataProduct);

            res.status(200).json({
                product
            });

        } catch (error) {
            next(error);
        }
    }

    update = async (req, res, next) => {
        try {
            const productId = req.params.id; // Get the ID of the product to update from request params
            const { name, description, price } = req.body;

            // Call the service layer to update product information
            const updatedProduct = await productService.updateProduct(productId, { name, description, price });

            res.status(200).json({
                product: updatedProduct
            });

        } catch (error) {
            next(error);
        }
    }

    // Method to delete a product
    delete = async (req, res, next) => {
        try {
            const productId = req.params.id; // Get the ID of the product to delete from request params

            // Call the service layer to delete the product
            await productService.deleteProduct(productId);

            res.status(200).json({
                message: 'Product deleted successfully'
            });

        } catch (error) {
            next(error);
        }
    }

    // Method to search for products
    search = async (req, res, next) => {
        try {
            const { keyword } = req.query;

            // Call the service layer to search for products
            const products = await productService.searchProducts(keyword);

            res.status(200).json({
                products
            });

        } catch (error) {
            next(error);
        }
    }
}

module.exports = new ProductController();
