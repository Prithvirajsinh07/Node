const express = require("express");
const UserModel = require("../model/DataByUser");

const dashBoardRoutes = express.Router();

dashBoardRoutes.get("/" , (req , res) => {
    res.render("signUp");
});
dashBoardRoutes.post("/insertData" , async (req , res)=> {
    await UserModel.create(req.body);
    console.log("User created");
    res.redirect("dashBoard");
})
dashBoardRoutes.get("/dashboard" , (req , res) => {
    res.render("dashBoard");
})

module.exports = dashBoardRoutes;