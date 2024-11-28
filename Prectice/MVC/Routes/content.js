const express = require("express");

const contentRoutes =  express.Router();

contentRoutes.get("/content" , (req , res) => {
res.render("content");
})

module.exports = contentRoutes; 