import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import setAuthToken from "axios";

import "./logReg.css";

export default function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isPanding, setIsPending] = useState(false);

  const admin = { username, password };

  const handleSub = (e) => {
    e.preventDefault();

    setIsPending(true);

    axios.post("http://localhost:8080/login", admin).then((response) => {
      const token = response.data.token;
      console.log(token);
      localStorage.setItem("jwt_token", token);
      setAuthToken(token);
      window.location.href = "/";
    });
  };

  return (
    <div>
      <form onSubmit={handleSub} className="registration-login-form">
        <label className="label-reg-log" htmlFor="username">
          Login
        </label>

        <input
          className="form-input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="Username"
          id="username"
          name="username"
          autoComplete="off"
        />

        <label htmlFor="password"></label>
        <input
          className="form-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
          id="password"
          name="password"
          autoComplete="off"
        />

        {!isPanding && (
          <button className="form-button" type="submit">
            Login
          </button>
        )}
        {isPanding && (
          <button className="form-button" type="submit" disabled>
            Wait...
          </button>
        )}

        <Link to="/register" className="button-change-reg-log">
          Don't have an account? Sign up
        </Link>
      </form>
    </div>
  );
}
