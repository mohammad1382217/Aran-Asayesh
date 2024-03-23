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
      <div className="container w-full flex flex-col items-center justify-between mx-auto my-10">
        <section className="flex flex-col items-center md:!flex-row-reverse p-7 xs:w-10/12 lg:w-11/12 bg-[#FFFFFF] rounded-2xl gap-8">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-center xl:justify-start gap-20">
            <div className="flex flex-col">
              <h1 className="text-[#7F38B7] self-center xl:self-start text-3xl sm:text-4xl font-semibold pt-6">
                خرید اشتراک گیفت کارت
              </h1>
              <div className="py-4">
                <p className="text-base font-light text-[#303030] text-justify mb-6">
                  همه می‌دانیم که خرید خوب و با کیفیت به همراه تخفیف بسیار
                  لذت‌بخش‌تر است.{" "}
                  <span className="text-[#7F38B7]">تخفیف کارت آران آسایش</span>{" "}
                  با تعداد زیادی از بهترین مجموعه‌ها و برندها از مشاغل گوناگون
                  در نقاط مختلف کشور عزیزمان وارد مذاکره شده و قراردادهایی را
                  امضا کرده است.
                </p>
                <p className="text-base font-light text-[#303030] text-justify">
                  محصول تیم خلاق آران آسایش آفرینان یعنی کارت تخفیف آران آسایش،
                  حامی اقتصاد خانوار بوده و تلاش شده تا یک مجموعه جامع و یکپارچه
                  از محصولات و خدمات متنوع حوزه‌های سلامت، تفریحی، رفاهی و خماتی
                  در آن گنجانده شود تا خریداران محترم بتوانید با آسودگی خیال و
                  اعتماد کامل از این سامانه که متعلق به خودتان است بهره‌مند
                  شوید.
                </p>
              </div>
            </div>
            <img src={credit} alt="" />
          </div>
        </section>
        <section className="w-full flex items-center justify-between">
          <SimpleCard
            header={
              <div className="flex flex-col relative">
                <h2 className="xs:text-3xl text-4xl text-[#C5C1FF] mb-6">
                  اشتراک الماس
                </h2>{" "}
                <h4 className="xs:text-xl text-2xl mb-10">
                  با یک تیر، چند نشان بزنید!
                </h4>
                <h2 className="roboto-regular-italic text-9xl text-[#C5C1FF] absolute left-24 -top-3 hidden lg:block opacity-20">
                  Diamond
                </h2>
              </div>
            }
            text={
              <p className="text-base font-light text-white text-justify">
                اگر شما اشتراک الماس کارت تخفیف آران آسایش را دریافت کنید دیگر
                نیازی به اشتراک‌های دیگر ندارید. فقط کافیست یک کارت الماس را
                تهیه و از هر چهار نوع خدمات{" "}
                <span className="font-medium">
                  مجموعه‌های تفریحی،درمانی، خدماتی و ورزشی
                </span>
                تیم آران آسایش آفرینان استفاده کنید.با دریافت اشتراک و صدور کارت
                الماس، با یک تیر چند نشان بزنید!! اگر شما اشتراک الماس کارت
                تخفیف آران آسایش را دریافت کنید دیگر نیازی به اشتراکات دیگر
                ندارید. فقط کافیست یک کارت الماس را تهیه و از هر چهار نوع خدمات
                مجموعه‌های تفریحی، درمانی، خدماتی و ورزشی تیم آران آسایش آفرینان
                استفاده کنید.با دریافت اشتراک و صدور کارت الماس، با یک تیر چند
                نشان بزنید!!
              </p>
            }
            textButton={"خرید اشتراک"}
            Image={diamond}
            ImageClass="w-32 -top-[2.75rem] left-0 z-50"
            cardClass="w-full bg-gradient-to-r from-[#19177C] to-[#463CB9] pt-10 container mx-auto flex flex-col items-center p-7 xs:w-10/12 lg:w-11/12 rounded-2xl gap-8"
            price="850.000 تومان"
          />
        </section>
        <section className="w-full flex flex-col xl:flex-row items-center justify-between gap-4 xs:w-10/12 lg:w-11/12">
          <div className="w-full flex flex-col-reverse xl:grid xl:grid-cols-3 xl:gap-3 items-center justify-between">
            <SimpleCard
              header={"اشتراک یاقوت"}
              headerClass="text-[#FFCEDA] xs:text-3xl text-4xl"
              text={
                <p className="text-base font-light text-white text-justify">
                  اگر شما اشتراک الماس کارت تخفیف آران آسایش را دریافت کنید دیگر
                  نیازی به اشتراک‌های دیگر ندارید. فقط کافیست یک کارت الماس را
                  تهیه و از هر چهار نوع خدمات{" "}
                  <span className="font-medium">
                    مجموعه‌های تفریحی،درمانی، خدماتی و ورزشی
                  </span>{" "}
                  تیم آران آسایش آفرینان استفاده کنید.
                </p>
              }
              textButton={"خرید اشتراک"}
              Image={yaghot}
              ImageClass="w-32 -top-[3.5rem] lg:-top-[2.75rem] left-0 z-50"
              cardClass="w-full bg-gradient-to-r from-red-900 to-red-600"
              price="50.000 تومان"
            />
            <SimpleCard
              header={"اشتراک فیروزه"}
              headerClass="text-[#C7FCFF] xs:text-3xl text-4xl"
              text={
                <p className="text-base font-light text-white text-justify">
                  اگر شما اشتراک الماس کارت تخفیف آران آسایش را دریافت کنید دیگر
                  نیازی به اشتراک‌های دیگر ندارید. فقط کافیست یک کارت الماس را
                  تهیه و از هر چهار نوع خدمات{" "}
                  <span className="font-medium">
                    مجموعه‌های تفریحی،درمانی، خدماتی و ورزشی
                  </span>{" "}
                  تیم آران آسایش آفرینان استفاده کنید.
                </p>
              }
              textButton={"خرید اشتراک"}
              Image={zomorod}
              ImageClass="w-32 -top-[2.5rem] left-0 z-50"
              cardClass="w-full bg-gradient-to-r from-cyan-900 to-cyan-600"
              price="50.000 تومان"
            />
            <SimpleCard
              header={"اشتراک زمرد"}
              headerClass="text-[#BDFFDB] xs:text-3xl text-4xl"
              text={
                <p className="text-base font-light text-white text-justify">
                  اگر شما اشتراک الماس کارت تخفیف آران آسایش را دریافت کنید دیگر
                  نیازی به اشتراک‌های دیگر ندارید. فقط کافیست یک کارت الماس را
                  تهیه و از هر چهار نوع خدمات{" "}
                  <span className="font-medium">
                    مجموعه‌های تفریحی،درمانی، خدماتی و ورزشی
                  </span>{" "}
                  تیم آران آسایش آفرینان استفاده کنید.
                </p>
              }
              textButton={"خرید اشتراک"}
              Image={Firooze}
              ImageClass="w-32 -top-[3.5rem] lg:-top-[3rem] left-0 z-50"
              cardClass="w-full bg-gradient-to-r from-green-900 to-green-600"
              price="50.000 تومان"
            />
          </div>
        </section>
        <section className="container mx-auto my-10 flex flex-col items-center md:!flex-row-reverse xs:p-4 p-10 xs:w-10/12 lg:w-11/12 bg-white rounded-2xl gap-8">
          <div className="w-full flex flex-col items-center justify-between">
            <div className="flex items-center justify-center">
              <div className="flex flex-col">
                <h1 className="self-center md:self-start text-3xl sm:text-4xl font-semibold">
                  نحوه استفاده از اشتراک تخفیف آران آسایش
                </h1>
                <p className="text-base font-light text-[#303030] text-justify pt-8 pb-10">
                  محصول تیم خلاق آران آسایش آفرینان یعنی کارت تخفیف آران آسایش،
                  حامی اقتصاد خانوار بوده و تلاش شده تا یک مجموعه جامع و یکپارچه
                  از محصولات و خدمات متنوع حوزه‌های سلامت، تفریحی، رفاهی و خماتی
                  در آن گنجانده شود تا خریداران محترم بتوانید با آسودگی خیال و
                  اعتماد کامل از این سامانه که متعلق به خودتان است بهره‌مند
                  شوید.
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="flex flex-col">
                <Chip
                  className="text-[#8754AF] border-none bg-[#F5F5F5] text-2xl !w-32 mb-4"
                  variant="outlined"
                  value="قدم یکم"
                />
                <p className="text-base font-light text-[#303030] text-justify mb-4">
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
                <p className="text-base font-light text-[#303030] text-justify mb-4">
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
                <p className="text-base font-light text-[#303030] text-justify mb-4">
                  ابتدا نرم‌افزار آران آسایش را از اینجا دانلود کرده و سپس طبق
                  تصویر، وارد پنل کاربری خود شوید.
                </p>
                <img src={appMobile} alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default BuySubscription;
