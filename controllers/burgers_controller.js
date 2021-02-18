var express = require("express");

var router = express.Router();

var burger = require("../models/burgers.js");

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

    router.put("api/burgers/:id", (req, res) => {
        var cond = "id = " + req.params.id;
        console.log("condition", cond);
        
        burger.update(
            {
                devoured: req.body.devoured
            },
            cond,
            (result) => {
                if (result.changedRows === 0) {
                    return res.status(404 + "Update Failed").end();
                }
                res.status(200 + "Update Successful").end
            }
        );
    });

   module.exports = router; 