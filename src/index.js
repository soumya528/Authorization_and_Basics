import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import App from "./App";
import Asr from "./AsyncReact";
import AR from "./AppForRouter";
import { BrowserRouter as Router } from "react-router-dom";
//import "history";

//ReactDOM.render(<App authorized={false} />, document.getElementById("root"));
/*ReactDOM.render(
  <>
    <div>
      <App />
      <Asr login="random" />
    </div>
  </>,
  document.getElementById("root")
);
*/

//For router
ReactDOM.render(
  <Router>
    <AR />
  </Router>,
  document.getElementById("root")
);
