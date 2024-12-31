const express = require("express");
const dashBoardRotes = express.Router();
const UserModel = require("../model/studetModel");
const bcrypt = require("bcrypt")

dashBoardRotes.get("/" , async (req , res) => {
    let getStudentData = await UserModel.find({});
    res.status(200).json({});
})
dashBoardRotes.post("/addStudent" , async (req , res) => {
    try{
        req.body.password = await bcrypt.hash(req.body.password,10)
        await UserModel.create(req.body);
        res.status(201).json({massage : "Student added Successfully"});
    }catch (err){
        res.status(400).json({error : err.message});
    }
});

dashBoardRotes.delete("/deleteStudent/:id" , async (req , res) => {
    try{
        await UserModel.findByIdAndDelete(req.params.id);
        return res.status(200).json({massage : "student Delete Successfully"});
    }
    catch(error){
return res.status(404).json({massage : "massage not found"});
    }
});

dashBoardRotes.put("/updateStudent/:id" , async (req , res) => {
    try{
        await UserModel.findByIdAndUpdate(req.params.id , req.body);
        return res.status(200).json({massage: "student updated successfully"});
    }catch(err){
        return res.status(404).json({massage : "student not found"});
    }
})

module.exports = dashBoardRotes;