import React from "react";

const LineSpace: React.FC<LineSpaceProps> = ({
  text,
  icon,
  ClassName,
  color,
  showMore,
}) => {
  return (
    <div
      className={`w-full flex items-center justify-center md:px-3 ${ClassName}`}
      style={{ color: color }}
    >
      {icon}
      <span className={`sm:mx-2 mr-2 text-sm sm:text-lg font-semibold`}>{text}</span>
      {showMore ? (
        <>
          <div
            style={{ borderColor: color }}
            className="flex-1 md:border-b-4 md:border-dotted md:border-3 sm:mx-3"
          ></div>
          <button className="text-xs sm:text-sm font-thin"> مشاهده بیشتر &gt;</button>
        </>
      ) : null}
    </div>
  );
};

export default LineSpace;

// Types
interface LineSpaceProps {
  text: string;
  icon: React.ReactNode;
  color: string;
  showMore?: boolean;
  ClassName?:string
}
