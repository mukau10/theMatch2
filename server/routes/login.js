const express = require("express");
const router = express.Router();
const db = require("../database");
const bodyParser = require("body-parser");
const path = require("path");

router.post("/", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  db.query(
    `SELECT * FROM accounts where username = ? and password =?`,
    [username, password],
    (err, result) => {
      if(err){
        console.log(err)
      }
      else{
        res.send(result)
        console.log("Logged in")
      }
    }
  );
});

module.exports = router;
