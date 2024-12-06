const mongoose = require("mongoose");

const connection = async () => {
    await mongoose.connect("mongodb://localhost:27017/buchData");
    console.log("database Connected");
    
}

module.exports = connection ;