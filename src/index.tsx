import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import MyApp from "./MyApp";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<MyApp />);
