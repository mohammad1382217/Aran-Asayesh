import React from "react";
import credit from "../assets/credit-cards-desktop.svg";

const BuySubscription = () => {
  return (
    <section className="w-full h-full flex items-center bg-[#F5F5F5]">
      <div className="w-full flex items-center justify-between bg-white max-w-7xl mx-auto my-10">
        <div className="w-full flex flex-col items-center justify-between bg-white px-20 py-10 rounded-2xl">
          <div className="w-full flex items-center justify-between">
            <div className="flex items-center justify-center">
              <div className="flex items-center justify-center">
                <div className="flex flex-col">
                  <h1 className="text-6xl text-[#7F38B7] font-semibold p-6">
                    خرید اشتراک گیفت کارت
                  </h1>
                  <p className="text-lg font-semibold p-4">
                    همه می‌دانیم که خرید خوب و با کیفیت به همراه تخفیف بسیار
                    لذت‌بخش‌تر است. <span className="text-[#7F38B7]">تخفیف کارت آران آسایش</span> با تعداد زیادی از
                    بهترین مجموعه‌ها و برندها از مشاغل گوناگون در نقاط مختلف
                    کشور عزیزمان وارد مذاکره شده و قراردادهایی را امضا کرده است.
                    محصول تیم خلاق آران آسایش آفرینان یعنی کارت تخفیف آران
                    آسایش، حامی اقتصاد خانوار بوده و تلاش شده تا یک مجموعه جامع
                    و یکپارچه از محصولات و خدمات متنوع حوزه‌های سلامت، تفریحی،
                    رفاهی و خماتی در آن گنجانده شود تا خریداران محترم بتوانید با
                    آسودگی خیال و اعتماد کامل از این سامانه که متعلق به خودتان
                    است بهره‌مند شوید.
                  </p>
                </div>
              </div>
            </div>
            <img src={credit} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuySubscription;
