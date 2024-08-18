// routes.js
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import BotSpecs from "./pages/BotSpecs";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
             path: "/",
             element: <Home />,
      },
      {
        path: "/bot/:id",
        element: <BotSpecs />,
      },
    ],
  },
]);

export default router;
