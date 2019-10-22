import React from "react";
import { logo } from "../images/brewdog-logo.png";

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <img className="logoImg" alt="logo" src={logo}></img>
        <a href="#">About Us</a>
        <a href="#">Support</a>
        <a href="#">ITEM3</a>
        <a href="#">Contact</a>
      </header>
    );
  }
}
