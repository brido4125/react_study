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
import Cart from "./component/Cart";

export let stockContext = React.createContext();

function App() {
  let [shoes, setShoes] = useState(Data);
  let [stock, setStock] = useState([9, 20, 22, 32]);

  return (
    <div className="App">
      <Navigation></Navigation>
      <Route exact path="/">
        <Jumbotron></Jumbotron>
        <div className="container">
          <stockContext.Provider value={stock}>
            <div className="row">
              <Item shoes={shoes}></Item>
            </div>
          </stockContext.Provider>
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
      <Route exact path="/detail/:id">
        <Detail shoes={shoes} stock={stock} setStock={setStock}></Detail>
      </Route>
      <Route path="/cart">
        <Cart> </Cart>
      </Route>
    </div>
  );
}

export default App;
