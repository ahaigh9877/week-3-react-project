import React from "react";
import Article from "./article";
import Header from "./header";
import Footer from "./footer";

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
