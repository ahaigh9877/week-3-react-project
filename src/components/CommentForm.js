import React, { Component } from "react";
import Comment from "./Comment";

class CommentForm extends Component {
  state = {
    comments: [{ id: 1, author: "Sasha", text: "I like it!" }],
    onecomment: "",
    author: ""
  };

  addComment = (author, text) => {
    const id = Math.round(Math.random() * 100000000);
    const comments = [
      ...this.state.comments,
      { id: id, author: author, text: text }
    ];
    this.setState({ comments: comments });
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.addComment(this.state.author, this.state.onecomment);
    console.log("SUBMITTING", this.state);
    this.setState({ [event.target.name]: "" });
  };

  render() {
    return (
      <div>
        <div>
          <h4>Comments</h4>
          {this.state.comments.map(comment => {
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
          <label>Author</label>
          <input
            name="author"
            value={this.state.author}
            onChange={this.handleChange}
          />
          <label>Comment</label>
          <textarea
            type="text"
            name="onecomment"
            placeholder="what do you think of this beer?"
            onChange={this.handleChange}
            value={this.state.onecomment}
          />
          <input
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