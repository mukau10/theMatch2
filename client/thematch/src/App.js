import logo from "./logo.svg";
import "./sass/utils.scss";

import LoginComponent from "./views/LoginComponent";
import RegisterComponent from "./views/RegisterComponent";
import AllUsersComponent from "./views/AllUsersComponent";
import FindOneUserComponent from "./views/FindOneUserComponent";
import MatchingComponent from "./views/MatchingComponent";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="navigationBar">
        <div className="navigation-links">
        <ul>
          <li>
            <Link to="/" style={{ color: "black", textDecoration: "none" }}>
              Matching
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              style={{ color: "black", textDecoration: "none" }}
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              to="/register"
              style={{ color: "black", textDecoration: "none" }}
            >
              Register
            </Link>
          </li>
          <li>
            <Link
              to="/all-users"
              style={{ color: "black", textDecoration: "none" }}
            >
              All Users
            </Link>
          </li>
          <li>
            <Link
              to="/users/:id"
              style={{ color: "black", textDecoration: "none" }}
            >
              User
            </Link>
          </li>
        </ul>

        </div>
        <div className="navbar-avatar">
          <Link to="/users/:id">
            <img className="navbar-image" src={require('./ronaldinho.jpg')}/>
          </Link>
        </div>
      </div>

      <Routes>
        <Route exact path="/" element={<MatchingComponent />} />
        <Route exact path="/login" element={<LoginComponent />} />
        <Route exact path="/register" element={<RegisterComponent />} />
        <Route exact path="/all-users" element={<AllUsersComponent />} />
        <Route exact path="/user/:id" element={<FindOneUserComponent />} />
      </Routes>
    </Router>
  );
}
