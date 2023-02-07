import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CombinationContextProvider } from "./context/combination-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CombinationContextProvider>
      <App />
    </CombinationContextProvider>
  </React.StrictMode>
);
