import React from "react";
import { Link } from "react-router-dom";
import CardProfile from "../components/CardProfile";
import { BreadcrumbsWithIcon } from "../components/BreadcrumbsWithIcon";
import { ListGroup } from "flowbite-react";
import FlowbiteListGroup from "../components/ListGroup";

const ProfileTwo: React.FC = () => {
  const List = [
    { title: "اطلاعات حساب", link: "/ProfileOne" },
    { title: "تاریخچه تخفیف", link: "/ProfileTwo" },
    { title: "خروج از حساب", link: "/Login" },
  ];

  return (
    <>
      <section className="bg-[#F5F5F5] w-full flex flex-col justify-center py-8">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="w-full flex items-center justify-start rounded-2xl">
            <BreadcrumbsWithIcon
              Address={["پروفایل کاربری", "تاریخچه تخفیف"]}
            />
          </div>
        </div>
      </section>
      <section className="bg-[#F5F5F5] w-full flex flex-col justify-center py-8">
        <div className="flex flex-col lg:flex-row container mx-auto px-4 lg:px-8 gap-8">
          <section className="flex justify-center">
            <FlowbiteListGroup List={List} />
          </section>
          <section className="w-full flex rounded-2xl sm:flex-col items-center justify-between gap-5">
            <div className="w-full flex flex-col xl:flex-row items-center justify-between">
              <div className="w-full xl:w-[calc(50%-20px)] flex flex-col gap-4">
                <CardProfile />
                <CardProfile />
                <CardProfile />
                <CardProfile />
              </div>
              <div className="w-full xl:w-[calc(50%-20px)] flex flex-col gap-4">
                <CardProfile />
                <CardProfile />
                <CardProfile />
                <CardProfile />
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default ProfileTwo;
