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
        const beerData = data.map(item => ({
          id: item.id,
          name: item.name,
          description: item.description,
          img: item.image_url,
          numLikes: Math.floor(Math.random() * 10)
        }));

        console.log("beerData in compDidMount: ", beerData, typeof beerData);
        //console.log(beerData[4]);

        // //this.updateBeers(beerData);
        this.setState({
          beerList: beerData
        });
        console.log("this.state in comp: ", this.state);
      })
      .catch(console.error);
  }

  updateBeers(beerData) {
    console.log("beerData in updateBeers: ", beerData, typeof beerData);
    this.setState({
      beerList: beerData
    });
  }

  incrementScoreOfBeer = id => {
    const updatedBeers = this.state.beerList.map(beer => {
      if (beer.id === id) {
        return { ...beer, numLikes: beer.numLikes + 1 };
      } else {
        return beer;
      }
    });
    this.setState({ beerList: updatedBeers });
  };

  decrementScoreOfBeer = id => {
    const updatedBeers = this.state.beerList.map(beer => {
      if (beer.id === id) {
        return { ...beer, numLikes: beer.numLikes - 1 };
      } else {
        return beer;
      }
    });
    this.setState({ beerList: updatedBeers });
  };

  // Tried do do this inside render but it didn't work (maybe cos JSX) so it's a function here instead.
  sortBeer = array => {
    console.log("what is 'array'? ", typeof array);
    console.log("array passed to sortBeer function: ", array);
    //const array_copy = array.slice();
    //console.log("array.beerData: ", array.beerData);
    //console.log(array[5]);
    const array_copy = [...array];
    console.log("'array_copy' in sortBeer: ", array_copy);
    return array_copy.sort((a, b) => b.numLikes - a.numLikes);
  };

  render() {
    console.log("this.state.beerList", this.state);

    return (
      <ul className="beer-list">
        {this.state.beerList === null && "Loading..."}
        {this.state.beerList !== null &&
          this.sortBeer(this.state.beerList).map(beer => {
            return (
              //console.log("this.state.beerList", this.state.beerList),
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
    );
  }
}
