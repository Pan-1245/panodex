import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
} else {
  // Render a fallback UI directly in the body when root element is missing
  const fallbackMessage = document.createElement("div");
  fallbackMessage.innerHTML =
    "<h1>App could not be loaded. Please try again later.</h1>";
  document.body.appendChild(fallbackMessage);
}
