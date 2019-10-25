import React, { Component } from "react";

class Comment extends Component {
  render() {
    return (
      <div>
        <h4>{this.props.author}</h4>
        <p>{this.props.content}</p>
      </div>
    );
  }
}

export default Comment;
