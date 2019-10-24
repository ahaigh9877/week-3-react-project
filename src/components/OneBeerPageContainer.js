import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import CommentForm from "./CommentForm";
import BeerCard from "./BeerCard";

export default class OneBeerPageContainer extends React.Component {
  state = {
    selectedBeer: null
  };

  componentDidMount() {
    console.log("props: ", this.props);
    fetch(`https://api.punkapi.com/v2/beers/${this.props.match.params.beerId}`)
      .then(res => res.json())
      .then(data => {
        console.log("data: ", data[0].name);
        this.setState({
          selectedBeer: data[0]
        });
        console.log(this.state.selectedBeer);
      })
      .catch(console.error);
  }

  render() {
    if (this.state.selectedBeer) {
      console.log("this.state in render: ", this.state.selectedBeer);
    }
    return (
      <div>
        {/* <Header></Header> */}
        <main>
          <div>
            {/* <li>
              <img
                className="articleImg"
                alt="article-img"
                src={this.props.image_url}
              />
              <div className="articleWrapper">
                <h3>NAME GOES HERE{this.props.name} </h3>
                <article>{this.props.description}</article>
              </div>
            </li> */}
            {this.state.selectedBeer === null && "Loading..."}
            {this.state.selectedBeer !== null && (
              <BeerCard
                key={this.state.selectedBeer.id}
                id={this.state.selectedBeer.id}
                name={this.state.selectedBeer.name}
                description={this.state.selectedBeer.description}
                image_url={this.state.selectedBeer.img}
              />
            )}
            )}
          </div>
          {/* <CommentForm /> */}
        </main>
        <Footer></Footer>
      </div>
    );
  }
}
