import "./globals.scss";
import React from "react";
import Home from "./Home/page";
import Blog from "./Blogs/page";
import Login from "./login/page";
import Page404 from "./404/page";
import RootLayout from "./layout";
import AboutUs from "./AboutUs/page";
import OurGoals from "./OurGoals/page";
import Services from "./Services/page";
import BlogPost from "./BlogPost/page";
import ReactDOM from "react-dom/client";
import Questions from "./Questions/page";
import OurHistory from "./OurHistory/page";
import WorkWithUs from "./WorkwithUs/page";
import Categories from "./categories/page";
import Application from "./Application/page";
import BuySubscription from "./BuySubscription/page";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import ProfileOne from "./ProfileOne/page";
import ProfileTwo from "./profileTwo/page";

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
      {
        path: "Categories",
        element: <Categories />,
      },
      {
        path: "Blog",
        element: <Blog />,
      },
      {
        path: "BlogPost",
        element: <BlogPost />,
      },
      {
        path: "ProfileOne",
        element: <ProfileOne />,
      },
      {
        path: "ProfileTwo",
        element: <ProfileTwo />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "*",
    element: <Page404 />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
