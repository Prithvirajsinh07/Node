const express = require("express");
const PORT =7000;
const app = express();

app.listen(PORT , (req , res) => {
    console.log("Server Started");
})