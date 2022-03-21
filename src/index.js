import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import ActiveContext from "./Context/ActiveContext";

ReactDOM.render(
  <React.StrictMode>
    <ActiveContext>
      <App />
    </ActiveContext>
  </React.StrictMode>,
  document.getElementById("root")
);
