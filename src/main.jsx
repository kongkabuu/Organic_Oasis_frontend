import React from "react";
// import { GoogleOAuthProvider } from "@react-oauth/google";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    {/* <GoogleOAuthProvider clientId={import.meta.env.GOOGLE_SECRET}> */}
      <App />
    {/* </GoogleOAuthProvider> */}
  </BrowserRouter>
);
