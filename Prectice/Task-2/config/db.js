const mongoose = require("mongoose");

const connection = async (error) => {
await mongoose.connect("mongodb://localhost:27017/databasePrithvi");
console.log("Database connected");
}

module.exports = connection ;