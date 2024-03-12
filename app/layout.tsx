import React from "react";
import logo from "./assets/logo-orginal.svg";
import { FaGift, FaDownload } from "react-icons/fa";
import { Outlet, ScrollRestoration } from "react-router-dom";

const RootLayout: React.FC = () => {
  return (
    <>
      <ScrollRestoration />
      <section className="container min-h-screen mx-auto">
        <header className="container flex bg-white">
          <nav className="flex flex-[1_0_0] flex-wrap lg:px-3 items-center justify-between px-10 py-2 lg:py-4">
            <div className=" flex items-center justify-center gap-2">
              <img width={79} height={102} src={logo} alt="AranAsayesh" />
              <span className="text-3xl font-semibold text-[#8754AF]">
                آران آسایش
              </span>
            </div>
            <div className="flex items-center justify-center gap-4">
              <div className="flex items-center justify-center gap-2">
                <span className="text-lg font-semibold text-[#8754AF]">
                  خرید گیفت کارد
                </span>
                <FaGift className="text-[#8754AF] w-6 h-6" />
              </div>
              <button className="px-3 py-1.5 rounded-lg border-[3px] border-solid border-[#8754AF] text-lg font-semibold text-[#8754AF] ">
                ورود
              </button>
              <button className="flex items-center justify-center px-[30px] py-2.5 rounded-lg border-[#8754AF] text-lg font-semibold bg-[#8754AF] text-white gap-2">
                دانلود اپلیکیشن
                <FaDownload />
              </button>
            </div>
          </nav>
        </header>

        <main className={`min-h-screen`}>
          <Outlet />
        </main>

        <footer className="container flex justify-between"></footer>
      </section>
    </>
  );
};

export default RootLayout;
