const express = require("express");
const path = require("path");
const UserModel = require("../model/UserDataBase");
const CatgoryModel = require("../model/catgoryModel");
const dashBoardRotes = express.Router();
const multer = require("multer");
const nodemailer = require('nodemailer');   
const passport = require("../config/passport-local");
const SubCatgoryModel = require("../model/subCatgory");

dashBoardRotes.get("/", (req, res) => {
    res.render("signIn");

})

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
dashBoardRotes.post("/insertData", async (req, res) => {

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
    res.render("viewAdmine");
})
dashBoardRotes.get("/dashBoard",passport.isAuth, (req, res) => {
    res.render("dashBoard");
})
dashBoardRotes.get("/otpPage" , (req , res) => {
    res.render("otp");
});

dashBoardRotes.get("/chekOtp" , (req , res) => {
    res.render("otp");
});
dashBoardRotes.get("/catgory" ,async (req , res) => {
    try {
        const userData = await CatgoryModel.find({});
    
        res.render("newData", { userData });
      } catch (err) {
        console.log(err);
      }
    res.render("catgory");
})
dashBoardRotes.get("/subCatgory" ,async (req , res) => {
    try {
        const subCatgoryData = await CatgoryModel.find({});
    
        res.render("subCatgory", { subCatgoryData : subCatgoryData });
      } catch (err) {
        console.log(err);
      }
   
})
dashBoardRotes.post("/insertSubCategory" , async(req , res) => {
    console.log(req.body);
    
    try {
        await SubCatgoryModel.create(req.body);
        console.log("Sub catgory Created");
        res.redirect("back");
      } catch (err) {
        console.log(err);
      }

})

dashBoardRotes.post("/catgoryData" , async (req , res) => {
    await CatgoryModel.create(req.body);
    console.log("Data inserted successfully");
    res.redirect("/dashBoard");
});

dashBoardRotes.get("/viewSubCategory", async (req, res) => {
    let getData = await SubCatgoryModel.find().populate("categoryId").exec();
   console.log(getData)
     res.render("viewSubCategory",{getData})
   })
   module.exports = dashBoardRotes  ;

dashBoardRotes.post("/forgotPassword" , async (req , res) => {
    let getUser = await UserModel.findOne({email : req.body.email});
    if(!getUser){
       return res.redirect("/");
    }
    let otp = Math.floor(Math.random() * 10000);
    res.cookie("getOtp" , otp);
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'pruthveerajsinhdodiya@gmail.com',
          pass: 'mmya swqc gdet amqs'
        }
      });
      
      var mailOptions = {
        from: 'pruthveerajsinhdodiya@gmail.com',
        to: getUser.email,
        subject: 'OTP',
        text: `OTP -${otp}`
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
          res.redirect("/chekOtp")
        }
      });
})

dashBoardRotes.post("/chekOtp" , (req , res) => {
const cookieOtp = req.cookies["getOtp"];
if(cookieOtp == req.body.otp){
    redirect("/changeOtp");
} 
})

dashBoardRotes.post("/logIn", passport.authenticate("local" , {failureRedirect :"/"}) ,async (req, res) => {
    try{
res.redirect("/dashBoard");
    }catch(err){
        console.log(err);
    }

})

module.exports = dashBoardRotes;