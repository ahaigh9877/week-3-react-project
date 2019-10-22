import React from "react";

export default class Article extends React.Component {
  render() {
    return (
      <section>
        <img
          className="articleImg"
          alt="article-img"
          src={this.props.imageUrl}
        />
        <div className="articleWrapper">
          <h3>{this.props.name}</h3>
          <article>{this.props.description}</article>
        </div>
      </section>
    );
  }
}
