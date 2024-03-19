import "./Home.scss";
import React from "react";
import ImageHomeHeaderLeft2 from "../assets/images/coffee.png";
import ImageHomeHeaderRight from "../assets/images/coffee2.png";
import ImageHomeHeaderLeft1 from "../assets/images/dentist.png";
import presentage from "../assets/images/icons/percentage-square.svg";
import foodIcon from "../assets/images/icons/hamperger.png";
import foodpost from "../assets/images/foodpost.png";
import health from "../assets/images/icons/health.svg";
import recreational from "../assets/images/icons/recreational.svg";
import teacher from "../assets/images/icons/teacher.svg";
import app_phone from "../assets/images/appmobileHome.png";
import LineSpace from "../components/lineSpace";
import CardComponent from "../components/Card";
import { HiDownload } from "react-icons/hi";
import { Button } from "@material-tailwind/react";
import bazar from "../assets/images/icons/bazar.svg";

const Home: React.FC = () => {
  return (
    <>
      <section className="flex flex-col justify-center items-center">
        <div className="container mx-auto px-8 xl:px-4">
          <div className="w-full flex flex-col pt-6">
            <div className="w-full flex flex-col sm:flex-row">
              <div className="md:w-2/3 rounded-3xl rounded-t-lg">
                <img
                  className="rounded-2xl"
                  src={ImageHomeHeaderRight}
                  alt=""
                />
              </div>
              <div className="flex flex-row sm:flex-col md:w-1/3">
                <img
                  src={ImageHomeHeaderLeft1}
                  className="w-1/2 sm:w-full rounded-t-lg"
                  alt=""
                />
                <img
                  src={ImageHomeHeaderLeft2}
                  className="w-1/2 sm:w-full rounded-t-lg"
                  alt=""
                />
              </div>
            </div>
            <div className="w-full flex flex-row justify-between pb-6">
              <img
                src={ImageHomeHeaderLeft1}
                className="w-1/3 rounded-t-lg"
                alt=""
              />
              <img
                src={ImageHomeHeaderLeft2}
                className="w-1/3 rounded-t-lg"
                alt=""
              />
              <img
                src={ImageHomeHeaderLeft2}
                className="w-1/3 rounded-t-lg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-[#8448B2] flex flex-col justify-center items-center">
        <div className="container mx-auto px-8 xl:px-4">
          <div className="w-full my-3 flex flex-col justify-center items-center mt-10">
            <LineSpace
              color={`#FFFFFF`}
              text={"پیشنهادهای ویژه"}
              icon={<img className="w-7 h-7" src={presentage}></img>}
              showMore={true}
            />
            <div className="w-full p-1 flex justify-between my-6 overflow-x-scroll gap-3">
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
        </div>
      </section>
      <section className="w-full bg-[#F5F5F5] flex flex-col justify-center items-center">
        <div className="container mx-auto px-8 xl:px-4">
          <div className="w-full mb-28">
            <div className="w-full my-3 flex flex-col justify-center items-center mt-10">
              <LineSpace
                color={`#717171`}
                ClassName={"text-base"}
                text={"رستوران و کافی‌شاپ"}
                icon={<img className="w-7 h-7" src={foodIcon}></img>}
                showMore={true}
              />
              <div className="w-full p-1  flex justify-between my-6 overflow-x-scroll lg:overflow-hidden gap-3">
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
            <div className="mt-10 mx-auto">
              <LineSpace
                color={`#717171`}
                text={"تفریحی و ورزشی"}
                icon={<img className="w-7 h-7" src={recreational}></img>}
                showMore={true}
              />
              <div className="w-full p-1  flex justify-between my-6 overflow-x-scroll gap-3">
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
            <div className="mt-10 mx-auto">
              <LineSpace
                color={`#717171`}
                text={"پزشکی و سلامت"}
                icon={<img className="w-7 h-7" src={health}></img>}
                showMore={true}
              />
              <div className="w-full p-1  flex justify-between my-6 overflow-x-scroll gap-3">
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
            <div className="mt-10 mx-auto">
              <LineSpace
                color={`#717171`}
                text={"هنری و آموزشی"}
                icon={<img className="w-7 h-7" src={teacher}></img>}
                showMore={true}
              />
              <div className="w-full p-1 flex justify-between my-6 overflow-x-scroll gap-3">
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
            <div className="mt-10 mx-auto">
              <LineSpace
                color={`#717171`}
                text={"زیبایی و آرایشی"}
                icon={<img className="w-7 h-7" src={teacher}></img>}
                showMore={true}
              />
              <div className="w-full p-1 flex justify-between my-6 overflow-x-scroll gap-3">
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
            <div className="mt-10 mx-auto">
              <LineSpace
                ClassName={""}
                color={`#717171`}
                text={"خدمات"}
                icon={<img className="w-7 h-7" src={teacher}></img>}
                showMore={true}
              />
              <div className="w-full p-1 flex justify-between my-6 overflow-x-scroll gap-3">
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
          </div>
        </div>
      </section>
      <section className="w-full flex flex-col justify-center items-center xl:h-[327px] ">
        <div className="container mx-auto px-8 xl:px-4">
          <div className="w-full  lg:h-80 bg-white flex flex-row justify-center items-center">
            <div className="w-full lg:flex lg:justify-center lg:gap-8">
              <div className="order-2 lg:w-10/12 lg:-mr-32 lg:flex lg:justify-center lg:flex-col">
                <h1 className="text-xl font-semibold text-[#303030] p-5 lg:p-2">
                  با اپلیکیشن آران آسایش، ساده‌تر از همیشه تخفیف بگیر!
                </h1>
                <p className="text-base font-light text-[#717171] text-justify px-4 pb-6">
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
              <img
                src={app_phone}
                className="lg:bottom-10 lg:-right-16 lg:w-5/12 lg:relative hidden lg:inline-flex lg:order-1"
                alt=""
              />
              <div className="w-[320px] lg:flex flex-col hidden items-center lg:justify-center lg:order-3 gap-5">
                <Button
                  className="w-full flex bg-[#F5F5F5] text-gray-700 hover:!bg-transparent items-center justify-center"
                  placeholder={undefined}
                >
                  <HiDownload className="w-6 h-6 text-[#7F38B7]" />
                  <span className="block antialiased text-gray-700 text-base lg:text-sm font-semibold transition-colors bg-transparent">
                    دانلود مستقیم
                  </span>
                </Button>
                <Button
                  className="w-full flex bg-[#F5F5F5] text-gray-700 hover:!bg-transparent items-center justify-center"
                  placeholder={undefined}
                >
                  <img src={bazar} className="w-8 h-8" />
                  <span className="block antialiased text-gray-700 text-base lg:text-xs font-semibold transition-colors bg-transparent">
                    دانلود از کافه بازار
                  </span>
                </Button>
              </div>
              {/* small size */}
              <div className="flex flex-row justify-around items-center lg:hidden">
                <img src={app_phone} className="w-1/2 lg:order-1" alt="" />
                <div className="flex flex-col items-center justify-center lg:order-3 w-1/2 gap-5 !py-6">
                  <Button
                    className="w-full flex bg-[#F5F5F5] text-gray-700 hover:!bg-transparent px-[0.1rem] py-[0.8rem] items-center justify-center"
                    placeholder={undefined}
                  >
                    <HiDownload className="w-6 h-6 text-[#7F38B7]" />
                    <span className="block antialiased text-gray-700 text-xs lg:text-base font-semibold transition-colors bg-transparent">
                      دانلود مستقیم
                    </span>
                  </Button>
                  <Button
                    className="w-full flex bg-[#F5F5F5] text-gray-700 hover:!bg-transparent px-[0.1rem] py-[0.8rem] items-center justify-center"
                    placeholder={undefined}
                  >
                    <img src={bazar} className="w-8 h-8" />
                    <span className="block antialiased text-gray-700 text-xs lg:text-base font-semibold transition-colors bg-transparent">
                      دانلود از کافه بازار
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
