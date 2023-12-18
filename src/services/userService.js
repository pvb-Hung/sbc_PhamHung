const User = require("../models/User");

class UserService {
    async createUser(userData) {
        try {
            // Xử lý nghiệp vụ và tương tác với tầng model
            const user = new User(userData);
            await user.save();
            return user;
        } catch (error) {
            throw error;
        }
    }

    async updateUser(userId, newData) {
        try {
            // Tìm người dùng cần cập nhật theo ID
            const user = await User.findByIdAndUpdate(userId, newData, { new: true });

            if (!user) {
                throw new Error("User not found");
            }

            return user;
        } catch (error) {
            throw error;
        }
    }

    async deleteUser(userId) {
        try {
            // Xóa người dùng theo ID
            const user = await User.findByIdAndDelete(userId);

            if (!user) {
                throw new Error("User not found");
            }

            return user;
        } catch (error) {
            throw error;
        }
    }

    async searchUsers(keyword) {
        try {
            // Tìm kiếm người dùng dựa trên từ khóa
            const users = await User.find({
                $or: [
                    { username: { $regex: keyword, $options: "i" } },
                    { email: { $regex: keyword, $options: "i" } }
                ]
            });

            return users;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new UserService();