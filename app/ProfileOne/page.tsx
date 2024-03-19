import React from "react";
import { CustomFlowbiteTheme, Flowbite, ListGroup } from "flowbite-react";
import { BreadcrumbsWithIcon } from "../components/BreadcrumbsWithIcon";
import copy from "../assets/images/icons/copy to clipboard.svg";
import qr_code from "../assets/mobile-client-qr-code-settings.svg";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const ProfileOne: React.FC = () => {
  const customTheme: CustomFlowbiteTheme = {
    listGroup: {
      root: {
        base: "w-full flex flex-col items-center justify-items-center h-max list-none rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-900 lg:w-48",
      },
      item: {
        link: {
          base: "flex items-center justify-center w-full border-b border-gray-200 py-4 px-4",
        },
        base: "w-full flex items-center justify-center xl:w-48",
      },
    },
  };

  return (
    <>
      <section className="bg-[#F5F5F5] w-full flex flex-col justify-center py-8">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="w-full flex items-center justify-start rounded-2xl">
            <BreadcrumbsWithIcon Address={["پروفایل کاربری", "اطلاعات حساب"]} />
          </div>
        </div>
      </section>
      <section className="bg-[#F5F5F5] w-full flex flex-col justify-center py-8">
        <div className="flex flex-col lg:flex-row container mx-auto px-4 lg:px-8 gap-8">
          <section className="flex justify-center">
            <Flowbite theme={{ theme: customTheme }}>
              <ListGroup>
                <Link className="w-full flex text-center" to={"/ProfileOne"}>
                  <ListGroup.Item>اطلاعات حساب</ListGroup.Item>
                </Link>
                <Link className="w-full flex text-center" to={"/ProfileTwo"}>
                  <ListGroup.Item>تاریخچه تخفیف</ListGroup.Item>
                </Link>
                <Link className="w-full flex text-center" to={"/Login"}>
                  <ListGroup.Item>خروج از حساب</ListGroup.Item>
                </Link>
              </ListGroup>
            </Flowbite>
          </section>
          <section className="bg-white flex flex-col p-12 rounded-2xl w-full sm:flex-col items-center justify-between gap-5">
            <div className="w-full flex items-center justify-between gap-4">
              <h3 className="text-xl font-semibold">اطلاعات کاربری</h3>
              <div className="relative flex items-center font-sans font-bold uppercase whitespace-nowrap select-none py-1.5 px-3 text-xs p-2 rounded-2xl text-[#8754AF] border-none bg-[#F5F5F5] gap-2">
                <img src={copy} />
                <span className="text-lg">457481</span>
              </div>
            </div>
            <section className="w-full flex items-center justify-between">
              <div className="w-full flex flex-col lg:flex-row-reverse items-center justify-between gap-8">
                <div className="w-full lg:w-auto flex flex-col items-center">
                  <img className="w-full lg:w-auto" src={qr_code} alt="" />
                  <span className="text-lg">Q a 7 % f a A p</span>
                </div>
                <div className="flex flex-col gap-5">
                  <div className="w-full flex flex-col xl:flex-row justify-start mt-4  gap-10 xl:gap-10">
                    <div className="flex gap-2">
                      <span className="text-[#7F38B7]">نام</span>
                      <span className="text-[#303030]">علیرضا</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-[#7F38B7]">نام خانوادگی</span>
                      <span className="text-[#303030]">فراهانی</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-[#7F38B7]">تاریخ تولد</span>
                      <span className="text-[#303030]">1368/05/12</span>
                    </div>
                  </div>
                  <div className="w-full flex flex-col xl:flex-row justify-start mt-4  gap-10 xl:gap-10">
                    <div className="flex gap-2">
                      <span className="text-[#7F38B7]">شماره تماس</span>
                      <span className="text-[#303030]">09121235678</span>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-2">
                      <span className="text-[#7F38B7]">آدرس ایمیل</span>
                      <span className="text-[#303030]">
                        alirezafarahani51@gmail.com
                      </span>
                    </div>
                  </div>
                  <div className="w-full flex flex-col lg:flex-row justify-start mt-4  gap-10 xl:gap-10">
                    <div className="flex gap-2">
                      <span className="text-[#7F38B7]">استان</span>
                      <span className="text-[#303030]">قم</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-[#7F38B7]">استان</span>
                      <span className="text-[#303030]">قم</span>
                    </div>
                  </div>
                  <div className="w-full flex flex-col lg:flex-row justify-start mt-4  gap-10 xl:gap-10">
                    <div className="flex flex-col lg:flex-row gap-2">
                      <span className="text-[#7F38B7]">آدرس</span>
                      <span className="text-[#303030]">
                        خیابان صدوقی، فلکه میرقیصری، کوچه 54، پلاک 73، طبقه
                        چهارم، واحد 126
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div className="w-full flex items-center justify-center lg:justify-end">
              <Button
                className="py-2 px-8 rounded-lg border-[#8754AF] text-lg font-semibold bg-[#8754AF] hover:!bg-[#8754AF] text-white gap-2"
                placeholder={undefined}
              >
                ویرایش اطلاعات
              </Button>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default ProfileOne;
