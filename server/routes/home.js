const express = require("express");
const router = express.Router();
const db = require("../database");
const bodyParser = require("body-parser");
const path = require("path");
const fs = require("fs");

router.get("/", (req, res) => {
  res.send("Hello server");
});


module.exports = router;
