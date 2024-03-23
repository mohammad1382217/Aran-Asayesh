import {
  CustomFlowbiteTheme,
  Flowbite,
  FlowbiteTextInputSizes,
  TextInput,
} from "flowbite-react";
import React from "react";

const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  sizing,
  ClassName,
  maxLength,
  Name,
  onChange,
  Icon,
  disabled
}) => {
  const customTheme: CustomFlowbiteTheme["textInput"] = {
    base: "w-full",
    field: {
      icon: {
        base: "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3",
        svg: "h-5 w-5 text-gray-500 dark:text-gray-400",
      },
      input: {
        base: `w-full !border-[#C8C8C8] outline-none shadow-none !bg-white focus:border-2 text-[#C8C8C8] placeholder:text-[#C8C8C8] focus:text-[#7F38B7] hover:!border-[#8754AF] focus:!border-[#7F38B7] focus:ring-[#8754AF]/10 ${ClassName}`,
      },
    },
  };

  return (
    <TextInput
      // value={text}
      disabled={disabled}
      theme={customTheme}
      maxLength={maxLength}
      name={Name}
      sizing={sizing}
      icon={Icon}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Input;

interface InputProps {
  //   text: string;
  Name?: string;
  disabled?: boolean;
  sizing?: keyof FlowbiteTextInputSizes;
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
  ClassName?: string;
  maxLength?: number;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  Icon?: React.FC<React.SVGProps<SVGSVGElement>>;
}
