import React from "react";

export default class BeerCard extends React.Component {
  state = {
    numLikes: Math.floor(Math.random() * 10)
    // numDisikes: Math.floor(Math.random() * 10)
  };

  handlePlusClick = () => {
    this.setState({
      numLikes: this.state.numLikes + 1
    });
  };

  handleMinusClick = () => {
    this.setState({
      numLikes: this.state.numLikes - 1
    });
  };

  render() {
    return (
      <li>
        <img
          className="articleImg"
          alt="article-img"
          src={this.props.image_url}
        />
        <div className="articleWrapper">
          <div>
            <h3>{this.props.name}</h3>
            <span>{this.state.numLikes}</span>
            <button onClick={this.handlePlusClick}>+</button>
            <span>{this.state.numDisikes}</span>
            <button onClick={this.handleMinusClick}>-</button>
          </div>
          <article>{this.props.description}</article>
        </div>
      </li>
    );
  }
}
