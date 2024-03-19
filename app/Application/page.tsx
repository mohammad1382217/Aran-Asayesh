import React from "react";
import bazar from "../assets/images/icons/bazar.svg";
import { HiDownload } from "react-icons/hi";
import { Button } from "@material-tailwind/react";
import App from "../assets/images/AppDownload.png";
import qr_code from "../assets/mobile-client-qr-code-settings.svg";

const Application = () => {
  return (
    <div className="flex flex-col items-center w-full h-full bg-[#F5F5F5] gap-10">
      <section className="container mx-auto my-10 flex flex-col items-center md:!flex-row-reverse xs:p-4 p-10 w-11/12 lg:w-10/12 bg-white rounded-2xl gap-8">
        <div className="w-full flex flex-col xl:flex-row justify-center lg:justify-start items-start text-justify gap-8 md:gap-6">
          <div className="w-full xl:w-auto flex items-center justify-center">
            <img src={App} alt="" />
          </div>
          <div className="w-full flex flex-col xl:flex-row items-center justify-center gap-6">
            <div className="flex flex-col lg-flex-row items-center justify-between">
              <div className="flex flex-col items-center justify-center xl:justify-start">
                <h1 className="text-[#7F38B7] self-center xl:self-start text-3xl sm:text-5xl font-semibold">
                  دانلود اپلیکیشن
                </h1>
                <h2 className="text-xl font-semibold p-4">
                  با اپلیکیشن آران آسایش، ساده‌تر از همیشه تخفیف بگیر!
                </h2>
                <p className="flex items-center justify-center text-base font-light text-[#303030] text-justify lg:max-w-md ">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                  تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
                  آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم
                  افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص
                  طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
                </p>
              </div>
            </div>
            <div className="flex flex-col-reverse lg:flex-col items-center xl:items-end justify-between gap-3">
              <img src={qr_code} alt="" />
              <div className="flex flex-col gap-4">
                <Button
                  className="flex bg-[#F5F5F5] text-gray-700 hover:!bg-transparent gap-1 items-center justify-center"
                  placeholder={undefined}
                >
                  <HiDownload className="w-6 h-6 text-[#7F38B7]" />
                  <span className="block antialiased text-gray-700 text-lg font-normal transition-colors bg-transparent">
                    دانلود مستقیم
                  </span>
                </Button>
                <Button
                  className="flex bg-[#F5F5F5] text-gray-700 hover:!bg-transparent gap-1 items-center justify-center"
                  placeholder={undefined}
                >
                  <img src={bazar} className="w-8 h-8" />
                  <span className="block antialiased text-gray-700 text-lg font-normal transition-colors bg-transparent">
                    دانلود از کافه بازار
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Application;
