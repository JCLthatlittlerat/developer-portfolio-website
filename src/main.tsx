import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import "./app/styles/index.css";
import { DataContextProvider } from "./contextProvider/context.tsx";
// this is a portfolio project
createRoot(document.getElementById("root")!).render(
  <DataContextProvider>
    <App />
  </DataContextProvider>,
);
