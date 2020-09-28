const express = require("express");
const burger = require("../models/burger.js");

const router = express.Router();

// gets the homepage
router.get("/", function(req, res) {
    burger.all(function(data) {
        const hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

// posts the new burger object
router.post("/api/burgers", function(req, res) {
    burger.insert([
        "name", "devoured"
    ], [
        req.body.name, req.body.devoured
    ], function(result) {
        res.json({ id: result.insertId });
    });
});

// updates an existing burger when devoured
router.put("/api/burgers/:id", function(req, res) {
    let condition = "id = " + req.params.id;
  
    burger.update({
      devoured: req.body.devoured
    }, condition, function(result) {
      if (result.changedRows == 0) {
        console.log(result)
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
});

module.exports = router;