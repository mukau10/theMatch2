import React, { Component } from "react";
import { useState } from "react";
import axios from "axios";
import '../sass/utils.scss';
import { Button } from 'react-bootstrap';
import { Navigate, useNavigate } from "react-router-dom";

export default function LoginComponent() {
  const navigation = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loginStatus, setLoginStatus] = useState("");

  const login = () => {
    axios
      .post("http://localhost:3080/login", {
        username: username,
        password: password,
      })
      .then((response) => {
        if(!response.data){
          setLoginStatus("Not Connected")
        }else{
          setLoginStatus("Connected")
          navigation('/')
        }
      });
  };
  return (
      <div className="login">
        <h1>Login</h1>
        <input
          type="text"
          placeholder="Username…"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />{" "}
        <br />
        <input
          type="password"
          placeholder="Password…"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button className="click-button" onClick={login}>Login</button>
        <h1> {loginStatus}</h1>
      </div>
  );
}
