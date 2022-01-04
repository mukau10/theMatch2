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
      <ul>
        <li>
          <Link to="/">Matching</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/all-users">All Users</Link>
        </li>
        <li>
          <Link to="/users/:id">User</Link>
        </li>
      </ul>
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
