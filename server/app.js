const express = require("express");
const dotenv = require("dotenv").config("./.env");
const PORT = 3080;
const session = require("express-session");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const path = require("path");
const db = require("./database");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors({
  origin: true,
  methods: ["GET", "POST"],
  credentials: true
}));

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
    resave: false,
    saveUninitialized: false,
    cookie: { expires: 60 * 60 * 24 }, //vervalt na 24 uur
  })
);

const getUsersData = require('./routes/show-user');
const registerUser = require('./routes/register');
const usersServer = require('./routes/users');
const loginRoute = require('./routes/login');

app.use('/show-user', getUsersData);
app.use('/login',loginRoute);
app.use('/register',registerUser);
app.use('/users',usersServer);

app.listen(PORT, () => {
  console.log(`The Match listening at http://localhost:${PORT}`);
});
