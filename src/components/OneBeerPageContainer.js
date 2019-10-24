import React from "react";
import Header from "./header";
import Footer from "./footer";

export default class OneBeerPageContainer extends React.Component {
  render() {
    return (
      <div>
        <Header></Header>
        <main>
          <div>
            <li>
              <img
                className="articleImg"
                alt="article-img"
                src={this.props.image_url}
              />
              <div className="articleWrapper">
                <h3>{this.props.name} </h3>
                <article>{this.props.description}</article>
              </div>
            </li>
          </div>
        </main>
        <Footer></Footer>
      </div>
    );
  }
}
