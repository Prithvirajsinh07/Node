const mongoose = require("mongoose");

const userSchema = mongoose.Schema ({
    bookName : {
        type : String , 
        required : true
    },
    price : {
        type : String , 
        required : true 
    },
    quntity : {
        type : String , 
        required : true 
    },
})

const UserModel = mongoose.model("userDataBase" , userSchema);

module.exports = UserModel;