const express = require("express");
const path = require("path");
const UserModel = require("../model/UserDataBase");
const dashBoardRotes = express.Router();
const multer = require("multer");
const passport = require("../config/passport-local")

dashBoardRotes.get("/", (req, res) => {
    res.render("signIn");

})
~
dashBoardRotes.get("/signup", (req, res) => {
    res.render("signUp");
})
dashBoardRotes.get("/ChangePassword", (req, res) => {  
    res.render("ChangePassword");
});
// change Password 
dashBoardRotes.post("/getChangePassword" , async(req , res) => {
    console.log(req.body);   
    const {oldPassword , newPassword , conPassword}=req.body;
    const cookieData = req.cookies["auth"];
    console.log(cookieData);

    if (!cookieData) {
        res.redirect("/");
        return;
    }
 if (oldPassword === cookieData.password) {
        if (oldPassword !== newPassword) {
            if (newPassword === conPassword) {
              await  UserModel.findByIdAndUpdate(cookieData._id,{password : newPassword});
               await console.log("passWord Changed");
              await  res.clearCookie("auth");
              res.redirect("/");
            } else {
                res.redirect("back");
            }
        } else {
            res.redirect("back");
        }
    } else {
        res.redirect("back");
    }

})

dashBoardRotes.get("/logOut", (req, res) => {
    res.clearCookie("auth");
    res.redirect("/");
})
dashBoardRotes.post("/insertData", UserModel.imageUpload, async (req, res) => {

    try {
        // if (req.file) {
        //     req.body.image = UserModel.imagePath + "/" + req.file.filename; // correct syntax
        // }
        await UserModel.create(req.body);
        console.log("User created");
        res.redirect("/signIn");
    } catch (err) {
        console.log(err);
    }
});
dashBoardRotes.get("/viewAdmin", passport.isAuth , (req, res) => {
    res.render("viewAdmine")
})
dashBoardRotes.get("/dashBoard", (req, res) => {
    res.render("dashBoard");
})

dashBoardRotes.post("/logIn", passport.authenticate("local" , {failureRedirect :"/"}) ,async (req, res) => {
    try{
res.redirect("/dashBoard");
    }catch(err){
        console.log(err);
    }

})

module.exports = dashBoardRotes;