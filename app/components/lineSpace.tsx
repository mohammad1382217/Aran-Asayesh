import React from "react";

const LineSpace: React.FC<LineSpaceProps> = ({
  text,
  icon,
  color,
  showMore,
}) => {
  return (
    <div
      className="w-full flex items-center justify-center md:px-3"
      style={{ color: color }}
    >
      {icon}
      <span className={`mx-2 text-lg font-semibold`}>{text}</span>
      {showMore ? (
        <>
          <div
            style={{ borderColor: color }}
            className="flex-1 md:border-b-4 md:border-dotted md:border-3 mx-3"
          ></div>
          <button className="text-sm font-thin"> مشاهده بیشتر &gt;</button>
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
  showMore: boolean;
}
