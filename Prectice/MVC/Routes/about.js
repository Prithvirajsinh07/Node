const express = require("express");

const aboutRoutes = express.Router();

aboutRoutes.get("/about" , (req , res) => {
res.render("about");
})

module.exports = aboutRoutes; 