import React from "react";
import { Link } from "react-router-dom";
import HeaderComponet from "./HeaderComponet";
import "./header.css";

function Header(props) {
  function IsUserLogin() {
    if (!localStorage.hasOwnProperty("jwt_token")) {
      return (
        <>
          <Link
            to="/login"
            className="login-nav-element btn-light-yellow textblock light-yellow-black-textblock"
          >
            LOG IN
          </Link>
          <Link
            to="/register"
            className="login-nav-element btn-light-yellow textblock light-yellow-black-textblock"
          >
            SIGN UP
          </Link>
        </>
      );
    } else {
      return (
        <div className="login-nav-element btn-light-yellow textblock light-yellow-black-textblock">
          LOG OUT
        </div>
      );
    }
  }
  return (
    <header className="header">
      <Link to="/" className="logo-flex-container">
        <div className="logo textblock blue-yellow-textblock">
          <a>LOGO</a>
        </div>
      </Link>
      <nav>
        <ul className="nav-flex-container">
          <HeaderComponet
            typeOfPage="All ROOMS"
            currentPage={props.currentPage}
            toLink="/"
          />

          <HeaderComponet
            typeOfPage="BOOK ROOMS"
            currentPage={props.currentPage}
            toLink="/bookroom"
          />

          <HeaderComponet
            typeOfPage="ABOUT US"
            currentPage={props.currentPage}
            toLink="/aboutus"
          />

          <HeaderComponet
            typeOfPage="CONTACTS"
            currentPage={props.currentPage}
            toLink="/contacts"
          />
        </ul>
        <ul className="login-signup-flex-container">
          <IsUserLogin />
        </ul>
      </nav>
    </header>
  );
}

export default Header;
