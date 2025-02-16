import React from "react";
import ReactDOMClient from "react-dom/client";
import { App } from "./App";
import { Buffer } from "buffer";

window.Buffer = Buffer;

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<App />);
