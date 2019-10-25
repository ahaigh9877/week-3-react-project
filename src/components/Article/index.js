import React from "react";
import BeerCard from "../BeerCard";
import "./Article.css";

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
            id: item.id,
            name: item.name,
            description: item.description,
            img: item.image_url,
            numLikes: Math.floor(Math.random() * 10)
          };
        });
        this.setBeers(beerData);
      })
      .catch(console.error);
  }
  setBeers(beers) {
    this.setState({
      filteredBeer: beers,
      beerList: beers
    });
  }
  filterBeers(value) {
    this.setState({
      filteredBeer: value
    });
  }
  handleSearch = evt => {
    const searchQuery = evt.target.value.toLowerCase();
    const filteredBeers = this.state.beerList.filter(beer => {
      const searchName = beer.name.toLowerCase();
      const searchDescr = beer.description.toLowerCase();
      return (
        searchName.indexOf(searchQuery) !== -1 ||
        searchDescr.indexOf(searchQuery) !== -1
      );
    });
    return this.filterBeers(filteredBeers);
  };
  incrementScoreOfBeer = id => {
    const updatedBeers = this.state.filteredBeer.map(beer => {
      if (beer.id === id) {
        return { ...beer, numLikes: beer.numLikes + 1 };
      } else {
        return beer;
      }
    });
    this.setState({ filteredBeer: updatedBeers });
  };

  decrementScoreOfBeer = id => {
    const updatedBeers = this.state.filteredBeer.map(beer => {
      if (beer.id === id) {
        return { ...beer, numLikes: beer.numLikes - 1 };
      } else {
        return beer;
      }
    });
    this.setState({ filteredBeer: updatedBeers });
  };

  sortBeer = array => {
    const array_copy = [...array];
    return array_copy.sort((a, b) => b.numLikes - a.numLikes);
  };

  render() {
    return (
      <div>
        <p className="textBySearch">Start typing to refine the list...</p>
        <input
          type="text"
          className="searchField"
          onChange={this.handleSearch}
          alt="magnifying-glass"
        />
        <ul className="beer-list">
          {this.state.filteredBeer === null && "Loading..."}
          {this.state.filteredBeer !== null &&
            this.sortBeer(this.state.filteredBeer).map(beer => {
              return (
                <BeerCard
                  key={beer.id}
                  id={beer.id}
                  name={beer.name}
                  description={beer.description}
                  image_url={beer.img}
                  numLikes={beer.numLikes}
                  incrementScore={this.incrementScoreOfBeer}
                  decrementScore={this.decrementScoreOfBeer}
                />
              );
            })}
        </ul>
      </div>
    );
  }
}
