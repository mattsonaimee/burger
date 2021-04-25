var express = require('express');
var router = express.Router();
var burger = require('../models/burgers.js');

// Our GET request to grab database contents
router.get('/', function (req, res) {
  burger.selectAll(function (data) {
    var hbsObject = {
      burgers: data,
    };

    res.render('index', hbsObject);
  });
});

router.post('/burgers/insertOne', function (req, res) {
  console.log('line 22:' + req.body.burger_name);

  burger.insertOne(
    ['burger_name', 'devoured'],
    [req.body.burger_name, false],
    function (data) {
      res.redirect('/');
    }
  );
});

router.put('/burgers/updateOne', function (req, res) {
  console.log('line 22:' + req.body.burger_name);

  burger.updateOne(
    ['burger_name', 'devoured'],
    [req.body.burger_name, false],
    function (data) {
      res.redirect('/');
    }
  );
});

// Our PUT request to update a burger's status
// router.put("/:id", function(req, res) {
// 	console.log(req.params.id);

// 	burger.updateOne(req.params.id, function(data) {
// 		res.redirect("/");
// 	});
// })

module.exports = router;
