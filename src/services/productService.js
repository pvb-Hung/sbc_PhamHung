const Product = require("../models/Product");

class ProductService {
    async createProduct(productData) {
        try {
            // Business logic and interaction with the model layer
            const product = new Product(productData);
            await product.save();
            return product;
        } catch (error) {
            throw error;
        }
    }

    async updateProduct(productId, newData) {
        try {
            // Find the product to update by ID
            const product = await Product.findByIdAndUpdate(productId, newData, { new: true });

            if (!product) {
                throw new Error("Product not found");
            }

            return product;
        } catch (error) {
            throw error;
        }
    }

    async deleteProduct(productId) {
        try {
            // Delete the product by ID
            const product = await Product.findByIdAndDelete(productId);

            if (!product) {
                throw new Error("Product not found");
            }

            return product;
        } catch (error) {
            throw error;
        }
    }

    async searchProducts(keyword) {
        try {
            // Search for products based on the keyword
            const products = await Product.find({
                $or: [
                    { name: { $regex: keyword, $options: "i" } },
                    { description: { $regex: keyword, $options: "i" } }
                ]
            });

            return products;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new ProductService();
