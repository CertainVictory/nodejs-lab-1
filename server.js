"use strict";
const express = require("express");
const app = express();
//^instance of express
const cart = require("./routes");

app.use(express.json());


app.use("/", cart);



app.use(express.static("./public"))


app.listen(8080, () => {
    console.log(`Server is running on PORT: 3000`);
});