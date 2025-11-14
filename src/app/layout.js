"use client";
import React from "react";
import { Provider } from "react-redux";
import store from "../redux/store";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";

export default function App({ children }) {
  return (
    <html>
      <body>
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
}
