import React from "react";
import { Link } from "react-router-dom";

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

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      comments: [...this.state.comments, this.state.comment],
      comment: ""
    });
    console.log("comments array: ", this.state);
    //this.setState({ comment: "" });
    //this.setState(this.state.comment);
  };

  handleChange = event => {
    //this.setState({ comment: event.target.value });
    this.setState({ comment: event.target.value });
    console.log("this.state.comment:, this.state.comment");
    console.log("comments array: ", this.state);
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
          <h3>
            <Link to={`/beer-page/${this.props.id}`}>{this.props.name}</Link>
          </h3>

          <div>
            <button onClick={this.handlePlusClick}>+</button>
            <span>Likes: {this.props.numLikes}</span>
            <button onClick={this.handleMinusClick}>-</button>
          </div>

          <article>{this.props.description}</article>

          <article>{this.state.comments}</article>
        </div>
      </li>
    );
  }
}
