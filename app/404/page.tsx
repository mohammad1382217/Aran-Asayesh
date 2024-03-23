import React from "react";
import img404 from "../assets/images/404.png";
import { Button } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
const Page404 = () => {
  return (
    <div className="w-[100vw] h-[100vh] bg-[#F5F5F5] flex justify-center items-center">
      <div className="flex flex-col justify-center items-center w-11/12 scale-75 md:scale-90">
        <img src={img404} alt="" />
        <span className="text-sm sm:text-2xl font-light text-[#7F38B7] mt-4">
          «متاسفانه صفحه مورد نظر شما پیدا نشد»
        </span>
        <NavLink to={'/home'}>
        <Button className="bg-[#8754AF] mt-3 self-center" placeholder={undefined}>
          بازگشت به صفحه اصلی
        </Button>
        </NavLink>
      </div>
    </div>
  );
};

export default Page404;