import React from "react";
import logo from "../brewdog-logo.png";

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <img className="logoImg" alt="logo" src={logo}></img>
        <a className="topLink" href="#">
          About Us
        </a>
        <a className="topLink" href="#">
          Support
        </a>
        <a className="topLink" href="#">
          ITEM3
        </a>
        <a className="topLink" href="#">
          Contact
        </a>
      </header>
    );
  }
}
