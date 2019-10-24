import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default class OneBeerPageContainer extends React.Component {
  state = {
    selectedBeer: null
  };

  componentDidMount() {
    fetch("https://api.punkapi.com/v2/beers")
      .then(res => res.json())
      .then(data => {
        const selectedBeer = data.find(item => item.id === "id");
        this.setState({
          selectedBeer: selectedBeer
        });
      })
      .catch(console.error);
  }

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
