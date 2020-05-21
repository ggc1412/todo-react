import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import { createStore } from "redux";
import reducer from "./modules";
import { Provider } from "react-redux";
// redux store 생성, provider 연결
// 스토어에 리듀서 연결

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
