const express = require("express");
const router = express.Router();
const db = require("../database");
const bodyParser = require("body-parser");
const path = require("path");
const fs = require("fs");

router.get("/", (req, res) => {
  db.query('SELECT * FROM profiles', (err, results)=>{
    res.send(results);
  })
});


module.exports = router;
