const express = require("express");
const UserModel = require("../model/DataByUser");

const dashBoardRoutes = express.Router();

dashBoardRoutes.get("/" , (req , res) => {
    res.render("signUp");
});
dashBoardRoutes.get("/singin" , (req , res) => {
    res.render("singIn");
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