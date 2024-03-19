import React, { useState, useRef } from "react";
import logo from "../assets/images/icons/logo-orginal 2.png";
import { LuUser2 } from "react-icons/lu";
import { Button } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
import Input from "../components/input";
import { Input as MaterialInput } from "@material-tailwind/react";

const Login = () => {
  const [isSendSms, setisSendSms] = useState(false);
  const firstInputRef = useRef(null);
  const secondInputRef = useRef(null);
  const thirdInputRef = useRef(null);
  const fourthInputRef = useRef(null);
  const fifthInputRef = useRef(null);

  function handleInputFocus(e:any) {
    if (e.target.value.length === 1) {
      const form = e.target.form;
      const index = [...form].indexOf(e.target);
      if (index < form.length - 1) {
        form.elements[index + 1].focus();
      }
    }
  }
  return (
    <div className="bg-[#F5F5F5] w-[100vw] h-[100vh] flex justify-center items-center">
      <div className="bg-[#FFFFFF] h-[26rem] w-96 mx-5 box_shadow rounded-lg relative">
        <div className="flex items-center justify-center w-full p-2 py-1">
          <img src={logo} className="w-10 h-14" alt="" />
          <h1 className="text-xl font-semibold text-[#8754AF] mr-3">
            آران آسایش
          </h1>
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
            <h2 className="text-base font-light text-[#717171] p-2">
              لطفاً شماره همراه خود را وارد نمایید
            </h2>
            <Input
              sizing="md"
              type="text"
              ClassName="w-full"
              placeholder="شماره همراه"
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
          <div className="px-6 md:px-10 mt-5">
            <div className="flex p-3">
              <LuUser2 color="#8754AF" size={26} />
              <span className="text-[#8754AF] text-xl font-semibold mr-2">
                ورود یا ثبت‌نام
              </span>
            </div>
            <h2 className="text-base font-light text-[#717171] p-2">
              کد پیامک شده را وارد نمایید
            </h2>
            <form className="flex items-center flex-row-reverse justify-between mb-4 w-full">
              <MaterialInput
                maxLength={1}
                size="md"
                className="text-center !w-10 !border-[#C8C8C8] outline-none shadow-none bg-white border-2 text-[#C8C8C8]  placeholder:text-[#C8C8C8] focus:text-[#7F38B7] hover:!border-[#8754AF] hover:!border-t-[#8754AF] focus:!border-[#7F38B7] focus:!border-t-[#7F38B7] focus:ring-[#8754AF]/10"
                labelProps={{
                  className: "hidden",
                }}
                containerProps={{
                  className: "inline-flex w-auto min-w-[40px] !w-[40px]",
                }}
                crossOrigin={Input}
                onKeyUp={handleInputFocus}
                ref={firstInputRef}
              />
              <MaterialInput
                maxLength={1}
                size="md"
                className="text-center !w-10 !border-[#C8C8C8] outline-none shadow-none bg-white border-2 text-[#C8C8C8]  placeholder:text-[#C8C8C8] focus:text-[#7F38B7] hover:!border-[#8754AF] hover:!border-t-[#8754AF] focus:!border-[#7F38B7] focus:!border-t-[#7F38B7] focus:ring-[#8754AF]/10"
                labelProps={{
                  className: "hidden",
                }}
                containerProps={{
                  className: "inline-flex w-auto min-w-[40px] !w-[40px]",
                }}
                crossOrigin={Input}
                onKeyUp={handleInputFocus}
                ref={secondInputRef}
              />
              <MaterialInput
                maxLength={1}
                size="md"
                className="text-center !w-10 !border-[#C8C8C8] outline-none shadow-none bg-white border-2 text-[#C8C8C8]  placeholder:text-[#C8C8C8] focus:text-[#7F38B7] hover:!border-[#8754AF] hover:!border-t-[#8754AF] focus:!border-[#7F38B7] focus:!border-t-[#7F38B7] focus:ring-[#8754AF]/10"
                labelProps={{
                  className: "hidden",
                }}
                containerProps={{
                  className: "inline-flex w-auto min-w-[40px] !w-[40px]",
                }}
                crossOrigin={Input}
                onKeyUp={handleInputFocus}
                ref={thirdInputRef}
              />
              <MaterialInput
                maxLength={1}
                size="md"
                className="text-center !w-10 !border-[#C8C8C8] outline-none shadow-none bg-white border-2 text-[#C8C8C8]  placeholder:text-[#C8C8C8] focus:text-[#7F38B7] hover:!border-[#8754AF] hover:!border-t-[#8754AF] focus:!border-[#7F38B7] focus:!border-t-[#7F38B7] focus:ring-[#8754AF]/10"
                labelProps={{
                  className: "hidden",
                }}
                containerProps={{
                  className: "inline-flex w-auto min-w-[40px] !w-[40px]",
                }}
                crossOrigin={Input}
                onKeyUp={handleInputFocus}
                ref={fourthInputRef}
              />
              <MaterialInput
                maxLength={1}
                size="md"
                className="text-center -ml-10 !w-10 !border-[#C8C8C8] outline-none shadow-none bg-white border-2 text-[#C8C8C8]  placeholder:text-[#C8C8C8] focus:text-[#7F38B7] hover:!border-[#8754AF] hover:!border-t-[#8754AF] focus:!border-[#7F38B7] focus:!border-t-[#7F38B7] focus:ring-[#8754AF]/10"
                labelProps={{
                  className: "hidden",
                }}
                containerProps={{
                  className: "inline-flex w-auto min-w-[40px] !w-[40px]",
                }}
                crossOrigin={Input}
                onKeyUp={handleInputFocus}
                ref={fifthInputRef}
              />
            </form>
            <Input
              sizing="md"
              type="text"
              ClassName="w-full"
              placeholder="کد معرف"
            />
            <NavLink className="block my-4" to="/Home">
              <Button
                type="button"
                className="bg-[#8754AF] w-full"
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
