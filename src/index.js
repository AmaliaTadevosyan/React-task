import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import userReducer from "./reducer";
import App from "./App";

const middelware = [thunk];
const store = createStore(userReducer, applyMiddleware(...middelware));

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
};

ReactDOM.render(<AppWrapper />, document.getElementById("root"));
