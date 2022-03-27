import ReactDOM from "react-dom";
import React from "react";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import postSlice from "./features/postSlice";

const store = configureStore({
  reducer: {
    post: postSlice,
  },
});
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
