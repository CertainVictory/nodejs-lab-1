"use strict";
const express = require("express");
const app = express();
//^instance of express
const ShoppingCart = require("./routes/routes");
app.use(express.static("./public"))

app.use(express.json());


app.use("/", ShoppingCart);





app.listen(8080, () => {
    console.log(`Server is running on PORT: 3000`);
});