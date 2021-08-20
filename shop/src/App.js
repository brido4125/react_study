/* eslint-disable jsx-a11y/alt-text */
import "./App.css";
import React, { useState } from "react";
import { Jumbotron } from "./component/Jumbotron";
import Data from "./data";
import Navigation from "./component/Navigation";
import { Item } from "./component/Item";
import { Route, Switch } from "react-router-dom";
import { Detail } from "./component/Detail";

function App() {
  let [shoes, setShoes] = useState(Data);
  return (
    <div className="App">
      <Navigation></Navigation>
      <Route exact path="/">
        <Jumbotron></Jumbotron>
        <div className="container">
          <div className="row">
            <Item shoes={shoes}></Item>
          </div>
        </div>
      </Route>
      <Route path="/detail/:id">
        <Detail shoes={shoes}></Detail>
      </Route>
      <Route path="/:id">
        <div>something</div>
      </Route>
    </div>
  );
}

export default App;
