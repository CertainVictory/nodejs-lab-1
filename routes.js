"use strict";
const express = require("express");
const cart = express.Router();


const cartItems = [
    {
        id: 0,
        product: "Carrot",
        price: 3,
        quantity: 3
    }, 
    {
        id: 1,
        product: "Celery",
        price: 3,
        quantity: 3
    },
    {
        id: 2,
        product: "Apple",
        price: 3,
        quantity: 3
    },

] //end of cartItems array

cart.get("/cart-items", function(req, res){
    res.send(cartItems);
    console.log("GET request made");
    console.log(cartItems)
});


// cart.get("/cart-items/:id", function(req, res){
//     res.send(req.params.id);
//     console.log("GET 2 request made");
//     console.log(req.params.id)
// });

cart.post("/cart-items", function(req, res) {
    console.log(req.body.item);
    console.log(cartItems)
})


cart.put("/cart-items/:id", function(req, res) {
    console.log(req.params.id, req.body, "PUT");
    res.send(req.params.id)
})

// cart.delete("/cart-items/:id", function(req, res) {
//     console.log(req.params.id, "DELETE");
//     res.send(req.params.id)
// })

cart.delete("/cart-items/:id", function(req, res) {
    for (let i=0; i < cartItems.length; i++) {
        if (cartItems[i].id == req.params.id) {
            cartItems.splice(i, 1);
            res.send(cartItems);
            break;
        }
    }
    console.log(req.params.id);
});


module.exports = cart;