import React, { Component } from "react";
import Comment from "./Comment";

class CommentForm extends Component {
  state = {
    comments: [],
    onecomment: "",
    author: ""
  };

  componentDidMount() {
    fetch("http://localhost:4000/comments")
      .then(response => response.json())
      .then(comments => this.setState({ comments: comments }));
  }

  addComment = (author, text) => {
    const newPost = { author: author, text: text };

    fetch("http://localhost:4000/comments", {
      method: "POST",
      body: JSON.stringify(newPost),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(comment => {
        const comments = [...this.state.comments, comment];
        this.setState({ comments: comments });
      });
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.addComment(this.state.author, this.state.onecomment);
    this.setState({ [event.target.name]: "" });
  };

  render() {
    return (
      <div className="commentsAndFormWrapper">
        <div className="commentsWrapper">
          <h4 className="commentsTitle">Comments</h4>
          {this.state.comments.map(comment => {
            console.log("comment", comment);
            return (
              <Comment
                key={comment.id}
                id={comment.id}
                content={comment.text}
                author={comment.author}
              />
            );
          })}
        </div>
        <form onSubmit={this.handleSubmit}>
          <label>Author: </label>
          <input
            className="inputFieldAuthor"
            name="author"
            value={this.state.author}
            onChange={this.handleChange}
          />
          <label>Comment: </label>
          <input
            className="inputFieldComment"
            type="text"
            name="onecomment"
            placeholder="what do you think of this beer?"
            onChange={this.handleChange}
            value={this.state.onecomment}
          />
          <br></br>
          <input
            className="commentButton"
            type="submit"
            value="Submit your comment"
            onClick={this.handleSubmit}
          />
        </form>
      </div>
    );
  }
}

export default CommentForm;
