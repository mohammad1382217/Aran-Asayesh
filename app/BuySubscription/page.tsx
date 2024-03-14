import React from "react";
import yaghot from "../assets/yaghot.svg";
import Firooze from "../assets/emerald.svg";
import { Chip } from "@material-tailwind/react";
import zomorod from "../assets/cyan-diamond.svg";
import diamond from "../assets/Beautiful-diamond.svg";
import appMobile from "../assets/images/appMobile.png";
import { SimpleCard } from "../components/simpleCard";
import credit from "../assets/credit-cards-desktop.svg";

const BuySubscription = () => {
  return (
    <section className="w-full h-full flex items-center bg-[#F5F5F5]">
      <div className="w-full flex flex-col items-center justify-between max-w-7xl mx-auto my-10">
        <div className="w-full flex flex-col items-center justify-between bg-white px-20 py-10 rounded-2xl">
          <div className="w-full flex items-center justify-between">
            <div className="flex items-center justify-center">
              <div className="flex items-center justify-center">
                <div className="flex flex-col">
                  <h1 className="text-6xl text-[#7F38B7] font-semibold p-6">
                    خرید اشتراک گیفت کارت
                  </h1>
                  <p className="text-lg text-justify font-semibold p-4">
                    <p className="mb-6">
                      همه می‌دانیم که خرید خوب و با کیفیت به همراه تخفیف بسیار
                      لذت‌بخش‌تر است.{" "}
                      <span className="text-[#7F38B7]">
                        تخفیف کارت آران آسایش
                      </span>{" "}
                      با تعداد زیادی از بهترین مجموعه‌ها و برندها از مشاغل
                      گوناگون در نقاط مختلف کشور عزیزمان وارد مذاکره شده و
                      قراردادهایی را امضا کرده است.
                    </p>
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
        <div className="w-full flex items-center justify-between">
          <SimpleCard
            header={
              <div className="flex flex-col relative">
                <h2 className="text-[40px] mb-6">اشتراک الماس</h2>{" "}
                <h4 className="text-2xl mb-10">با یک تیر، چند نشان بزنید!</h4>
                <h2 className="roboto-regular-italic text-9xl text-[#C5C1FF] absolute left-24 -top-3">
                  Diamond
                </h2>
              </div>
            }
            text={
              "اگر شما اشتراک الماس کارت تخفیف آران آسایش را دریافت کنید دیگر نیازی به اشتراک‌های دیگر ندارید. فقط کافیست یک کارت الماس را تهیه و از هر چهار نوع خدمات مجموعه‌های تفریحی، درمانی، خدماتی و ورزشی تیم آران آسایش آفرینان استفاده کنید.با دریافت اشتراک و صدور کارت الماس، با یک تیر چند نشان بزنید!! اگر شما اشتراک الماس کارت تخفیف آران آسایش را دریافت کنید دیگر نیازی به اشتراکات دیگر ندارید. فقط کافیست یک کارت الماس را تهیه و از هر چهار نوع خدمات مجموعه‌های تفریحی، درمانی، خدماتی و ورزشی تیم آران آسایش آفرینان استفاده کنید.با دریافت اشتراک و صدور کارت الماس، با یک تیر چند نشان بزنید!! "
            }
            textButton={"خرید اشتراک"}
            Image={diamond}
            ImageClass="left-0 -top-[4.5rem] z-50"
            cardClass="w-full bg-gradient-to-r from-[#19177C] to-[#463CB9] pt-10"
            price="850.000 تومان"
          />
        </div>
        <div className="w-full flex items-center justify-between gap-4">
          <SimpleCard
            header={"اشتراک یاقوت"}
            text={
              "اگر شما اشتراک الماس کارت تخفیف آران آسایش را دریافت کنید دیگر نیازی به اشتراک‌های دیگر ندارید. فقط کافیست یک کارت الماس را تهیه و از هر چهار نوع خدمات مجموعه‌های تفریحی، درمانی، خدماتی و ورزشی تیم آران آسایش آفرینان استفاده کنید."
            }
            textButton={"خرید اشتراک"}
            Image={yaghot}
            ImageClass="left-0 -top-[3.5rem]"
            cardClass="bg-gradient-to-r from-red-900 to-red-600"
          />
          <SimpleCard
            header={"اشتراک فیروزه"}
            text={
              "اگر شما اشتراک الماس کارت تخفیف آران آسایش را دریافت کنید دیگر نیازی به اشتراک‌های دیگر ندارید. فقط کافیست یک کارت الماس را تهیه و از هر چهار نوع خدمات مجموعه‌های تفریحی، درمانی، خدماتی و ورزشی تیم آران آسایش آفرینان استفاده کنید."
            }
            textButton={"خرید اشتراک"}
            Image={zomorod}
            ImageClass="left-0 -top-[3.25rem]"
            cardClass="bg-gradient-to-r from-cyan-900 to-cyan-600"
          />
          <SimpleCard
            header={"اشتراک زمرد"}
            text={
              "اگر شما اشتراک الماس کارت تخفیف آران آسایش را دریافت کنید دیگر نیازی به اشتراک‌های دیگر ندارید. فقط کافیست یک کارت الماس را تهیه و از هر چهار نوع خدمات مجموعه‌های تفریحی، درمانی، خدماتی و ورزشی تیم آران آسایش آفرینان استفاده کنید."
            }
            textButton={"خرید اشتراک"}
            Image={Firooze}
            ImageClass="left-0 -top-[4.25rem]"
            cardClass="bg-gradient-to-r from-green-900 to-green-600"
          />
        </div>
        <div className="mt-16 w-full flex items-center justify-between bg-white px-20 py-10 rounded-2xl">
          <div className="w-full flex flex-col items-center justify-between">
            <div className="flex items-center justify-center">
              <div className="flex items-center justify-center">
                <div className="flex flex-col">
                  <h1 className="text-4xl font-semibold">
                    نحوه استفاده از اشتراک تخفیف آران آسایش
                  </h1>
                  <p className="text-lg text-justify font-semibold pt-8 pb-10">
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
            <div className="grid grid-cols-3 gap-6">
              <div className="flex flex-col">
                <Chip
                  className="text-[#8754AF] border-none bg-[#F5F5F5] text-2xl !w-32 mb-4"
                  variant="outlined"
                  value="قدم یکم"
                />
                <p className="text-lg mb-4">
                  ابتدا نرم‌افزار آران آسایش را از اینجا دانلود کرده و سپس طبق
                  تصویر، وارد پنل کاربری خود شوید.
                </p>
                <img src={appMobile} alt="" />
              </div>
              <div className="flex flex-col">
                <Chip
                  className="text-[#8754AF] border-none bg-[#F5F5F5] text-2xl !w-32 mb-4"
                  variant="outlined"
                  value="قدم دوم"
                />
                <p className="text-lg mb-4">
                  ابتدا نرم‌افزار آران آسایش را از اینجا دانلود کرده و سپس طبق
                  تصویر، وارد پنل کاربری خود شوید.
                </p>
                <img src={appMobile} alt="" />
              </div>
              <div className="flex flex-col">
                <Chip
                  className="text-[#8754AF] border-none bg-[#F5F5F5] text-2xl !w-32 mb-4"
                  variant="outlined"
                  value="قدم سوم"
                />
                <p className="text-lg mb-4">
                  ابتدا نرم‌افزار آران آسایش را از اینجا دانلود کرده و سپس طبق
                  تصویر، وارد پنل کاربری خود شوید.
                </p>
                <img src={appMobile} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuySubscription;
