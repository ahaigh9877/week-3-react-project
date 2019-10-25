import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import CommentForm from "./CommentForm";
import OnePageBeerCard from "./OnePageBeerCard";

export default class OneBeerPageContainer extends React.Component {
  state = {
    selectedBeer: null,
    comment: "",
    comments: []
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
      })
      .catch(console.error);
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log("HANDLE SUBMIT");
    this.setState({
      comments: [...this.state.comments, this.state.comment],
      comment: ""
    });

    //this.setState({ comment: "" });
    //this.setState(this.state.comment);
  };

  handleChange = event => {
    console.log("EVENT: ", event);
    this.setState({ comment: event.target.value });
    console.log("comments array: ", this.state);
  };

  render() {
    if (this.state.selectedBeer) {
      console.log("this.state in render: ", this.state);
    }
    return (
      <div>
        {/* <Header></Header> */}
        {/* <main> */}
        {/* <div className="oneBeerBackground"> */}
        {this.state.selectedBeer === null && "Loading..."}
        {this.state.selectedBeer !== null && (
          // <OnePageBeerCard
          //   key={this.state.selectedBeer.id}
          //   id={this.state.selectedBeer.id}
          //   name={this.state.selectedBeer.name}
          //   abv={this.state.selectedBeer.abv}
          //   description={this.state.selectedBeer.description}
          //   food_pairing={this.state.selectedBeer.food_pairing}
          //   image_url={this.state.selectedBeer.image_url}
          // />
          <OnePageBeerCard
            key={this.state.selectedBeer.id}
            {...this.state.selectedBeer}
          />
        )}
        <CommentForm
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          comment={this.state.comment}
          extraprop="extraprop"
        />
        {this.state.comments}
        {/* </div> */}
        {/* </main> */}
        <Footer></Footer>
      </div>
    );
  }
}
