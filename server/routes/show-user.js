const express = require("express");
const router = express.Router();
const db = require("../database");
const bodyParser = require("body-parser");
const path = require("path");
const fs = require('fs')

router.get("/", (req, res) => {
  db.query("SELECT * FROM users", (err, results, data) => {
    res.send(results);
  });
});

router.get("/:id", (req, res) => {
    const {id} = req.params;
  db.query("SELECT * FROM users where id = ?",[id], (err, results, data) => {
    res.send(results);
  });
});

module.exports = router;
