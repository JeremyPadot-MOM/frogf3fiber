import React from "react";
import ReactDOM from "react-dom";
import { Canvas } from "react-three-fiber";

import "./styles.css";

function App() {
  return <Canvas />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);