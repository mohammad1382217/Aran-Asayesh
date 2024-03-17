import React from "react";
import bazar from "../assets/images/icons/bazar.svg";
import { HiDownload } from "react-icons/hi";
import { Button } from "@material-tailwind/react";
import App from "../assets/images/AppDownload.png";
import qr_code from "../assets/mobile-client-qr-code-settings.svg";

const Application = () => {
  return (
    <section className="w-full h-full flex items-center bg-[#F5F5F5]">
      <div className="w-full flex items-center justify-between bg-white max-w-7xl mx-auto my-10">
        <div className="w-full flex flex-col items-center justify-between bg-white pl-20 py-10 rounded-2xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-center">
              <div className="grid grid-cols-3 items-center justify-center">
                <div className="flex">
                  <img src={App} alt="" />
                </div>
                <div className="col-span-2 w-full flex-col items-center justify-center">
                  <div className="flex">
                    <div className="flex flex-col">
                      <h1 className="text-6xl text-[#7F38B7] font-semibold p-6">
                        سوالی دارید؟
                      </h1>
                      <h2 className="text-2xl font-semibold p-4">
                        با اپلیکیشن آران آسایش، ساده‌تر از همیشه تخفیف بگیر!
                      </h2>
                    </div>
                    <img src={qr_code} alt="" />
                  </div>
                  <div className="flex">
                    <p className="max-w-lg text-justify">
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ،
                      و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه
                      روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای
                      شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف
                      بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه
                      درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
                      طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه
                      ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی
                      ایجاد کرد.
                    </p>
                    <div className="flex flex-col p-6 gap-4">
                      <Button
                        className="flex bg-[#F5F5F5] text-gray-700 hover:!bg-transparent gap-1 items-center justify-center"
                        placeholder={undefined}
                      >
                        <HiDownload className="w-6 h-6 text-[#7F38B7]" />
                        <p className="block antialiased text-gray-700 text-lg font-normal transition-colors bg-transparent">
                          دانلود مستقیم
                        </p>
                      </Button>
                      <Button
                        className="flex bg-[#F5F5F5] text-gray-700 hover:!bg-transparent gap-1 items-center justify-center"
                        placeholder={undefined}
                      >
                        <img src={bazar} className="w-8 h-8" />
                        <p className="block antialiased text-gray-700 text-lg font-normal transition-colors bg-transparent">
                          دانلود از کافه بازار
                        </p>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Application;