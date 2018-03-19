import React from "react";
import { render } from "react-dom";
import Grupo from "./components/Grupo.js";
import Login from "./components/Login.js";
import Register from "./components/Register.js";

//Bootstrap
import "bootstrap/dist/css/bootstrap.css";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <Register />
  </div>
);

render(<App />, document.getElementById("root"));
