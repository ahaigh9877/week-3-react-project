import React from "react";

export default class Article extends React.Component {
  render() {
    return (
      <section>
        <img className="articleImg"></img>
        <div className="articleWrapper">
          <h3>{this.props.headline}</h3>
          <article>{this.props.copy}</article>
        </div>
      </section>
    );
  }
}
