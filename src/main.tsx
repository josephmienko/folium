import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ThemeProvider from "./components/Brand/ThemeProvider";
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
        <BrowserRouter>

    <ThemeProvider>
      <App />
    </ThemeProvider>
    </BrowserRouter>

  </React.StrictMode>
);
