import { Input } from "@material-tailwind/react";
import React from "react";

interface C_Input {
//   text: string;
  type: string;
  size: any;
  placeholder: string;
  ClassName:string;
}

const C_Input: React.FC<C_Input> = ({  type, size, placeholder ,ClassName}) => {
  return (
      <Input
        // value={text}
        type={type}
        size={size}
        placeholder={placeholder}
        className={`!border-[#C8C8C8] outline-none shadow-none bg-white border-2 text-[#C8C8C8]  placeholder:text-[#C8C8C8] focus:text-[#7F38B7] hover:!border-[#8754AF] hover:!border-t-[#8754AF] focus:!border-[#7F38B7] focus:!border-t-[#7F38B7] focus:ring-[#8754AF]/10 ${ClassName}`}
        labelProps={{
          className: "hidden",
        }}
        containerProps={{ className: "min-w-[90px]" }}
      />
  );
};

export default C_Input;
