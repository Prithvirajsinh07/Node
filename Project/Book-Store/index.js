const express = require("express");
const connection = require("./config/db")
const UserModel = require("./model/DataByUser");
const PORT = 8000;
const app = express();

app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: false }));

app.get("/", async (req, res) => {
    try{
        const userInfo = await UserModel.find({});
        res.render("book", {userInfo });
    }
    catch(err){
        console.log(err);
    }
})
app.post("/insertAddData", async (req, res) => {
   try{
    await UserModel.create(req.body);
    console.log("data insert sucessfully");
   }
   catch(err){
    console.log(err);
   }

    res.redirect("back");
})
app.listen(PORT, () => {
    console.log("Server Started Sucessfully");
    connection();
})
