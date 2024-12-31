const mongoose = require("mongoose");
const { type } = require("os");
const path = require("path");
// const multer = require("multer");
// const imagePath = "uploads";

const subCatgorySchema = mongoose.Schema({
    categoryId : {
        type: mongoose.Schema.Types.ObjectId,
        require : true,
        ref : "catgoryModel",
    },
    subCategoryName : {
        type : String,
        require : true
    }
})

const SubCatgoryModel = mongoose.model("subCatgoryModel" , subCatgorySchema);

module.exports = SubCatgoryModel ;