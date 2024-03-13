import React from "react";
// import ImageIcon from "./path/to/icon.png";

interface LineSpaceProps {
  text: string;
  icon: React.ReactNode;
  color: string;
}

const LineSpace: React.FC<LineSpaceProps> = ({ text, icon, color }) => {
  return (
    <div
      className="flex items-center justify-center px-3"
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
