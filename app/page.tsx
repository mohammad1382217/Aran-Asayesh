import "./globals.scss";
import React from "react";
import Home from "./Home/page";
import Login from "./login/page";
import RootLayout from "./layout";
import ReactDOM from "react-dom/client";
import Questions from "./Questions/page";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

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
        element: <Home />,
      },
      {
        path: "Questions",
        element: <Questions />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
