import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import React from "react";
import ReactGA from "react-ga";

ReactGA.initialize("G-Z6ZYW4WQTR"); // Replace with your tracking ID
ReactGA.pageview(window.location.pathname + window.location.search);
ReactDOM.render(<App />, document.querySelector("#root"));
