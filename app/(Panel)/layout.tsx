import React from "react";
import { Outlet } from "react-router-dom";
import bg_admin from "../assets/images/bg-admin.png";
import FlowbiteListGroup from "../components/ListGroup";

export const List = [
  { title: "اطلاعات مجموعه", link: "/admin/Information" },
  { title: "تأیید کد تخفیف", link: "/admin/ConfirmCode" },
  { title: "سوابق تخفیف", link: "/admin/DiscountHistory" },
  { title: "خروج از پنل مدیریت", link: "/Login" },
];

const RootLayoutAdmin = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${bg_admin})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="w-full min-h-screen flex flex-col py-8"
    >
      <div className="flex flex-col container mx-auto px-4 lg:px-8 gap-8">
        <section className="w-full flex px-4 lg:px-8">
          <h1 className="text-[#303030] self-center md:self-start text-2xl sm:text-3xl font-semibold">
            پنل مدیریت مجموعه
          </h1>
        </section>
        <div className="flex flex-col lg:flex-row container h-full mx-auto px-4 lg:px-8 gap-8">
          <section className="flex justify-center">
            <FlowbiteListGroup List={List} />
          </section>
          <section className="bg-white flex flex-col p-12 rounded-2xl w-full sm:flex-col items-center justify-between gap-5">
            <Outlet />
          </section>
        </div>
      </div>
    </section>
  );
};

export default RootLayoutAdmin;
