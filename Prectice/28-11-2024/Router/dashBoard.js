const express = require("express");

const dashBoardRotes = express.Router();

dashBoardRotes.get("/" , (req, res) => {
    res.render("dashBoard");
})

module.exports = dashBoardRotes;