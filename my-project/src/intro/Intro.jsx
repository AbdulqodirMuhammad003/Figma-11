import React from "react";
import "./intro.css";
import Logo from "../images/Logo.svg";

function Intro() {
  return (
    <div>
      <header className="header">
        <div className="container">
          <a href="#">
            <img src={Logo} alt="" className="logo-site" />
          </a>
          <nav className="navigation">
            <ul className="navbar-list">
              <li className="navbar-items">
                <a href="#">Products</a>
              </li>
              <li className="navbar-items">
                <a href="#">Developers</a>{" "}
              </li>
              <li className="navbar-items">
                <a href="#">Company</a>
              </li>
              <li className="navbar-items">
                <a href="#">Pricing</a>
              </li>
            </ul>
          </nav>
          <div className="btns-header">
            <button className="me-6 btn-signin"> Support</button>
            <button className=" btn-signin py-[12px] px-[40px] bg-yellow-400 text-white rounded-[50px] hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
              Sign in
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Intro;
