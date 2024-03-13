import "./globals.scss";
import React from "react";
import RootLayout from "./layout";

import ReactDOM from "react-dom/client";

import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Login from "./login/page";
import Home from "./Home/page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "",
        element: <Navigate to={"login"} replace={true} />,
      },
      {
        path: "Home",
        element: <Home/>,
      },
    ],
  },
  {
    path: "login",
    element: <Login/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
