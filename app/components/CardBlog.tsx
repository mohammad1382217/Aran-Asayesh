import React from "react";
import { Card } from "flowbite-react";

interface CardComponentBlog {
  title: string;
  text: string;
  img: string;
  date: string;
}

const CardComponentBlog: React.FC<CardComponentBlog> = ({ text,title, img, date }) => {
  return (
    <Card
      className="max-w-64 md:max-w-72 card cursor-pointer"
      imgSrc={img} imgAlt=""
    >
      <h5 className="text-lg font-light tracking-tight text-[#303030] dark:text-white self-start pr-5 mt-4">
        {title}
      </h5>
      <p className="text-[#303030] text-base font-thin text-justify  px-5 ml-5 -mt-2">
        {text}
      </p>
      <div className="w-[90%] md:w-[80%] -mt-3 flex flex-row items-center justify-between self-start pr-2">
        <div className="flex">
          <p className="text-base font-extralight text-[#C8C8C8]">{date}</p>
        </div>
        <span className="mr-2 text-sm md:text-base font-extralight text-[#C8C8C8]">
        ادامه مطلب
        </span>
      </div>
    </Card>
  );
};
export default CardComponentBlog;
