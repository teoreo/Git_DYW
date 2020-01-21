console.log("Hola")

let express = require("express")
let app = express()

app.get("/", function (req, res) {
  res.send("Hej Emma!")
});


app.listen(3000);