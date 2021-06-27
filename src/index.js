import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import App from "./App";
import Asr from "./AsyncReact";

//ReactDOM.render(<App authorized={false} />, document.getElementById("root"));
ReactDOM.render(
  <div>
    <App />
    <Asr login="soumya528" />
  </div>,
  document.getElementById("root")
);
