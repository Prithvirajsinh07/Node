const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    userName : {
        type : String ,
        require : true
    },
    password : {
        type : String,
        require : true
    },
});

const UserModel = mongoose.model("userDataBase" , userSchema);

module.exports = UserModel;