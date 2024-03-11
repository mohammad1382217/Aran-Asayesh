import React from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";

const RootLayout: React.FC = () => {
  return (
    <section className="container min-h-screen">
      <ScrollRestoration />
      <Outlet />
    </section>
  );
};

export default RootLayout;
