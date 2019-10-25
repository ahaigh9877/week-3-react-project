import React, { Component } from "react";

class Comment extends Component {
  render() {
    return (
      <div className="oneComment">
        <h4 className="authorComment">{this.props.author} says...</h4>
        <p className="commentText">"{this.props.content}"</p>
      </div>
    );
  }
}

export default Comment;
