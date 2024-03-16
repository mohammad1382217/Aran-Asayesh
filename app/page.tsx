import "./globals.scss";
import React from "react";
import Home from "./Home/page";
import Login from "./login/page";
import RootLayout from "./layout";
import AboutUs from "./AboutUs/page";
import OurGoals from "./OurGoals/page";
import Services from "./Services/page";
import ReactDOM from "react-dom/client";
import Questions from "./Questions/page";
import Application from "./Application/page";
import BuySubscription from "./BuySubscription/page";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import OurHistory from "./OurHistory/page";
import WorkWithUs from "./WorkwithUs/page";

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
      {
        path: "BuySubscription",
        element: <BuySubscription />,
      },
      {
        path: "AboutUs",
        element: <AboutUs />,
      },
      {
        path: "OurGoals",
        element: <OurGoals />,
      },
      {
        path: "Services",
        element: <Services />,
      },
      {
        path: "Application",
        element: <Application />,
      },
      {
        path: "OurHistory",
        element: <OurHistory />,
      },
      {
        path: "WorkWithUs",
        element: <WorkWithUs />,
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
