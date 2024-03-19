import React from "react";
import {
  CustomFlowbiteTheme,
  Flowbite,
  ListGroup,
  ListGroupItem,
} from "flowbite-react";
import { BreadcrumbsWithIcon } from "../components/BreadcrumbsWithIcon";
import percentage_takhfif from "../assets/images/percentage-takhfif.png";
import CardProfile from "../components/CardProfile";
import { Link } from "react-router-dom";

const ProfileTwo: React.FC = () => {
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
            <BreadcrumbsWithIcon
              Address={["پروفایل کاربری", "تاریخچه تخفیف"]}
            />
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
