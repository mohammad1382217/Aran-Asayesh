import React from "react";
import logo from "./assets/logo-orginal.svg";
import { Outlet, ScrollRestoration } from "react-router-dom";

const RootLayout: React.FC = () => {
  return (
    <section className="container min-h-screen">
      <ScrollRestoration />
      <header className="sticky top-0 left-0 right-0 z-20 w-full flex bg-white lg:transition-[margin-right] lg:duration-300 lg:ease-in-out">
        <nav className="max-w-lg h-16 lg:h-14 flex flex-[1_0_0] flex-wrap lg:px-3 items-center justify-between px-10 py-2 lg:py-4">
          <div className="container flex items-center justify-center gap-2">
            <img src={logo} alt="AranAsayesh" />
            <span>آران آسایش</span>
          </div>
        </nav>
      </header>

      <main
        className={`min-h-screen lg:transition-[margin-right] lg:duration-300 lg:ease-in-out`}
      >
        <Outlet />
      </main>

      <footer className="container flex justify-between lg:transition-[margin-right] lg:duration-300 lg:ease-in-out"></footer>
    </section>
  );
};

export default RootLayout;
