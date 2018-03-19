import React from "react";
import { render } from "react-dom";
import Grupo from "./components/Grupo.js";
import Login from "./components/Login.js";
import Register from "./components/Register.js";

//Style and style Bootstrap
import "./style/style.css";
import "bootstrap/dist/css/bootstrap.css";

const App = () => (
  <div>
    <Register />
  </div>
);

render(<App />, document.getElementById("root"));
