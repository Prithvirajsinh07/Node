const mongoose = require("mongoose");
const path = require("path");
// const multer = require("multer");
// const imagePath = "uploads";

const catgorySchema = mongoose.Schema({
    catgory : {
        type : String,
        require :true
    },
    // file : {
    //     type : String,
    //     require :true
    // },
})

const CatgoryModel = mongoose.model("catgoryModel" , catgorySchema);

module.exports = CatgoryModel;