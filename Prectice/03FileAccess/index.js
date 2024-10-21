const fs = require("fs");

fs.writeFile("./Index.txt", "Namaste Bharat Async", (err) => {});

fs.readFile("./Index.txt", "utf-8" , (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(res);
    console.log(res.toString());
  }
});

fs.unlink("./Index.txt", (err)=>{})