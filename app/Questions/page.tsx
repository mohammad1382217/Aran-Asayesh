import React from "react";
import question from "../assets/question.svg";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  Chip,
} from "@material-tailwind/react";

const Icon = ({ id, open }: { id: number; open: number }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
};

const Questions = () => {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  return (
    <section className="w-full h-full flex items-center bg-[#F5F5F5]">
      <div className="w-full flex items-center justify-between bg-white max-w-7xl mx-auto my-10">
        <div className="w-full flex flex-col items-center justify-between bg-white px-20 py-10 rounded-2xl">
          <div className="w-full flex items-center justify-between">
            <div className="flex items-center justify-center">
              <div className="flex items-center justify-center">
                <div className="flex flex-col">
                  <h1 className="text-6xl text-[#7F38B7] font-semibold p-6">
                    سوالی دارید؟
                  </h1>
                  <h2 className="text-4xl font-semibold p-4">
                    ما اینجا هستیم تا پاسخگوی شما باشیم.
                  </h2>
                  <div className="flex gap-4 pt-10 pb-5">
                    <Chip
                      className="text-[#8754AF] border-none bg-[#F5F5F5]"
                      variant="outlined"
                      value="کاربران"
                    />
                    <Chip
                      className="text-[#8754AF] border-none bg-[#F5F5F5]"
                      variant="outlined"
                      value="مجموعه‌ها و زیر‌مجموعه‌ها"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img src={question} alt="" />
            </div>
          </div>
          <div className="h-[1px] mx-auto my-6 w-full bg-[#C8C8C8]"></div>
          <Accordion open={open === 1} icon={<Icon id={1} open={open} />} placeholder={undefined}>
            <AccordionHeader
              className="border-none text-lg bg-[#F5F5F5] rounded-2xl py-2 px-6"
              onClick={() => handleOpen(1)}
              placeholder={undefined}
            >
              چگونه می‌توانم کسب و کار خود را در آران آسایش ثبت کنم؟
            </AccordionHeader>
            <AccordionBody>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و 
            </AccordionBody>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Questions;
