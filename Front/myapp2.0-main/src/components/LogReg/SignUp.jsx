import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./logReg.css";

export default function Registration(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isPanding, setIsPending] = useState(false);

  const admin = { username, password };

  const handleSub = (e) => {
    console.log(admin);
    e.preventDefault();

    setIsPending(true);

    fetch("http://localhost:8080/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000/",
      },
      body: JSON.stringify(admin),
    }).then(() => {
      console.log("response");
      setIsPending(false);
    });
  };
  return (
    <div>
      <form onSubmit={handleSub} className="registration-login-form">
        <label className="label-reg-log" htmlFor="username">
          Registration
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
            Sign up
          </button>
        )}
        {isPanding && (
          <button className="form-button" type="submit" disabled>
            Wait...
          </button>
        )}
        <Link to="/login" className="button-change-reg-log">
          Already have an account? Login
        </Link>
      </form>
    </div>
  );
}
