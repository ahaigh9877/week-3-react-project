import React, { Component } from "react";

class CommentForm extends Component {
  render() {
    return (
      <form>
        <textarea
          type="text"
          name="commentArea"
          placeholder="what do you think of this beer?"
          onChange={this.handleChange}
          value={this.comment}
        />
        <input
          type="submit"
          value="Submit your comment"
          onClick={this.handleSubmit}
        />
      </form>
    );
  }
}

export default CommentForm;
