import React from "react";
import Input from "../components/input";
import map from "../assets/images/map.png";
import sms from "../assets/images/icons/sms.svg";
import call from "../assets/images/icons/call.svg";
import eitaa from "../assets/images/icons/eitaa.svg";
import workwithus from "../assets/images/workwithus.png";
import laptop from "../assets/images/MacBook Pro 16.png";
import WorkwithUsCard from "../components/WorkwithusCard";
import telegram from "../assets/images/icons/telegram.svg";
import whatsapp from "../assets/images/icons/whatsapp.svg";
import { Button } from "@material-tailwind/react";
import { TextArea } from "../components/TextArea";
import instegram from "../assets/images/icons/instagram.svg";
import phone from "../assets/images/Samsung Galaxy Z Fold 3.png";

const WorkWithUs = () => {
  return (
    <div className="flex flex-col items-center w-full h-full bg-[#F5F5F5] gap-10 overflow-hidden">
      <section className="container mx-auto mt-10 flex flex-col items-center md:!flex-row-reverse p-7 w-11/12 lg:w-10/12 bg-[#FFFFFF] rounded-2xl gap-8">
        <img
          src={workwithus}
          className="w-full sm:w-[50%] sm:h-[30%] bg-cover object-fill bg-no-repeat"
          alt=""
        />
        <div className="w-full flex flex-col justify-center lg:justify-start items-start text-justify gap-8 md:gap-6">
          <h1 className="text-[#7F38B7] self-center md:self-start text-3xl sm:text-4xl font-semibold">
            همکاری با ما
          </h1>
          <ol
            className="flex flex-col pr-4 gap-3 md:gap-5 md:pr-6"
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
      </section>
      <section className="container mx-auto flex flex-col py-7 px-5 md:px-14 w-11/12 lg:w-10/12 bg-[#FFFFFF] rounded-2xl gap-4">
        <h2 className="font-semibold text-xl text-center text-[#303030] md:self-start md:p-3">
          فرم درخواست پیوستن به زیرمجموعه آران آسایش{" "}
        </h2>
        <p className="text-base font-light text-[#303030] text-justify">
          جهت ثبت مجموعه خود و استفاده از امکانات گروه آران آسایش برای افزایش
          بهره‌وری تبلیغاتی و درآمدی، اطلاعات دقیق مجموعه خود را جهت بررسی، در
          فرم زیر وارد کرده و پس از ثبت اطلاعات، منتظر تماس کارشناسان ما باشید.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-4">
          <Input
            sizing="md"
            type="text"
            ClassName="w-full"
            placeholder="نام مجموعه/نام شخص"
          />
          <Input
            sizing="md"
            type="text"
            ClassName="w-full"
            placeholder="شماره تلفن مجموعه"
          />
          <Input
            sizing="md"
            type="text"
            ClassName="w-full"
            placeholder="شماره موبایل"
          />
        </div>
        <div className="flex flex-col md:flex-row w-full gap-4">
          <TextArea
            placeholder="آدرس مجموعه"
            TextAreaClass={"!h-20 md:!h-36"}
            onChange={() => {}}
          />
          <TextArea
            placeholder="توضیحات مجموعه"
            TextAreaClass={"!h-20 md:!h-36"}
            onChange={() => {}}
          />
        </div>

        <Button className="bg-[#8754AF] mt-3 self-end" placeholder={undefined}>
          ثبت درخواست
        </Button>
      </section>
      <section className="container mx-auto  md:px-10 flex flex-col py-7 px-5 w-11/12 lg:w-10/12 bg-[#FFFFFF] rounded-2xl gap-7 ">
        <h2 className="font-semibold text-xl text-center text-[#303030] md:self-start md:p-3">
          ثبت تبلیغات پربازده کسب و کار شما{" "}
        </h2>
        <div className="flex flex-col md:gap-4 lg:gap-10 md:flex-row lg:flex-row space-y-5 md:space-y-0   lg:space-y-0">
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
      </section>
      <section className="container mb-10 mx-auto flex flex-col py-7 md:pb-7 px-5  w-11/12 lg:w-10/12 bg-[#FFFFFF] rounded-2xl gap-7 md:gap-0 ">
        <h2 className="font-semibold text-xl md:text-2xl md:text-right md:pt-5 md:pr-10 text-center text-[#303030] ">
          راه‌های ارتباطی آران آسایش{" "}
        </h2>
        <div className="flex flex-col justify-around md:flex-row">
          <div className="flex flex-col justify-around md:flex-row">
            <div className="flex flex-col md:flex-row justify-center items-center space-y-5 p-1  md:space-y-0">
              <div className="w-10/12  md:p-3 gap-1 flex flex-col justify-center items-center">
                <h3 className="text-center mb-2 text-lg font-semibold">
                  شبکه‌های اجتماعی
                </h3>
                <div className="flex md:scale-75 md:py-1 md:mx-auto flex-row-reverse items-center justify-between p-3">
                  <img src={telegram} className="mr-5" alt="" />
                  <span className="text-lg font-light text-[#303030]">
                    @aranasayesh_ir
                  </span>
                </div>
                <div className="flex md:scale-75 md:py-1 md:mx-auto flex-row-reverse items-center justify-between p-3">
                  <img src={instegram} className="mr-5" alt="" />
                  <span className="text-lg font-light text-[#303030]">
                    @aranasayesh_ir
                  </span>
                </div>
                <div className="flex md:scale-75 md:py-1 md:mx-auto flex-row-reverse items-center justify-between p-3">
                  <img src={whatsapp} className="mr-5" alt="" />
                  <span className="text-lg font-light text-[#303030]">
                    @aranasayesh_ir
                  </span>
                </div>
                <div className="flex md:scale-75 md:py-1 md:mx-auto flex-row-reverse items-center justify-between p-3">
                  <img src={eitaa} className="mr-5" alt="" />
                  <span className="text-lg font-light text-[#303030]">
                    @aranasayesh_ir
                  </span>
                </div>
              </div>
              <div className="flex-1 w-48 md:w-full -mt-20 md:rotate-180 md:mx-2 md:border-r-2 md:border-t-0 md:h-[70%] mx-20 border-t-2  md:mt-0 border-[#717171] rounded-none border-dotted md:border-3"></div>
            </div>
            <div className="flex flex-col mt-3 md:mt-0 gap-4 items-center justify-center">
              <div className="flex flex-col gap-2 justify-center items-center space-y-5 p-1  md:space-y-0">
                <div className="w-12/12 flex flex-col justify-center items-center">
                  <h3 className="text-center mb-2 text-lg font-semibold">
                    اطلاعات تماس
                  </h3>
                  <div className="flex p-3 md:px-1 md:scale-75 md:py-1 md:mx-auto flex-row-reverse items-center justify-between ">
                    <img src={call} className="mr-3" alt="" />
                    <span className="text-lg font-light text-[#303030]">
                      025-31234567
                    </span>
                  </div>
                  <span className="p-2 md:px-1 md:scale-75 md:py-1 md:mx-auto">
                    ساعت پاسخگویی: 9 - 21
                  </span>
                </div>
                <div className="flex-1 w-48 md:w-full md:10/12 mx-20 border-t-2  mt-3 border-[#717171] rounded-none border-dotted md:border-3"></div>
              </div>
              <div className="flex flex-col justify-center items-center md:space-y-0">
                <div className=" flex flex-col justify-center items-center">
                  <h3 className="text-center mb-2 md:mt-1 md:mb-0 text-lg font-semibold">
                    آدرس ایمیل
                  </h3>
                  <div className="flex p-3 md:scale-75 md:py-1 flex-row-reverse items-center justify-between ">
                    <img src={sms} className="mr-3" alt="" />
                    <span className="text-lg font-light text-[#303030]">
                      aranasayesh@gmail.com
                    </span>
                  </div>
                </div>
                <div className="flex-1 w-48 md:w-full md:hidden mx-20 border-t-2  mt-3 border-[#717171] rounded-none border-dotted md:border-3"></div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md justify-center items-center md:space-y-0">
            <div className=" flex flex-col justify-center items-center md:items-start">
              <span className="text-center mb-2 text-lg font-semibold mt-6">
                آدرس
              </span>
              <span className="text-center mb-2 text-lg font-light md:text-sm md:text-start">
                قم، خیابان صفاییه، کوچه 56، فرعی 13، ساختمان سیما، طبقه 4، واحد
                146
              </span>
              <div className="flex p-3 md:p-0 flex-row-reverse items-center justify-between ">
                <img
                  src={map}
                  className="md:w-56 lg:w-96 lg:h-full md:h-28"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorkWithUs;
