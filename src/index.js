import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { Reset } from "styled-reset";
import { Provider } from "react-redux";
import store from "./redux/config/configStore";
import App from "./App";
import "./index.css";

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <App />
        <Reset />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
