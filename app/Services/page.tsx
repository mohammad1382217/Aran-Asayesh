import React from "react";
import { BreadcrumbsWithIcon } from "../components/BreadcrumbsWithIcon";
import LineSpace from "../components/lineSpace";
import presentage from "../assets/images/icons/percentage_purple.svg";
import foodpost from "../assets/images/foodpost.png";
import CardComponent from "../components/Card";

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
          <section></section>
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
