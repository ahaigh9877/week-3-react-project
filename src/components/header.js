import React from "react";

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <img className="logoImg" alt="logo"></img>
        <a href="#">About Us</a>
        <a href="#">Support</a>
        <a href="#">ITEM3</a>
        <a href="#">Contact</a>
      </header>
    );
  }
}
