import React from "react";
import Article from "./article";

export default class Content extends React.Component {
  render() {
    return (
      <main>
        <h1>BEER</h1>
        <Article headline="" copy=""></Article>
      </main>
    );
  }
}
