var express = require("express");

var router = express.Router();

var burger = require("../models/burgers.js");



// Our GET request to grab database contents
router.get("/", function(req, res) {
	burger.selectAll(function(data) {
		var hbsObject = {
			burgers: data
		};

		res.render("index", hbsObject);
	});
});


router.post("/burgers/insertOne", function(req, res) {
	console.log("line 22:" + req.body.burger_name);

		burger.insertOne([
            "burger_name", 
        "devoured"], [req.body.burger_name, false], function(data) {
			res.redirect("/");
		}
        );
	
});

// Our PUT request to update a burger's status
router.put("/:id", function(req, res) {
	console.log(req.params.id);

	burger.updateOne(req.params.id, function(data) {
		res.redirect("/");
	});
})

















// router.get("/", (req, res) => {
//     console.log("we are in the correct route path")
//     burger.all((data) => {
//             var hbsObject = {
//                 burgers: data
//             };
//             console.log(hbsObject);
//             res.render("index", hbsObject);
//         });
//     });

//     router.post("/api/burgers", (req, res) => {
//         burger.create(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], (result) =>{
//             res.json({ id: result.insertId});
//         });
//     });


    // router.post("/api/burgers", async function (req, res) {
    //     try {
    //         await burger.create(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], (result) => {
    //             res.json({ id: result.insertId });
    //         });
    //     }
    //     catch (err) { 
    //         res.json({ error: err.message || err.toString() });
    //     }
    // });

    // router.put("api/burgers/:id", (req, res) => {
    //     var cond = "id = " + req.params.id;
    //     console.log("condition", cond);
        
    //     burger.update(
    //         {
    //             devoured: req.body.devoured
    //         },
    //         cond,
    //         (result) => {
    //             if (result.changedRows === 0) {
    //                 return res.status(404 + "Update Failed").end();
    //             }
    //             res.status(200 + "Update Successful").end
    //         }
    //     );
    // });

   module.exports = router; 