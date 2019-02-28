"use strict";
const express = require("express");
const ShoppingCart = express.Router();
const pool = require("./connection");



ShoppingCart.get("/cart-items", function (req, res) {
    pool.query("SELECT * FROM ShoppingCart ORDER BY id ASC").then(function (result) {
        console.log(result.rows);
        res.send(result.rows);
    })
})

ShoppingCart.post("/cart-items", function (req, res) {
    pool.query("INSERT INTO ShoppingCart (product, price, quantity) VALUES ($1::text, $2::int, $3::int)", [req.body.product, req.body.price, req.body.quantity]).then(function (result) {
        pool.query("SELECT * FROM ShoppingCart ORDER BY id ASC").then(function (result) {
            console.log(result.rows);
            res.send(result.rows);
        })
    })
})

ShoppingCart.delete("/cart-items/:id", function (req, res) {
    pool.query("DELETE FROM ShoppingCart WHERE id=$1::int", [req.params.id]).then(function () {
        pool.query("SELECT * FROM ShoppingCart").then(function (result) {
            res.send(result.rows);
        })
    })
})

ShoppingCart.put("/cart-items/:id", function (req, res) {
    pool.query("UPDATE ShoppingCart SET quantity=$1::int where id=$2::int", [req.body.quantity, req.params.id]).then(function () {
        pool.query("SELECT * FROM ShoppingCart ORDER BY id ASC").then(function (result) {
            console.log(result.rows);
            res.send(result.rows);
        })
    })
})

module.exports = ShoppingCart;