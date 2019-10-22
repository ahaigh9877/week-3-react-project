import React from "react";

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
          <h3>{this.props.name}</h3>
          <article>{this.props.description}</article>
        </div>
      </li>
    );
  }
}
