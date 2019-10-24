import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import MainContent from "./components/MainContent";
import OneBeerPageContainer from "./components/OneBeerPageContainer";

function App() {
  return (
    <div className="wrapper">
      <Route exact path="/" component={MainContent} />
      <Route exact path="/beer-page/:beerId" component={OneBeerPageContainer} />
    </div>
  );
}

export default App;
