import React from "react";
import workwithus from "../assets/images/workwithus.png";
const WorkWithUs = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="container mx-auto flex flex-col md:!flex-row-reverse py-7 px-4 md:p-20 w-11/12 lg:w-10/12 bg-[#FFFFFF] rounded-2xl gap-4">
        <img src={workwithus} alt="" />
        <div className="w-full flex flex-col justify-center lg:justify-start items-start my-4 px-3">
          <p className="text-[#7F38B7] self-center md:self-start text-3xl sm:text-4xl font-semibold  ">
          همکاری با ما
          </p>
          <ol className="p-4 md:space-y-3 md:px-6 mt-4 md:mt-2" style={{listStyle:'arabic-indic'}}>
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
      <div className="container mt-10 mx-auto flex flex-col py-7 px-4 lg:flex-row w-11/12 lg:w-10/12 bg-[#FFFFFF] rounded-2xl gap-4"></div>
      <div className="container mt-10 mx-auto flex flex-col py-7 px-4 lg:flex-row w-11/12 lg:w-10/12 bg-[#FFFFFF] rounded-2xl gap-4"></div>
    </div>
  );
};

export default WorkWithUs;
