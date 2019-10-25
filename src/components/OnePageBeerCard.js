import React from "react";
import { Link } from "react-router-dom";

export default class OnePageBeerCard extends React.Component {
  render() {
    return (
      <div className="oneBeerWrapper">
        <img
          className="oneBeerImg"
          alt="article-img"
          src={this.props.image_url}
        />
        <div className="articleWrapper">
          <h3 className="oneBeerHead">{this.props.name}</h3>
          <p>{this.props.abv}%</p>
          <article>{this.props.description}</article>
          <p>Drink this beer with:</p>
          <ul>
            {this.props.food_pairing.map(food => (
              <li className="foodList">{food}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
