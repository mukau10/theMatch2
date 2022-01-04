import React, { Component } from "react";
import { useState } from "react";
import axios from "axios";
export default function LoginComponent() {
  const [usernameReg, setUernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");

  const register = () => {
    axios
      .post("http://localhost:3080/register", {
        username: usernameReg,
        password: passwordReg,
      })
      .then((response) => {
        console.log(response);
      });
  };

  const [loginStatus, setLoginStatus] = useState("");

  const login = () => {
    axios
      .get("http://localhost:3080/login", {
        username: usernameReg,
        password: passwordReg,
      })
      .then((response) => {
        console.log(response.data);
      });
  };
  return (
    <>
      <div className="registration">
        <h1>Registration</h1>
        <label>Username</label>
        <input
          type="text"
          onChange={(e) => {
            setUernameReg(e.target.value);
          }}
        />
        <br />
        <label>password</label>
        <input
          type="text"
          onChange={(e) => {
            setPasswordReg(e.target.value);
          }}
        />{" "}
        <br />
        <button onClick={register}> Register</button>
      </div>
      <div className="login">
        <h1>Login</h1>
        <input
          type="text"
          placeholder="Username…"
          onChange={(e) => {
            setUernameReg(e.target.value);
          }}
        />{" "}
        <br />
        <input
          type="password"
          placeholder="Password…"
          onChange={(e) => {
            setPasswordReg(e.target.value);
          }}
        />
        <button onClick={login}>Login</button>
        <h1> {loginStatus}</h1>
      </div>
    </>
  );
}
