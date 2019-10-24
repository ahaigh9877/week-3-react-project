import React from "react";
import BeerCard from "./BeerCard";

export default class Article extends React.Component {
  state = {
    beerList: null,
    filteredBeer: null
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
        this.filterBeers(beerData);
      })
      .catch(console.error);
  }

  updateBeers(value) {
    this.setState({
      beerList: value
    });
  }

  filterBeers(value) {
    this.setState({
      filteredBeer: value
    });
  }

  handleSearch = evt => {
    console.log("event", evt.target.value);
    const searchQuery = evt.target.value.toLowerCase();
    const filteredBeers = this.state.beerList.filter(el => {
      const searchValue = el.name.toLowerCase();
      return searchValue.indexOf(searchQuery) !== -1;
    });
    return this.filterBeers(filteredBeers);
  };

  render() {
    console.log("this.state.beerList", this.state.beerList);
    return (
      <div>
        <input
          type="text"
          className="serch-field"
          onChange={this.handleSearch}
        />
        <ul className="beer-list">
          {this.state.filteredBeer === null && "Loading..."}
          {this.state.filteredBeer !== null &&
            this.state.filteredBeer.map(beer => {
              return (
                <BeerCard
                  name={beer.name}
                  description={beer.description}
                  image_url={beer.img}
                />
              );
            })}
        </ul>
      </div>
    );
  }
}
