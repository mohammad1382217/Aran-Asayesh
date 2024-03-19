import {
  CustomFlowbiteTheme,
  Flowbite,
  FlowbiteTextInputSizes,
  TextInput,
} from "flowbite-react";
import React from "react";

interface InputProps {
  //   text: string;
  Name?: string,
  sizing?: keyof FlowbiteTextInputSizes;
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
  ClassName?: string;
  maxLength?: number;
  onChange?: React.ChangeEventHandler<HTMLInputElement>
}

const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  sizing,
  ClassName,
  maxLength,
  Name,
  onChange,
}) => {
  const customTheme: CustomFlowbiteTheme = {
    textInput: {
      base: "w-full",
      field: {
        input: {
          base: `w-full !border-[#C8C8C8] outline-none shadow-none bg-white focus:border-2 text-[#C8C8C8] placeholder:text-[#C8C8C8] focus:text-[#7F38B7] hover:!border-[#8754AF] focus:!border-[#7F38B7] focus:ring-[#8754AF]/10 ${ClassName}`,
        },
      },
    },
  };

  return (
    <Flowbite theme={{ theme: customTheme }}>
      <TextInput
        // value={text}
        maxLength={maxLength}
        name={Name}
        sizing={sizing}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      />
    </Flowbite>
  );
};

export default Input;
