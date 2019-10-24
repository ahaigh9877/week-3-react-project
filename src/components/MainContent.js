import React from "react";
import Article from "./Article";
import Header from "./Header";
import Footer from "./Footer";

export default class Content extends React.Component {
  render() {
    return (
      <div>
        <Header></Header>
        <main>
          <h1>BEER</h1>
          <Article headline="" copy=""></Article>
        </main>
        <Footer></Footer>
      </div>
    );
  }
}
