import React from "react";
import BeerCard from "./BeerCard";
import searchIcon from "../bottle-mag.png";

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
    console.log("filtered beerlist: ", this.state.filterBeers);
    const searchQuery = evt.target.value.toLowerCase();
    const filteredBeers = this.state.beerList.filter(el => {
      const searchName = el.name.toLowerCase();
      const searchDescr = el.description.toLowerCase();
      return (
        searchName.indexOf(searchQuery) !== -1 ||
        searchDescr.indexOf(searchQuery) !== -1
      );
    });
    console.log("filtered beers: ", filteredBeers);
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
    console.log("this.state.beerList", this.state.beerList);

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
