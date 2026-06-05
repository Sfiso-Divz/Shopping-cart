import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import GlobalShoppingContext from "./context/Context.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <GlobalShoppingContext>
      <App />
    </GlobalShoppingContext>
  </BrowserRouter>,
);
