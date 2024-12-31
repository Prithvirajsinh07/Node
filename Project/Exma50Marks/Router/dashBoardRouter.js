const express = require("express");
const UserModel = require("../Model/UserModel");

const dashBoardRoutes = express.Router();

dashBoardRoutes.get("/" , (req , res) => {
    res.render("login");
});
dashBoardRoutes.get("/login" , (req , res) => {
    res.render("register");
})
dashBoardRoutes.post("/insertData" , async (req , res)=> {
    console.log(req.body);
    
    await UserModel.create(req.body);
    console.log("User created");
    res.redirect("dashBoard");
})
dashBoardRoutes.get("/dashboard" , (req , res) => {
    res.render("dashBoard");
})

module.exports = dashBoardRoutes;