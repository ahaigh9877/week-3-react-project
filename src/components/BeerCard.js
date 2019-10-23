import React from "react";

export default class BeerCard extends React.Component {
  state = {
    // numDisikes: Math.floor(Math.random() * 10)
  };

  handlePlusClick = () => {
    console.log("click", this.props.id);
    return this.props.incrementScore(this.props.id);
  };

  handleMinusClick = () => {
    return this.props.decrementScore(this.props.id);
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
            <button onClick={this.handlePlusClick}>+</button>
            <span>Likes: {this.props.numLikes}</span>
            <button onClick={this.handleMinusClick}>-</button>
          </div>
          <article>{this.props.description}</article>
        </div>
      </li>
    );
  }
}
