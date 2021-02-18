var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", (req, res) => {
    burger.all((data) => {
            var brgrObject = {
                burgers: data
            };
            console.log(brgrObject);
            res.render("index", brgrObject);
        });
    });

    router.post("/api/burgers", (req, res) => {
        burger.insertOne(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], (result) =>{
            res.json({ id: result.insertId});
        });
    });