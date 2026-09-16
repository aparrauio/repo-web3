/**
 * main.tsx
 * --------
 * Punto de entrada de React. Monta <App /> dentro de #root (definido en
 * index.html) e importa los estilos globales de Tailwind.
 */

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
