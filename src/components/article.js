import React from "react";
import BeerCard from "./BeerCard";

export default class Article extends React.Component {
  state = {
    beerList: null
  };

  componentDidMount() {
    fetch("https://api.punkapi.com/v2/beers")
      .then(res => res.json())
      .then(data => {
        const beerData = data.map(item => {
          return {
            name: item.name,
            description: item.description,
            img: item.image_url
          };
        });
        this.updateBeers(beerData);
      })
      .catch(console.error);
  }

  updateBeers(beerData) {
    this.setState({
      beerList: beerData
    });
  }

  render() {
    console.log("this.state.beerList", this.state.beerList);
    return (
      <ul className="beer-list">
        {this.state.beerList === null && "Loading..."}
        {this.state.beerList !== null &&
          this.state.beerList.map(beer => {
            return (
              <BeerCard
                name={beer.name}
                description={beer.description}
                image_url={beer.img}
              />
            );
          })}
      </ul>
    );
  }
}
