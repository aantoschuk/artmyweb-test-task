// import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";

import App from "./pages/App";

import { store } from "./redux/store";

import "./index.css";

/**
 * As Strinct re-render components and effects
 * it's screw infinity scroll, update and state ( currentPage / offset ) not incrementally
 */
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  // </React.StrictMode>
);
