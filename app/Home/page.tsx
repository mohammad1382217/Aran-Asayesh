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
import bazar from "../assets/bazar.svg";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col bg-[#F5F5F5] justify-center items-center">
      <div className="flex flex-col lg:w-9/12 w-11/12 md:flex-row  px-5">
        <div className="flex">
          <img
            src={ImageHomeHeaderRight}
            className="md:w-8/12 rounded-t-lg"
            alt=""
          />
          <div className="flex flex-row md:flex-col md:w-4/12">
            <img
              src={ImageHomeHeaderLeft1}
              className="w-6/12 md:w-full rounded-t-lg"
              alt=""
            />
            <img
              src={ImageHomeHeaderLeft2}
              className="w-6/12 md:w-full rounded-t-lg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row lg:w-9/12 w-11/12 justify-between px-5">
        <img
          src={ImageHomeHeaderLeft1}
          className="w-4/12 rounded-t-lg"
          alt=""
        />
        <img
          src={ImageHomeHeaderLeft2}
          className="w-4/12 rounded-t-lg"
          alt=""
        />
        <img
          src={ImageHomeHeaderLeft2}
          className="w-4/12 rounded-t-lg"
          alt=""
        />
      </div>
      <div className="bg-[#8448B2] w-full my-3 flex flex-col justify-center items-center">
        <div className="mt-10 lg:w-9/12 w-11/12 ">
          <LineSpace
            color={`#FFFFFF`}
            text={"پیشنهادهای ویژه"}
            icon={<img className="w-7 h-7" src={presentage}></img>}
          />
          <div className="flex flex-row mb-1 justify-between overflow-x-scroll ">
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
      <div className="lg:w-9/12 w-11/12">
        <div className="mt-10 mx-auto ">
          <LineSpace
            color={`#717171`}
            text={"رستوران و کافی‌شاپ"}
            icon={<img className="w-7 h-7" src={foodIcon}></img>}
          />
          <div className="flex flex-row justify-between overflow-x-scroll">
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
          />
          <div className="flex flex-row justify-between overflow-x-scroll">
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
          />
          <div className="flex flex-row justify-between overflow-x-scroll">
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
          />
          <div className="flex flex-row justify-between overflow-x-scroll">
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
          />
          <div className="flex flex-row justify-between overflow-x-scroll">
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
            text={"خدمات"}
            icon={<img className="w-7 h-7" src={teacher}></img>}
          />
          <div className="flex flex-row justify-between overflow-x-scroll">
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
      <div className="w-full md:h-72 lg:h-80 md:mt-48 bg-[#FFFFFF] mt-10 px-10 flex flex-row justify-center items-center">
        <div className="md:flex md:justify-center">
          <div className="order-2 md:w-6/12 md:-mr-6 md:flex md:justify-center md:flex-col">
            <h1 className="text-lg font-semibold text-[#303030] p-5 md:p-2">
              با اپلیکیشن آران آسایش، ساده‌تر از همیشه تخفیف بگیر!
            </h1>
            <p className="max-w-lg text-sm font-light text-[#717171] px-5 md:px-2 mb-3 text-justify">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد.
            </p>
          </div>
          <img
            src={app_phone}
            className="md:relative -top-[50px]"
            alt=""
          />
          <div className="md:flex flex-col hidden md:justify-center md:flex-col md:order-3">
            <Button
              className="flex  bg-[#F5F5F5] text-gray-700 hover:!bg-transparent px-[0.3rem] py-[0.8rem] items-center justify-center"
              placeholder={undefined}
            >
              <HiDownload className="w-6 h-6 text-[#7F38B7]" />
              <p className="block antialiased text-gray-700 text-base md:text-base font-semibold transition-colors bg-transparent">
                دانلود مستقیم
              </p>
            </Button>
            <Button
              className="flex mt-5 bg-[#F5F5F5] text-gray-700 hover:!bg-transparent px-[0.3rem] py-[0.8rem] items-center justify-center"
              placeholder={undefined}
            >
              <img src={bazar} className="w-8 h-8" />
              <p className="block antialiased text-gray-700 text-base md:text-base font-semibold transition-colors bg-transparent">
                دانلود از کافه بازار
              </p>
            </Button>
          </div>
          {/* small size */}
          <div className="flex flex-row justify-around items-end md:hidden">
            <img src={app_phone} className="w-5/12 md:order-1" alt="" />
            <div className="flex flex-col md:order-3 w-6/12">
              <Button
                className="flex  bg-[#F5F5F5] text-gray-700 hover:!bg-transparent px-[0.1rem] py-[0.8rem] items-center justify-center"
                placeholder={undefined}
              >
                <HiDownload className="w-6 h-6 text-[#7F38B7]" />
                <p className="block antialiased text-gray-700 text-base md:text-base font-semibold transition-colors bg-transparent">
                  دانلود مستقیم
                </p>
              </Button>
              <Button
                className="flex mt-5 bg-[#F5F5F5] text-gray-700 hover:!bg-transparent px-[0.1rem] py-[0.8rem] items-center justify-center"
                placeholder={undefined}
              >
                <img src={bazar} className="w-8 h-8" />
                <p className="block antialiased text-gray-700 text-xs md:text-base font-semibold transition-colors bg-transparent">
                  دانلود از کافه بازار
                </p>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
