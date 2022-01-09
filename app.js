const express = require("express");
const app = express();
const users = require("./users");
app.use(express.json()) 


app.use("/users", users);


app.listen(3000, () => {
    console.log("listeng")
})