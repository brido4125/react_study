import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";

/*
  리덕스로 여러개 데이터 만드는 법
*/
let alertDefaultState = true;
function alertReducer(state = alertDefaultState, action) {
  if (action.type === false) {
    let copy = state;
    copy = false;
    return copy;
  } else {
    return state;
  }
}

let defaultState = [
  { id: 22, name: "canvas", quan: 22 },
  { id: 21, name: "NB990", quan: 34 },
];
function reducer(state = defaultState, action) {
  if (action.type === "장바구니추가") {
    let foundIndex = state.findIndex((a) => {
      return a.id === action.payload.id;
    });
    if (foundIndex >= 0) {
      let copy = [...state];
      copy[foundIndex].quan++;
      return copy;
    } else {
      let copy = [...state];
      copy.push(action.payload);
      return copy;
    }
  } else if (action.type === "증가") {
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

let store = createStore(combineReducers({ reducer, alertReducer }));

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
