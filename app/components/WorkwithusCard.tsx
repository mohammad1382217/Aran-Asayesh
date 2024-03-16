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
      className="flex items-center justify-center md:px-3 bg-[#F5F5F5]"
    >
      <p className="font-semibold text-xl text-center text-[#303030] ">
      {title}
      </p>
      <div
        style={{ borderColor: "#717171" }}
        className="flex-1 md:border-b-4 md:border-dotted md:border-3 mx-3"
      ></div>
      <img src={img} alt="" />
      <span className={`mx-2 text-lg font-semibold`}>{text}</span>
      <Button className="bg-[#8754AF] mt-3">ثبت درخواست</Button>
    </div>
  );
};

export default WorkwithUsCard;
