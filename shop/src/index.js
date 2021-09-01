import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import { createStore } from "redux";

let defaultState = [
  { id: 0, name: "canvas", quan: 22 },
  { id: 1, name: "NB990", quan: 34 },
];

function reducer(state = defaultState, action) {
  if (action.type === "증가") {
    let copy = [...state];
    copy[action.index].quan++;
    return copy;
  } else if (action.type === "감소") {
    let copy = [...state];
    if (copy[action.index].quan > 0) {
      copy[action.index].quan--;
    } else {
      alert("수랑은 0보다 작을 수 없어요");
    }
    return copy;
  }

  return state;
}

let store = createStore(reducer);

//BrowserRouter vs HashRouter => #기호가 들어가서 서버에서 URL 해시를 읽을 수 없다
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
