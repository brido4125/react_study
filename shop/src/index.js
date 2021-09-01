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
    copy[0].quan++;
    return copy;
  } else if (action.type === "감소") {
    let copy = [...state];
    copy[0].quan--;
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
