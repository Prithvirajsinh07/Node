const mongoose = require("mongoose");

const connection = async () => {
    await mongoose.connect("mongodb://localhost:27017/dataByPrectice");
    console.log("Database Connected");
}

module.exports = connection;