import React from "react";
import { Link } from "react-router-dom";
import upVote from "../upArrowBeer.png";
import downVote from "../downArrowBeer.png";

export default class BeerCard extends React.Component {
  state = {
    comment: "",
    comments: []
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
      <li className="beerListItem">
        <img
          className="articleImg"
          alt="article-img"
          src={this.props.image_url}
        />
        <div className="articleWrapper">
          <h3>
            <Link to={`/beer-page/${this.props.id}`}>{this.props.name}</Link>
          </h3>

          <div>
            <button onClick={this.handlePlusClick}>
              <img src={upVote} className="upVote"></img>
            </button>
            <span>Likes: {this.props.numLikes}</span>
            <button onClick={this.handleMinusClick}>
              <img src={downVote} className="downVote"></img>
            </button>
          </div>

          <article>{this.props.description}</article>
        </div>
      </li>
    );
  }
}
