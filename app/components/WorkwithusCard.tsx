import { Button } from "@material-tailwind/react";
import React from "react";

interface WorkwithUsCardProps {
  title: string;
  text: string;
  img:string;
}

const WorkwithUsCard: React.FC<WorkwithUsCardProps> = ({
  text,
  img,
  title,
}) => {
  return (
    <div
      className="flex flex-col box_shadow rounded-2xl p-10 items-center justify-center md:px-3 bg-[#F5F5F5]"
    >
      <p className="font-semibold text-lg text-center text-[#303030] ">
      {title}
      </p>
      <div
        style={{ borderColor: "#717171"}}
        className="flex-1 w-full h-[3px] my-4 border-b-4 border-dotted border-1 mx-1-"
      ></div>
      <img src={img} alt="" />
      <span className={`mx-2 text-sm font-light`}>{text}</span>
      <Button className="bg-[#8754AF] mt-3">ثبت درخواست</Button>
    </div>
  );
};

export default WorkwithUsCard;
