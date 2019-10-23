import React from "react";

import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Content from "./components/content";

function App() {
  return (
    <div className="wrapper">
      <Header></Header>
      <Content></Content>

      <Footer></Footer>
    </div>
  );
}

export default App;
