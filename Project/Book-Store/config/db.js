const mongoose = require("mongoose");

const connection = async () => {
    await mongoose.connect("mongodb://localhost:27017/dataByBook");
    console.log("DataBase Connected");
}
module.exports = connection;