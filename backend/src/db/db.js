const { default: mongoose } = require("mongoose");

const url = "mongodb://localhost:27017/E-commerce";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(url);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(`MongoDB Error: ${error}`);
    }
};

module.exports = connectDB;
