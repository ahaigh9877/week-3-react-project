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
          <div className="nameAndLikesWrapper">
            <h3>
              <Link to={`/beer-page/${this.props.id}`}>{this.props.name}</Link>
            </h3>
            <div className="likesWrapper">
              <button onClick={this.handlePlusClick}>
                <img src={upVote} className="voteImg"></img>
              </button>

              <span className="likesText">Likes: {this.props.numLikes}</span>

              <button onClick={this.handleMinusClick}>
                <img src={downVote} className="voteImg"></img>
              </button>
            </div>
          </div>

          <article>{this.props.description}</article>
        </div>
      </li>
    );
  }
}
