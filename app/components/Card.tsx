import React from "react";
import { Card } from "flowbite-react";

interface CardComponent {
  text: string;
  img: string;
  rate: string;
  offer: string;
}

const CardComponent: React.FC<CardComponent> = ({ text, img, rate, offer }) => {
  return (
    <Card
      className="max-w-64 md:max-w-60 lg:max-w-72 lg:h-auto h-64 card cursor-pointer"
      imgSrc={img} imgAlt=""
    >
      <h5 className="text-lg font-light tracking-tight text-[#303030] dark:text-white self-start pr-2">
        {text}
      </h5>

      <div className="w-[90%] md:w-[80%] lg:w-[95%] flex items-center justify-between self-start pr-2">
        <div className="flex">
          <span className="text-base font-extralight text-[#717171]">امتیاز:</span>
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
        <span className="mr-2 text-sm md:text-base font-extralight text-[#717171]">
          <span className="text-xs lg:text-base font-extralight text-[#717171]">
             تا
            <span className="text-[#7F38B7] lg:text-lg text-xl font-semibold">
              {offer}
            </span>{" "}
            تخفیف {"  "}
          </span>
        </span>
      </div>
    </Card>
  );
};
export default CardComponent;
