/* eslint-disable jsx-a11y/alt-text */
import "./App.css";
import React, { useState } from "react";
import Axios from "axios";
import { Jumbotron } from "./component/Jumbotron";
import Data from "./data";
import Navigation from "./component/Navigation";
import { Item } from "./component/Item";
import { Route } from "react-router-dom";
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
        <button
          className="btn btn-primary"
          onClick={() => {
            Axios.get("https://codingapple1.github.io/shop/data2.json")
              .then((res) => {
                setShoes([...shoes, ...res.data]);
                console.log(shoes);
              })
              .catch(() => {
                console.log("axious 실패");
              });
          }}
        >
          더보기
        </button>
      </Route>
      <Route path="/detail/:id">
        <Detail shoes={shoes}></Detail>
      </Route>
    </div>
  );
}

export default App;
