const express = require("express");
const connection = require("./config/db");
const UserModel = require("./Model/userModel")
const PORT = 8080;
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  try{
const userData = await UserModel.find({});
res.render("addData" , userData);
  }
  catch(err){
console.log(err);
  }
   res.render("index");
})


app.post("/insertAddData", async (req, res) => {
  try{
await UserModel.create(req.body);
console.log("Data Insert Sucessfully");

  }
  catch (err){
console.log(err);

  }
  res.redirect("back");

})

app.listen(PORT, (error) => {
  if (error) {
    console.log("server is not running");
    return;
  }
  connection();
  console.log("server started");
 
})