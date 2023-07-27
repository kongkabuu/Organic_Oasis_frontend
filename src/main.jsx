import React from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="30603288495-3aec4f7gv49rdc0a2l9plglrrgjf38vh.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>
);
