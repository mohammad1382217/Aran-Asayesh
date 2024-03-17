import React from "react";
import workwithus from "../assets/images/workwithus.png";
import C_Input from "../components/input";
import { Button, Textarea } from "@material-tailwind/react";
import WorkwithUsCard from "../components/WorkwithusCard";
import laptop from "../assets/images/MacBook Pro 16.png";
import phone from "../assets/images/Samsung Galaxy Z Fold 3.png";
import telegram from "../assets/images/icons/telegram.svg";

const WorkWithUs = () => {
  return (
    <div className="flex flex-col w-full h-full my-3 bg-[#F5F5F5]">
      <div className="container mx-auto mt-5 flex flex-col md:!flex-row-reverse py-7 px-4 w-11/12 lg:w-10/12 bg-[#FFFFFF] rounded-2xl gap-4">
        <img src={workwithus} className="sm:w-[60%]" alt="" />
        <div className="w-full flex flex-col justify-center lg:justify-start items-start my-4 px-3">
          <p className="text-[#7F38B7] self-center md:self-start text-3xl sm:text-4xl font-semibold  ">
            همکاری با ما
          </p>
          <ol
            className="p-4 space-y-3 md:space-y-5 md:px-6 mt-4 md:mt-2"
            style={{ listStyle: "arabic-indic" }}
          >
            <li>
              با عضویت در مجموعه آران آسایش آفرینان،{" "}
              <span className="text-[#7F38B7]">با یک تیر چند نشان بزنید!</span>
            </li>
            <li>
              از خدمات تبلیغاتی ما در سایت و اپلیکیشن بهره برده و شناخته شوید.
            </li>
            <li>
              در لیست مجموعه‌های آران آسایش قرار گرفته و مشتریان خود را افزایش
              دهید.
            </li>
            <li>افزایش درآمد در ادامه فروش بیشتر به خریداران ثابت است!</li>
            <li>استفاده از دیگر خدمات متنوع مجموعه آران آسایش آفرینان</li>
          </ol>
        </div>
      </div>
      <div className="container mt-10 mx-auto flex flex-col py-7 px-5 md:px-14 lg:flex-row w-11/12 lg:w-10/12 bg-[#FFFFFF] rounded-2xl gap-4">
        <p className="font-semibold text-xl text-center text-[#303030] nd:self-start md:p-3">
          فرم درخواست پیوستن به زیرمجموعه آران آسایش{" "}
        </p>
        <p className="font-light text-sm text-[#303030]">
          جهت ثبت مجموعه خود و استفاده از امکانات گروه آران آسایش برای افزایش
          بهره‌وری تبلیغاتی و درآمدی، اطلاعات دقیق مجموعه خود را جهت بررسی، در
          فرم زیر وارد کرده و پس از ثبت اطلاعات، منتظر تماس کارشناسان ما باشید.
        </p>
        <div className="flex flex-col md:flex-row w-full gap-4">
          <C_Input
            size={"md"}
            type="text"
            ClassName="w-full "
            placeholder="نام مجموعه/نام شخص"
          />
          <C_Input
            size={"md"}
            type="text"
            ClassName="w-full "
            placeholder="شماره تلفن مجموعه"
          />
          <C_Input
            size={"md"}
            type="text"
            ClassName="w-full "
            placeholder="شماره موبایل"
          />
        </div>
        <div className="flex flex-col md:flex-row w-full md:gap-4">
          <Textarea
            size="md"
            placeholder="آدرس مجموعه"
            className=" !border-[#C8C8C8] !h-20 md:!h-36 outline-none shadow-none bg-white border-2 text-[#C8C8C8]  placeholder:text-[#C8C8C8] focus:text-[#7F38B7] hover:!border-[#8754AF] hover:!border-t-[#8754AF] focus:!border-[#7F38B7] focus:!border-t-[#7F38B7] focus:ring-[#8754AF]/10"
            labelProps={{
              className: "hidden",
            }}
            // containerProps={{ className: "min-w-[90px]" }}
          />
          <Textarea
            size="md"
            placeholder="توضیحات مجموعه"
            className=" !border-[#C8C8C8] !h-56 md:!h-36 mt-2 md:mt-0 outline-none shadow-none bg-white border-2 text-[#C8C8C8]  placeholder:text-[#C8C8C8] focus:text-[#7F38B7] hover:!border-[#8754AF] hover:!border-t-[#8754AF] focus:!border-[#7F38B7] focus:!border-t-[#7F38B7] focus:ring-[#8754AF]/10"
            labelProps={{
              className: "hidden",
            }}
            // containerProps={{ className: "min-w-[90px]" }}
          />
        </div>

        <Button className="bg-[#8754AF] mt-3 self-end" placeholder={undefined}>ثبت درخواست</Button>
      </div>
      <div className="container my-10 mx-auto flex flex-col py-7 px-5 lg:flex-row w-11/12 lg:w-10/12 bg-[#FFFFFF] rounded-2xl gap-7 ">
        <p className="font-semibold text-xl text-center text-[#303030] ">
          ثبت تبلیغات پربازده کسب و کار شما{" "}
        </p>
        <div className="flex flex-col space-y-5 p-1 md:flex-row md:space-y-0 md:p-10">
          <WorkwithUsCard
            img={phone}
            title="بنر در اپلیکیشن موبایل"
            text="محصول تیم خلاق آران آسایش آفرینان یعنی کارت تخفیف آران آسایش، حامی اقتصاد خانوار بوده و تلاش شده است."
          />
          <WorkwithUsCard
            img={laptop}
            title="پیشنهاد ویژه در وبسایت"
            text="محصول تیم خلاق آران آسایش آفرینان یعنی کارت تخفیف آران آسایش، حامی اقتصاد خانوار بوده و تلاش شده است."
          />
        </div>
      </div>
      <div className="container my-10 mx-auto flex flex-col py-7 px-5 lg:flex-row w-11/12 lg:w-10/12 bg-[#FFFFFF] rounded-2xl gap-7 ">
        <p className="font-semibold text-xl text-center text-[#303030] ">
          راه‌های ارتباطی آران آسایش{" "}
        </p>
        <div className="flex flex-col space-y-5 p-1 md:flex-row md:space-y-0 md:p-10">
          <div>
            <p>شبکه‌های اجتماعی</p>
            <div className="flex">
              <img src={telegram} alt="" />
              <p>@aranasayesh_ir</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkWithUs;
