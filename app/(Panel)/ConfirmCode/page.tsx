import React, { useRef, useState } from "react";
import Input from "../../components/input";
import { Button } from "flowbite-react";
import { Input as MaterialInput } from "@material-tailwind/react";

const ConfirmCode = () => {
  const [showValue, setShowValue] = useState(true);
  const firstInputRef = useRef<HTMLInputElement>(null);
  const secondInputRef = useRef<HTMLInputElement>(null);
  const thirdInputRef = useRef<HTMLInputElement>(null);
  const fourthInputRef = useRef<HTMLInputElement>(null);
  const fifthInputRef = useRef<HTMLInputElement>(null);
  const sixInputRef = useRef<HTMLInputElement>(null);

  const handleInputFocus = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const { value } = target;

    if (value.length === 1 && e.key !== "Delete" && e.key !== "Backspace") {
      const form = target.form;
      if (form) {
        const index = [...form.elements].indexOf(target);
        if (index !== -1 && index < form.elements.length - 1) {
          const nextElement = form.elements[index + 1] as HTMLInputElement;
          if (nextElement) {
            nextElement.focus();
          }
        }
      }
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center gap-4">
      <h1 className="text-[#7F38B7] self-start md:self-center text-xl sm:text-2xl font-semibold">
        لطفاً کد تخفیف را وارد نمایید
      </h1>
      <div className="relative">
        <Input ClassName="w-80 text-base tracking-[1.45rem] h-14" maxLength={6} ></Input>
        <form className="absolute bottom-2 flex items-center flex-row-reverse justify-center w-full">
          <MaterialInput
            maxLength={1}
            size="md"
            className="text-center !w-8 !border-0 outline-none shadow-none bg-white !border-b-2 text-[#C8C8C8] placeholder:text-[#C8C8C8] focus:text-[#7F38B7] focus:border-[#7F38B7] focus:ring-[#8754AF]/10"
            labelProps={{
              className: "hidden",
            }}
            containerProps={{
              className: "inline-flex w-auto min-w-[40px] !w-[40px]",
            }}
            crossOrigin={undefined}
            onKeyUp={handleInputFocus}
            ref={firstInputRef}
          />
          <MaterialInput
            maxLength={1}
            size="md"
            className="text-center !w-8 !border-0 outline-none shadow-none bg-white !border-b-2 text-[#C8C8C8] placeholder:text-[#C8C8C8] focus:text-[#7F38B7] focus:border-[#7F38B7] focus:ring-[#8754AF]/10"
            labelProps={{
              className: "hidden",
            }}
            containerProps={{
              className: "inline-flex w-auto min-w-[40px] !w-[40px]",
            }}
            crossOrigin={undefined}
            onKeyUp={handleInputFocus}
            ref={secondInputRef}
          />
          <MaterialInput
            maxLength={1}
            size="md"
            className="text-center !w-8 !border-0 outline-none shadow-none bg-white !border-b-2 text-[#C8C8C8] placeholder:text-[#C8C8C8] focus:text-[#7F38B7] focus:border-[#7F38B7] focus:ring-[#8754AF]/10"
            labelProps={{
              className: "hidden",
            }}
            containerProps={{
              className: "inline-flex w-auto min-w-[40px] !w-[40px]",
            }}
            crossOrigin={undefined}
            onKeyUp={handleInputFocus}
            ref={thirdInputRef}
          />
          <MaterialInput
            maxLength={1}
            size="md"
            className="text-center !w-8 !border-0 outline-none shadow-none bg-white !border-b-2 text-[#C8C8C8] placeholder:text-[#C8C8C8] focus:text-[#7F38B7] focus:border-[#7F38B7] focus:ring-[#8754AF]/10"
            labelProps={{
              className: "hidden",
            }}
            containerProps={{
              className: "inline-flex w-auto min-w-[40px] !w-[40px]",
            }}
            crossOrigin={undefined}
            onKeyUp={handleInputFocus}
            ref={fourthInputRef}
          />
          <MaterialInput
            maxLength={1}
            size="md"
            className="text-center !w-8 !border-0 outline-none shadow-none bg-white !border-b-2 text-[#C8C8C8] placeholder:text-[#C8C8C8] focus:text-[#7F38B7] focus:border-[#7F38B7] focus:ring-[#8754AF]/10"
            labelProps={{
              className: "hidden",
            }}
            containerProps={{
              className: "inline-flex w-auto min-w-[40px] !w-[40px]",
            }}
            crossOrigin={undefined}
            onKeyUp={handleInputFocus}
            ref={fifthInputRef}
          />
          <MaterialInput
            maxLength={1}
            size="md"
            className="text-center !w-8 !border-0 outline-none shadow-none bg-white !border-b-2 text-[#C8C8C8] placeholder:text-[#C8C8C8] focus:text-[#7F38B7] focus:border-[#7F38B7] focus:ring-[#8754AF]/10"
            labelProps={{
              className: "hidden",
            }}
            containerProps={{
              className: "inline-flex w-auto min-w-[40px] !w-[40px]",
            }}
            crossOrigin={undefined}
            onKeyUp={handleInputFocus}
            ref={sixInputRef}
          />
        </form>
      </div>
      <Button
        type="button"
        color="gray"
        className="text-[#7F38B7] bg-gray-100 mt-4"
        onClick={() => setShowValue(false)}
      >
        {showValue ? "بررسی کد تخفیف" : "در حال بررسی"}
      </Button>
    </div>
  );
};

export default ConfirmCode;
