import React from "react";
import { Card } from "flowbite-react";

interface CardComponent {
  text: string;
  img: string;
  rate: string;
  offer: string[];
}

const CardComponent: React.FC<CardComponent> = ({ text, img, rate, offer }) => {
  return (
    <Card
      className="max-w-72  mt-10 mr-2 mb-3 p-0 card cursor-pointer"
      imgSrc=""
    >
      <img className=" -mt-1 w-[105%] !max-w-[101%]" src={img} alt="" />
      {/* <a href="#"> */}
      <h5 className="text-lg mr-5 font-light tracking-tight text-[#303030] dark:text-white">
        {text}
      </h5>
      {/* </a> */}
      <div className="mb-5 mt-2.5  flex items-center justify-center">
        <div className="flex">
          <p className="text-base font-extralight text-[#717171]">امتیاز:</p>
          <span className="ml-1 mr-1 text-base font-extralight text-[#717171]">
            {rate}
          </span>
          <svg
            className="h-5 w-5 text-yellow-300"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </div>
        <span className="mr-2 text-base font-extralight text-[#717171]">
          از{offer[0]} تا{" "}
          <span className="text-base lg:text-xs font-extralight text-[#717171]">
            <span className="text-[#7F38B7] lg:text-lg text-2xl font-semibold">
              {offer[1]}
            </span>{" "}
            تخفیف{" "}
          </span>
        </span>
      </div>
    </Card>
  );
};
export default CardComponent;
