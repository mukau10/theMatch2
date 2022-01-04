import React, {useState} from "react";
import axios from "axios";

export default function RegisterComponent(){
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
    return(
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
        <button className="click-button" onClick={register}> Register</button>
      </div>

    )
}
