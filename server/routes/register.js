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

router.post("/profile", (req, res) => {
  const { firstName, lastName, age, gender, email, profileImage } = req.body;
  db.query(
    `INSERT into profiles (firstName, lastName, age, gender, email, profileImage) values ("${firstName}", "${lastName}", "${age}", "${gender}", "${email}", "${profileImage}")`,
    (err, result) => {
      if (err) {
        console.log(err);
      }
      console.log("inserted \n: " + JSON.stringify(result));
    }
  );
});


module.exports = router;
