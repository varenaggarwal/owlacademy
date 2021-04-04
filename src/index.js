import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { DataProvider } from "./context/data-context";
import setupMockServer from "./api/mock-server";

setupMockServer();

import { BrowserRouter as Router } from "react-router-dom";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <DataProvider>
      <Router>
        <App />
      </Router>
    </DataProvider>
  </StrictMode>,
  rootElement
);
