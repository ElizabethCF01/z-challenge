import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router";
import App from "./App.tsx";
import Context from "./context/Context.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Context>
        <App />
      </Context>
    </BrowserRouter>
  </StrictMode>
);
