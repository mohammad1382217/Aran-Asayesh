import React from "react";
import coffee from "../assets/images/coffee.png";
const OurHistory = () => {
  return (
    <div className="w-full h-full bg-[#F5F5F5]">
    <div className="container  mx-auto flex flex-col py-7 lg:py-4 mt-10 px-4 lg:flex-row w-11/12 lg:w-10/12 bg-[#FFFFFF] rounded-2xl gap-4">
      <div className="w-full flex justify-center lg:justify-start items-start my-4 lg:my-2 px-10 lg:px-16 lg:mt-10">
        <p className="text-[#7F38B7] text-3xl sm:text-4xl font-semibold  ">
          تاریخچه آران آسایش
        </p>
      </div>
      <div className="flex justify-between items-center flex-col lg:flex-row">
        <div className="lg:w-6/12 px-7 md:px-0 lg:p-5">
          <img className="w-ful md:h-80 lg:h-72" src={coffee} alt="عکس کافه" />
        </div>
        <div className="lg:w-7/12 p-7 md:px-11 lg:p-5">
          <p className="text-[#303030] text-justify text-lg md:text-sm lg:text-base  font-light">
            مجوعه آران آسایش آفرینان متشکل از جمعی از پزشکان و اساتید دانشگاه و
            صاحبان کسب و کار از سال 1397 با مدیریت آقای محمدرضا مرادی مشغول
            فعالیت است. این مجموعه با راه‌اندازی شبکه سراسری تخفیف ایران با
            صرفه‌جویی در هزینه‌های جاری خانوار و حمایت از اقتصاد خانواده، مصداق
            بارزی از اقتصاد مقاومتی ارائه نموده است.
          </p>
          <p className="text-[#303030] text-justify text-lg md:text-sm lg:text-base font-light mt-5 lg:mt-6">
            امروزه با توجه به شرایط اقتصادی حاکم بر کشور، پس‌انداز و صرفه‌جویی
            در هزینه‌های جاری و ضروری خانواده‌ها بیش از همیشه مورد توجه اقشار
            مختلف جامعه و سرپرست خانواده‌ها است. از طرفی صاحبان مشاغل و خدمات
            گوناگون نیز با همین رکود اقتصادی و کمرشکنی روبرو هستند که در بسیاری
            از مواقع حاضرند به نفع مشتری از قسمتی از سود خود چشم پوشی کرده و با
            دید قناعت به حداقل سود، ضمن خروج از رکود و بحران مالی زمینه جذب
            مشتری و بازار جدید را فراهم سازند.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default OurHistory;
