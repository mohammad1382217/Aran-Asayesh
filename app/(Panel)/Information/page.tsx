import React from "react";
import { Button } from "@material-tailwind/react";
import DragUpload from "../../components/DragUpload";
import { TextArea } from "../../components/TextArea";
import Input from "../../components/input";
import { Label } from "flowbite-react";

export const List = [
  { title: "اطلاعات مجموعه", link: "/admin/Information" },
  { title: "تأیید کد تخفیف", link: "/admin/ConfirmCode" },
  { title: "سوابق تخفیف", link: "/admin/DiscountHistory" },
  { title: "خروج از پنل مدیریت", link: "/Login" },
];

const Information = () => {
  return (
    <>
      <div className="w-full flex items-center justify-between gap-4">
        <h1 className="text-[#7F38B7] self-center md:self-start text-2xl sm:text-3xl font-semibold">
          باغ رستوران بهشت
        </h1>
      </div>
      <section className="w-full flex flex-col items-center justify-between">
        <div className="w-full flex flex-col items-center justify-between gap-8">
          <h2 className="text-[#7F38B7] self-center md:self-start text-lg sm:text-xl font-semibold">
            لطفا تصاویر و ویدیو معرفی مجموعه خود را در این قسمت بارگذاری نمایید.{" "}
          </h2>
          <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 items-center gap-2">
            <DragUpload lable={"تصویر 1 (تصویر اصلی)"} />
            <DragUpload lable={"تصویر 2"} />
            <DragUpload lable={"تصویر 3"} />
            <DragUpload lable={"تصویر 4"} />
            <DragUpload lable={"تصویر 5"} />
            <DragUpload lable={"ویدیو معرفی"} />
          </div>
        </div>
        <div className="w-full flex flex-col justify-start mt-4 gap-4 xl:gap-6">
          <h2 className="text-[#7F38B7] self-center md:self-start text-lg sm:text-xl font-semibold">
            در این قسمت میتوانید توضیحات مجموعه خود را مشاهده و ویرایش نمایید.
          </h2>
          <TextArea
            TextAreaClass={"h-40 p-5 border-[#C8C8C8]"}
            placeholder={"توضیحات مجموعه"}
            onChange={() => {}}
          />
          <div className="w-full flex flex-col lg:flex-row justify-start lg:justify-center gap-4">
            <Label
              value="آدرس کامل"
              className="flex items-center text-[#7F38B7] font-bold w-24 xl:w-20"
            />
            <Input
              sizing="md"
              type="text"
              ClassName=""
              placeholder="آدرس مجموعه"
            />
          </div>
          <div className="flex flex-col gap-4">
            <div className="w-full flex flex-col lg:flex-row lg:justify-center gap-6">
              <div className="w-full flex flex-col lg:flex-row lg:items-center lg:justify-center gap-2">
                <Label
                  value="شماره تلفن"
                  className="flex items-center text-[#7F38B7] font-bold w-24"
                />
                <Input
                  sizing="md"
                  type="text"
                  ClassName=""
                  placeholder="09121234567"
                />
              </div>
              <div className="w-full flex flex-col lg:flex-row lg:items-center lg:justify-center gap-2">
                <Label
                  value="ایتا"
                  className="flex items-center text-[#7F38B7] font-bold"
                />
                <Input
                  sizing="md"
                  type="text"
                  ClassName=""
                  placeholder="eitaa.com/example"
                />
              </div>
            </div>
            <div className="w-full flex flex-col lg:flex-row justify-start gap-6">
              <div className="w-full flex flex-col lg:flex-row lg:items-center lg:justify-center gap-4">
                <Label
                  value="اینستاگرام"
                  className="flex items-center text-[#7F38B7] font-bold"
                />
                <Input
                  sizing="md"
                  type="text"
                  ClassName=""
                  placeholder="instagram.com/example"
                />
              </div>
              <div className="w-full flex flex-col lg:flex-row lg:items-center lg:justify-center gap-4">
                <Label
                  value="تلگرام"
                  className="flex items-center text-[#7F38B7] font-bold"
                />
                <Input
                  sizing="md"
                  type="text"
                  ClassName=""
                  placeholder="t.me/example"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="w-full mt-3 flex items-center justify-center lg:justify-end">
        <Button
          className="py-2 px-8 rounded-lg border-[#8754AF] text-lg font-semibold bg-[#8754AF] hover:!bg-[#8754AF] text-white gap-2"
          placeholder={undefined}
        >
          ثبت اطلاعات
        </Button>
      </div>
    </>
  );
};

export default Information;
