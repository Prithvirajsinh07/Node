const mongoose = require("mongoose");

const connection = async () => {
    await mongoose.connect("mongodb://localhost:27017/apiData");
    console.log("database Connected");
    
}

module.exports = connection ;