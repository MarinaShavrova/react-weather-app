import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import Context from "./context.js";

function Main() {
  const clickOnButton = (value) => {
    console.log(value);
    let element = document.querySelector("#navbarToggleExternalContent");
    if (value === "show") {
      element.classList.add("show");
    } else if (value === "remove") {
      element.classList.remove("show");
    }
  };

  return (
    <Context.Provider value={{ clickOnButton }}>
      <App />
    </Context.Provider>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);
