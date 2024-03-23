import React from "react";
import CardComponent from "../components/Card";
import LineSpace from "../components/lineSpace";
import { TextArea } from "../components/TextArea";
import foodpost from "../assets/images/foodpost.png";
import eitaa from "../assets/images/icons/eitaa.svg";
import telegram from "../assets/images/icons/telegram.svg";
import ImageHomeHeaderLeft2 from "../assets/images/coffee.png";
import ImageHomeHeaderRight from "../assets/images/coffee2.png";
import ImageHomeHeaderLeft1 from "../assets/images/dentist.png";
import { Button, Chip, Typography } from "@material-tailwind/react";
import presentage from "../assets/images/icons/percentage_purple.svg";
import { BreadcrumbsWithIcon } from "../components/BreadcrumbsWithIcon";
import { Link } from "react-router-dom";

const Star = ({ className }: { className: string }) => {
  return (
    <svg
      className={`h-5 w-5 text-yellow-300 ${className}`}
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
};

const Services = () => {
  return (
    <>
      <section className="bg-[#F5F5F5] w-full flex flex-col justify-center py-8">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="w-full flex items-center justify-start rounded-2xl">
            <BreadcrumbsWithIcon
              Address={["رستوران و کافی‌شاپ", "رستوران", "باغ رستوران بهشت"]}
            />
          </div>
        </div>
      </section>
      <section className="bg-[#F5F5F5] w-full flex flex-col justify-center py-8">
        <div className="flex flex-col lg:flex-row container mx-auto px-4 lg:px-8 gap-8 items-center">
          <section className="bg-white flex xs:p-4 p-10 rounded-2xl lg:w-3/4 w-full flex-col items-center gap-5">
            <div className="container flex flex-row justify-center items-center lg:px-3">
              <div className="w-full flex flex-col xl:flex-row xl:justify-between items-center gap-3">
                <div className="flex justify-between items-center sm:flex-col gap-3">
                  <div className="flex flex-col xl:flex-row items-center">
                    <div className="w-20 h-20 bg-[#424242] lg:ml-3 rounded-2xl"></div>
                    <div className="flex flex-col items-center justify-center gap-3">
                      <span className="text-xl sm:text-base font-bold text-[#151515]">
                        باغ رستوران بهشت
                      </span>
                      <div className="flex gap-4">
                        <Chip
                          value="از 10 تا 20 درصد تخفیف"
                          className="bg-[#8754AF]"
                        />
                        <Chip value="کافی‌شاپ" className="bg-[#8754AF]" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-3">
                  <div className="flex">
                    <span className="text-base font-extralight text-[#717171]">
                      امتیاز:
                    </span>
                    <span className="ml-1 mr-1 text-base font-extralight text-[#717171]">
                      4.0
                    </span>
                    <Star className={"text-[#ECECEC]"} />
                    <Star className={""} />
                    <Star className={""} />
                    <Star className={""} />
                    <Star className={""} />
                  </div>
                  <Chip
                    value="تبریک! اشتراک شما شامل این مجموعه میباشد"
                    className="mr-1 text-[#00A040] bg-[#F5F5F5]"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col lg:flex-row justify-center gap-3">
                <div className="flex w-full lg:w-3/4">
                  <img
                    src={ImageHomeHeaderRight}
                    className="bg-cover rounded-t-lg"
                    alt=""
                  />
                </div>
                <div className="flex flex-col lg:w-1/4">
                  <div className="flex lg:flex-col">
                    <img
                      src={ImageHomeHeaderLeft1}
                      className="w-1/2 lg:w-full rounded-t-lg"
                      alt=""
                    />
                    <img
                      src={ImageHomeHeaderLeft2}
                      className="w-1/2 lg:w-full rounded-t-lg"
                      alt=""
                    />
                  </div>
                  <div className="flex lg:flex-col">
                    <img
                      src={ImageHomeHeaderLeft1}
                      className="w-1/2 lg:w-full rounded-t-lg"
                      alt=""
                    />
                    <img
                      src={ImageHomeHeaderLeft2}
                      className="w-1/2 lg:w-full rounded-t-lg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-[#7F38B7] text-2xl font-semibold">
                  درباره باغ رستوران بهشت
                </h3>
                <p className="text-base font-light text-[#303030] text-justify">
                  همه می‌دانیم که خرید خوب و با کیفیت به همراه تخفیف بسیار
                  لذت‌بخش‌تر است.{" "}
                  <span className="text-[#7F38B7] font-semibold">
                    تخفیف کارت آران آسایش
                  </span>{" "}
                  با تعداد زیادی از بهترین مجموعه‌ها و برندها از مشاغل گوناگون
                  در نقاط مختلف کشور عزیزمان وارد مذاکره شده و قراردادهایی را
                  امضا کرده است.
                </p>
              </div>
              <div className="flex">
                <img
                  src={ImageHomeHeaderRight}
                  className="bg-cover rounded-t-lg"
                  alt=""
                />
              </div>
              <div className="w-full flex justify-between">
                <h3 className="text-[#7F38B7] self-center md:self-start text-xl sm:text-2xl font-semibold">
                  اطلاعات تماس این مجموعه
                </h3>
                <div className="lg:flex gap-4 text-[#7F38B7] justify-center hidden">
                  <Link
                    to="#"
                    className="flex !flex-shrink-0 opacity-80 transition-opacity hover:opacity-100"
                  >
                    <img src={telegram} className="w-6 h-6" />
                  </Link>
                  <Link
                    to="#"
                    className="opacity-80 transition-opacity hover:opacity-100"
                  >
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                  <Link
                    to="#"
                    className="flex !flex-shrink-0 opacity-80 transition-opacity hover:opacity-100"
                  >
                    <img className="w-6 h-6" src={eitaa} alt="" />
                  </Link>
                </div>
              </div>
              <div className="w-full flex flex-col-reverse lg:flex-col justify-between gap-4">
                <div className="flex gap-4 text-[#7F38B7] justify-center lg:hidden">
                  <Link
                    to="#"
                    className="flex !flex-shrink-0 opacity-80 transition-opacity hover:opacity-100"
                  >
                    <img src={telegram} className="w-6 h-6" />
                  </Link>
                  <Link
                    to="#"
                    className="opacity-80 transition-opacity hover:opacity-100"
                  >
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                  <Link
                    to="#"
                    className="flex !flex-shrink-0 opacity-80 transition-opacity hover:opacity-100"
                  >
                    <img className="w-6 h-6" src={eitaa} alt="" />
                  </Link>
                </div>
                <div className="w-full flex flex-col justify-between gap-4">
                  <span className="text-[#303030] text-lg font-light">
                    <span className="text-[#7F38B7] text-lg font-semibold">
                      آدرس:
                    </span>{" "}
                    قم، خیابان صفاییه، انتهای کوچه 56، فرعی 13، ساختمان سیما،
                    پلاک 146، کافه سپید
                  </span>
                  <span>
                    <span className="text-[#7F38B7] text-lg font-semibold">
                      شماره تماس:
                    </span>{" "}
                    37894561-025
                  </span>
                </div>
              </div>
              <div className="w-full flex flex-col justify-between mt-4 gap-5">
                <h3 className="text-[#7F38B7] text-2xl font-semibold">
                  ثبت نظر درباره این مجموعه
                </h3>
                <TextArea
                  TextAreaClass={"h-52 p-5 border-[#C8C8C8]"}
                  placeholder={"نظرتان را در مورد این مجموعه بنویسید"}
                  onChange={() => {}}
                />
                <Button
                  className="flex items-center shadow-none !bg-[#8754AF] text-gray-700 hover:!bg-[#8754AF] max-sm:!px-4 w-max self-end px-8 py-2.5"
                  placeholder={undefined}
                >
                  <span className="block antialiased text-white max-[425px]:text-sm text-base font-normal transition-colors">
                    ثبت نظر
                  </span>
                </Button>
              </div>
            </div>
          </section>
          <section className="w-full lg:w-1/4 bg-white flex items-center self-start justify-center xs:p-4 p-10 rounded-2xl">
            <div className="flex flex-col items-center gap-4">
              <LineSpace
                color={`#8754AF`}
                text={"پیشنهادهای ویژه"}
                icon={<img className="w-7 h-7" src={presentage}></img>}
                showMore={false}
              />
              <div className="w-full flex flex-col justify-between gap-6">
                <CardComponent
                  text={"باغ رستوران بهشت"}
                  rate={"4.0"}
                  offer={"20%"}
                  img={foodpost}
                />
                <CardComponent
                  text={"باغ رستوران بهشت"}
                  rate={"4.0"}
                  offer={"20%"}
                  img={foodpost}
                />
                <CardComponent
                  text={"باغ رستوران بهشت"}
                  rate={"4.0"}
                  offer={"20%"}
                  img={foodpost}
                />
                <CardComponent
                  text={"باغ رستوران بهشت"}
                  rate={"4.0"}
                  offer={"20%"}
                  img={foodpost}
                />
                <CardComponent
                  text={"باغ رستوران بهشت"}
                  rate={"4.0"}
                  offer={"20%"}
                  img={foodpost}
                />
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Services;
