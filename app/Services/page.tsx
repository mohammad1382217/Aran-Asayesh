import React from "react";
import CardComponent from "../components/Card";
import LineSpace from "../components/lineSpace";
import foodpost from "../assets/images/foodpost.png";
import presentage from "../assets/images/icons/percentage_purple.svg";
import { BreadcrumbsWithIcon } from "../components/BreadcrumbsWithIcon";
import { Button, Chip } from "@material-tailwind/react";

const Services = () => {
  return (
    <>
      <section className="bg-[#F5F5F5] w-full flex flex-col justify-center py-8">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="w-full flex items-center justify-start rounded-2xl">
            <BreadcrumbsWithIcon
              Address={["رستوران و کافی‌شاپ", "رستوران", "باغ رستوران بهشت"]}
            />
          </div>
        </div>
      </section>
      <section className="bg-[#F5F5F5] w-full flex flex-col justify-center py-8">
        <div className="container mx-auto px-4 lg:px-8">
          <section className="w-full flex sm:flex-col rounded-lg items-center justify-between p-3 bg-gray-50">
            <div className="container flex flex-row sm:justify-around items-center px-3">
              <div className="w-20 h-20 bg-[#424242] ml-3 rounded-md"></div>
              <div className="flex justify-start flex-col items-start">
                <p className="text-xl sm:text-base font-bold text-[#151515] flex justify-center items-center sm:flex-row">
                  نام فروشگاه
                  <Chip value="کاربر فعال" className="mr-1" />
                </p>
                <p className="text-md font-normal text-[#151515]">
                  نام مالک فروشگاه
                </p>
                <Button
                  onClick={() => {}}
                  className="p-0"
                  placeholder={undefined}
                >
                  نمایش اطلاعات کاربر
                </Button>
              </div>
            </div>
          </section>
          <section className="bg-white flex p-10 rounded-2xl">
            <div className="w-full my-3 flex flex-col justify-center items-center">
              <LineSpace
                color={`#8754AF`}
                text={"پیشنهادهای ویژه"}
                icon={<img className="w-7 h-7" src={presentage}></img>}
                showMore={false}
              />
              <div className="w-full flex flex-col justify-between my-6 gap-3">
                <CardComponent
                  text={"باغ رستوران بهشت"}
                  rate={"4.0"}
                  offer={"20%"}
                  img={foodpost}
                />
                <CardComponent
                  text={"باغ رستوران بهشت"}
                  rate={"4.0"}
                  offer={"20%"}
                  img={foodpost}
                />
                <CardComponent
                  text={"باغ رستوران بهشت"}
                  rate={"4.0"}
                  offer={"20%"}
                  img={foodpost}
                />
                <CardComponent
                  text={"باغ رستوران بهشت"}
                  rate={"4.0"}
                  offer={"20%"}
                  img={foodpost}
                />
                <CardComponent
                  text={"باغ رستوران بهشت"}
                  rate={"4.0"}
                  offer={"20%"}
                  img={foodpost}
                />
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Services;
