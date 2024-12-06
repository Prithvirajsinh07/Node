const mongoose = require("mongoose");
const path = require("path");
const multer = require("multer");
const imagePath = "uploads";

const userSchema = mongoose.Schema({
    userName : {
        type : String,
        require :true
    },
    email : {
        type : String,
        require :true
    },
    password : {
        type : String,
        require :true
    },
    file : {
        type : String,
        require :true
    },
})

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname , ".." , imagePath));
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now());
    }
  });

userSchema.statics.imageUpload =  multer({ storage: storage }).single("image");
userSchema.statics.imagePath = imagePath;

const UserModel = mongoose.model("admineDataPannal" , userSchema);

module.exports = UserModel;