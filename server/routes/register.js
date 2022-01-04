const express = require("express");
const router = express.Router();
const db = require("../database");
const bodyParser = require("body-parser");
const path = require("path");

router.post("/", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
    db.query(
      "INSERT INTO accounts (username, password) VALUES (?,?)",
      [username, password],
      (err, result)=> {
      console.log(err);
      }
    );
});

module.exports = router;
