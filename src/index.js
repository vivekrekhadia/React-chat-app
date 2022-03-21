import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./Redux/Store";
import ActiveContext from "./Context/ActiveContext";

ReactDOM.render(
  <React.StrictMode>
    <ActiveContext>
      <Provider store={store}>
        <App />
      </Provider>
    </ActiveContext>
  </React.StrictMode>,
  document.getElementById("root")
);
