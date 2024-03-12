import React from "react";
import ImageHomeHeaderRight from "../assets/images/coffee2.png";
import ImageHomeHeaderLeft1 from "../assets/images/dentist.png";
import ImageHomeHeaderLeft2 from "../assets/images/coffee.png";
import presentage from "../assets/images/icons/percentage-square.svg";
import foodpost from "../assets/images/foodpost.png";
import LineSpace from "../components/lineSpace";
import { Card } from "flowbite-react";
import "./style.css";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col mt-40 justify-center ">
      <div className="  flex justify-center">
        <img src={ImageHomeHeaderRight} className="w-2/4 rounded-t-lg" alt="" />
        <div className="flex flex-col w-1/4">
          <img
            src={ImageHomeHeaderLeft1}
            className="w-full rounded-t-lg"
            alt=""
          />
          <img
            src={ImageHomeHeaderLeft2}
            className="w-full rounded-t-lg"
            alt=""
          />
        </div>
      </div>
      <div className="bg-[#F5F5F5] mt-3 flex justify-center">
        <div className="mt-10 w-9/12">
          <LineSpace
            color={`#8754AF`}
            text={"پیشنهادهای ویژه"}
            icon={<img className="w-7 h-7" src={presentage}></img>}
          />
          <Card
            className="max-w-72 mt-10 mb-10 p-0 card"
            //   imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
            imgSrc=""
          >
            <img src={foodpost} alt="" />
            <a href="#">
              <h5 className="text-xl mr-3 font-semibold tracking-tight text-gray-900 dark:text-white">
                باغ رستوران بهشت
              </h5>
            </a>
            <div className="mb-5 mt-2.5  flex items-center justify-center">
              <p>امتیاز :</p>

              <span className="ml-1 mr-1  text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
                4.1
              </span>
              <svg
                className="h-5 w-5 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>

              <span className="mr-5">
                از 10% تا <span className="text-lg">تخفیف <span className="text-[#7F38B7]"> %20</span></span>
              </span>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
export default Home;
