const Customer = require("../models/Customer");

class CustomerService {
    async createCustomer(customerData) {
        try {
            // Business logic and interaction with the model layer
            const customer = new Customer(customerData);
            await customer.save();
            return customer;
        } catch (error) {
            throw error;
        }
    }

    async updateCustomer(customerId, newData) {
        try {
            // Find the customer to update by ID
            const customer = await Customer.findByIdAndUpdate(customerId, newData, { new: true });

            if (!customer) {
                throw new Error("Customer not found");
            }

            return customer;
        } catch (error) {
            throw error;
        }
    }

    async deleteCustomer(customerId) {
        try {
            // Delete the customer by ID
            const customer = await Customer.findByIdAndDelete(customerId);

            if (!customer) {
                throw new Error("Customer not found");
            }

            return customer;
        } catch (error) {
            throw error;
        }
    }

    async searchCustomers(keyword) {
        try {
            // Search for customers based on the keyword
            const customers = await Customer.find({
                $or: [
                    { firstName: { $regex: keyword, $options: "i" } },
                    { lastName: { $regex: keyword, $options: "i" } },
                    { email: { $regex: keyword, $options: "i" } }
                ]
            });

            return customers;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new CustomerService();
