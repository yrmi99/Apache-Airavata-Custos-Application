import React from "react";
import ReactDOMClient from "react-dom/client";
import { ClientLoginPage } from "./screens/ClientLoginPage";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<ClientLoginPage />);
