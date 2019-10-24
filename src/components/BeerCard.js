import React from "react";
import { Link } from "react-router-dom";

export default class BeerCard extends React.Component {
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
            <Link to={`/beer-page/${this.props.name}`}>{this.props.name}</Link>
          </h3>
          <article>{this.props.description}</article>
        </div>
      </li>
    );
  }
}
