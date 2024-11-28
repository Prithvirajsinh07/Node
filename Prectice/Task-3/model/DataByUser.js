const mongoose = require("mongoose");

const userData = mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email : {
        type :String,
        required :true
    },
    gender : {
        type : String,
        required : true 
    },
     Hobbie : {
        type : Array,
        required : true 
     }
});

const UserModel = mongoose.model("userData" , userData);

module.exports = UserModel;