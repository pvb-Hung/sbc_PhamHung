//tạo kết nối tới mongoo cloud
//tìm hiểu bất đồng bộ
const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect(
            'mongodb+srv://phamvietbaohung1511:xvDGYQAZ6s89qG3t@cluster0.fcrfowa.mongodb.net/scb-api?retryWrites=true&w=majority', //đường dẫn
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        );
        console.log('Database - Connect successfully !!!');
    } catch (error) {
        console.log('Database - Connect failure!!!');
    }
}

module.exports = {connect};