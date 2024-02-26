import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "sonner";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { App } from "./app";
import { Notes } from "./pages";
import { PAGE_ECC } from "./constants";

import "./index.css";
import { Header } from "./components";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: PAGE_ECC,
    element: <Notes />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Header />
    <RouterProvider router={router} />
    <Toaster richColors />
  </React.StrictMode>
);
