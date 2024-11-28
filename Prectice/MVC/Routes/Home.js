const express = require("express");

const homeRoutes = express.Router();

homeRoutes.get("/" , (req , res) => {
res.render("Home");
})

module.exports = homeRoutes; 