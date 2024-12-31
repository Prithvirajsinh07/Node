const mongoose = require("mongoose");

const apiSchema = mongoose.Schema({
    userName : {
        type : String,
        require :true
    }, email : {
        type : String,
        require :true
    },
    password:{
        type:String,
        require:true
    }
})


const UserModel = mongoose.model("apiData" , apiSchema);

module.exports = UserModel;