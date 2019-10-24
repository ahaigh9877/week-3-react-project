import React, { Component } from "react";

class CommentForm extends Component {
  render() {
    return (
      <form>
        <textarea
          type="text"
          name="commentArea"
          placeholder="what do you think of this beer?"
          // Allows the input field to be changed.
          onChange={this.handleChange}
          value={this.state.name}
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
