import { Button } from "@material-tailwind/react";
import React from "react";

interface WorkwithUsCardProps {
  title: string;
  text: string;
  img: string;
}

const WorkwithUsCard: React.FC<WorkwithUsCardProps> = ({
  text,
  img,
  title,
}) => {
  return (
    <div className="flex flex-col md:mx-4 box_shadow rounded-2xl p-10 items-center justify-center md:p-5 bg-[#F5F5F5]">
      <div className="flex flex-col md:flex-row md:items-center">
      <p className="font-semibold mt-3 md:my-3 text-lg text-center text-[#303030] ">
        {title}
      </p>
      <div
        style={{ borderColor: "#717171" }}
        className="flex-1 md:w-48 lg:w-72 md:m-3 w-full h-[3px] my-4 border-b-4 border-dotted border-1 mx-1-"
      ></div>
      </div>
      <div className="flex flex-col md:flex-row">
      <img src={img} className="md:w-6/12 md:p-5" alt="" />
      <div className="md:w-6/12 md:m-4">
      <span className={` text-sm font-light text-justify`}>{text}</span>
      <Button className="bg-[#8754AF] mt-5 w-full" placeholder={undefined}>ثبت درخواست</Button>
      </div>
      </div>
    </div>
  );
};

export default WorkwithUsCard;
