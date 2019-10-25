import React, { Component } from "react";
import Comment from "./Comment";

class CommentForm extends Component {
  state = {
    comments: [{ id: 1, text: "I like it!" }],
    onecomment: ""
  };

  addComment = text => {
    const id = Math.round(Math.random() * 100000000);
    const comments = [...this.state.comments, { id: id, text: text }];
    this.setState({ comments: comments });
  };

  handleChange = event => {
    this.setState({ onecomment: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.addComment(this.state.onecomment);
    console.log("SUBMITTING", this.state);
    this.setState({ onecomment: "" });
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
              />
            );
          })}
        </div>
        <form onSubmit={this.handleSubmit}>
          <textarea
            type="text"
            name="commentArea"
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
