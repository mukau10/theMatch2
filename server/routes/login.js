const express = require("express");
const router = express.Router();
const db = require("../database");
const bodyParser = require("body-parser");
const path = require("path");

router.get("/", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  db.query(
    "SELECT * FROM accounts WHERE username = ? AND password = ?",
    [username, password],
    (err, result) => {
      res.send(data)
    }
  );
});

module.exports = router;
