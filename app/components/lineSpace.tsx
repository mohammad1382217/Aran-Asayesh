import React from "react";

interface LineSpaceProps {
  text: string;
  icon: React.ReactNode;
  color: string;
}

const LineSpace: React.FC<LineSpaceProps> = ({ text, icon, color }) => {
  return (
    <div
      className="w-full flex items-center justify-center md:px-3"
      style={{ color: color }}
    >
      {icon}
      <span className={`mx-2 text-lg font-semibold`}>{text}</span>
      <div
        style={{ borderColor: color }}
        className="flex-1 md:border-b-4 md:border-dotted md:border-3 mx-3"
      ></div>
      <button className="text-sm font-thin"> مشاهده بیشتر &gt;</button>
    </div>
  );
};

export default LineSpace;
