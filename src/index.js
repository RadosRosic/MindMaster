import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CombinationContextProvider } from "./context/combination-context";
import { ModalContextProvider } from "./context/modal-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CombinationContextProvider>
      <ModalContextProvider>
        <App />
      </ModalContextProvider>
    </CombinationContextProvider>
  </React.StrictMode>
);
