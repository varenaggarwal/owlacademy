import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { DataProvider } from "./contexts/data-context";
import setupMockServer from "./api/mock-server";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./contexts/auth-context";

setupMockServer();

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <DataProvider>
      <Router>
        <AuthProvider>
          <App />
        </AuthProvider>
      </Router>
    </DataProvider>
  </StrictMode>,
  rootElement
);
