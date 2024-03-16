import React, { useState } from "react";
import logo from "../assets/images/icons/logo-orginal 2.png";
import { Input } from "@material-tailwind/react";
import { LuUser2 } from "react-icons/lu";
import { Button } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";

const Login = () => {
  const [isSendSms, setisSendSms] = useState(false);
  return (
    <div className="bg-[#F5F5F5] w-[100vw] h-[100vh] flex justify-center items-center">
      <div className="bg-[#FFFFFF] h-[26rem] w-96 box_login rounded-lg relative">
        <div className="flex items-center justify-center w-full p-2 py-1">
          <img src={logo} className="w-10 h-14" alt="" />
          <p className="text-xl font-semibold text-[#8754AF] mr-3">
            آران آسایش
          </p>
        </div>
        <div className="flex-1 border-[#ECECEC] border-t-2"></div>
        {isSendSms === false ? (
          <div className="px-10 mt-5">
            <div className="flex p-3">
              <LuUser2 color="#8754AF" size={26} />
              <span className="text-[#8754AF] text-xl font-semibold mr-2">
                ورود یا ثبت‌نام
              </span>
            </div>
            <p className="text-base font-light text-[#717171] p-2">
              لطفاً شماره همراه خود را وارد نمایید
            </p>
            <Input
              type="text"
              size="md"
              placeholder="شماره همراه"
              className=" !border-[#C8C8C8] outline-none shadow-none bg-white border-2 text-[#C8C8C8]  placeholder:text-[#C8C8C8] focus:text-[#7F38B7] hover:!border-[#8754AF] hover:!border-t-[#8754AF] focus:!border-[#7F38B7] focus:!border-t-[#7F38B7] focus:ring-[#8754AF]/10"
              labelProps={{
                className: "hidden",
              }}
              containerProps={{ className: "min-w-[90px]" }}
              crossOrigin={Input}
            />
            <Button
              onClick={() => {
                setisSendSms(true);
              }}
              className="bg-[#8754AF] w-full mt-3"
              placeholder={undefined}
            >
              ادامه
            </Button>
          </div>
        ) : (
          <div className="px-10 mt-5">
            <div className="flex p-3">
              <LuUser2 color="#8754AF" size={26} />
              <span className="text-[#8754AF] text-xl font-semibold mr-2">
                ورود یا ثبت‌نام
              </span>
            </div>
            <p className="text-base font-light text-[#717171] p-2">
              کد پیامک شده را وارد نمایید
            </p>
            <div className="flex justify-between">
              <Input
                maxLength={1}
                size="md"
                className="text-center !w-10 !border-[#C8C8C8] outline-none shadow-none bg-white border-2 text-[#C8C8C8]  placeholder:text-[#C8C8C8] focus:text-[#7F38B7] hover:!border-[#8754AF] hover:!border-t-[#8754AF] focus:!border-[#7F38B7] focus:!border-t-[#7F38B7] focus:ring-[#8754AF]/10"
                labelProps={{
                  className: "hidden",
                }}
                crossOrigin={Input}
              />
              <Input
                maxLength={1}
                size="md"
                className="text-center !w-10 !border-[#C8C8C8] outline-none shadow-none bg-white border-2 text-[#C8C8C8]  placeholder:text-[#C8C8C8] focus:text-[#7F38B7] hover:!border-[#8754AF] hover:!border-t-[#8754AF] focus:!border-[#7F38B7] focus:!border-t-[#7F38B7] focus:ring-[#8754AF]/10"
                labelProps={{
                  className: "hidden",
                }}
                crossOrigin={Input}
              />
              <Input
                maxLength={1}
                size="md"
                className="text-center !w-10 !border-[#C8C8C8] outline-none shadow-none bg-white border-2 text-[#C8C8C8]  placeholder:text-[#C8C8C8] focus:text-[#7F38B7] hover:!border-[#8754AF] hover:!border-t-[#8754AF] focus:!border-[#7F38B7] focus:!border-t-[#7F38B7] focus:ring-[#8754AF]/10"
                labelProps={{
                  className: "hidden",
                }}
                crossOrigin={Input}
              />
              <Input
                maxLength={1}
                size="md"
                className="text-center !w-10 !border-[#C8C8C8] outline-none shadow-none bg-white border-2 text-[#C8C8C8]  placeholder:text-[#C8C8C8] focus:text-[#7F38B7] hover:!border-[#8754AF] hover:!border-t-[#8754AF] focus:!border-[#7F38B7] focus:!border-t-[#7F38B7] focus:ring-[#8754AF]/10"
                labelProps={{
                  className: "hidden",
                }}
                crossOrigin={Input}
              />
              <Input
                maxLength={1}
                size="md"
                className="text-center -ml-[-1.4rem] !w-10 !border-[#C8C8C8] outline-none shadow-none bg-white border-2 text-[#C8C8C8]  placeholder:text-[#C8C8C8] focus:text-[#7F38B7] hover:!border-[#8754AF] hover:!border-t-[#8754AF] focus:!border-[#7F38B7] focus:!border-t-[#7F38B7] focus:ring-[#8754AF]/10"
                labelProps={{
                  className: "hidden",
                }}
                crossOrigin={Input}
              />
            </div>

            <Input
              type="text"
              size="md"
              placeholder="کد معرف"
              className=" !border-[#C8C8C8] my-3 outline-none shadow-none bg-white border-2 text-[#C8C8C8]  placeholder:text-[#C8C8C8] focus:text-[#7F38B7] hover:!border-[#8754AF] hover:!border-t-[#8754AF] focus:!border-[#7F38B7] focus:!border-t-[#7F38B7] focus:ring-[#8754AF]/10"
              labelProps={{
                className: "hidden",
              }}
              containerProps={{ className: "min-w-[90px]" }}
              crossOrigin={Input}
            />
            <NavLink to="/Home">
              <Button
                className="bg-[#8754AF] w-full mt-6"
                placeholder={undefined}
              >
                ورود
              </Button>
            </NavLink>
          </div>
        )}

        <Button
          className="bg-[#ECECEC] w-full mt-3 rounded-t-none button-fix py-3 !absolute bottom-0 right-0 text-[#717171] text-lg font-light"
          onClick={() => {
            setisSendSms(false);
          }}
          placeholder={undefined}
        >
          بازگشت {">"}
        </Button>
      </div>
    </div>
  );
};

export default Login;
