import React from "react";
import Input from "./components/input";
import funMenu from "./assets/funMenu.svg";
import logo from "./assets/logo-orginal.svg";
import closeUpOne from "./assets/close-up-1.svg";
import beautyMenu from "./assets/beautyMenu.svg";
import medicalMenu from "./assets/medicalMenu.svg";
import bazar from "./assets/images/icons/bazar.svg";
import { HiDownload, HiMenu } from "react-icons/hi";
import servicesMenu from "./assets/servicesMenu.svg";
import FlowbiteDropdown from "./components/Dropdown";
import ArtAndEduMenu from "./assets/ArtAndEduMenu.svg";
import telegram from "./assets/images/icons/telegram.svg";
import qr_code from "./assets/mobile-client-qr-code-settings.svg";
import { Link, Outlet, ScrollRestoration } from "react-router-dom";
import { AccordionCustomIcon } from "./components/AccordionWithIcon";
import {
  Typography,
  Button,
  IconButton,
  Drawer,
  ThemeProvider,
} from "@material-tailwind/react";

const LINKS = [
  {
    title: "همکاری با ما",
    items: [
      { item: "زیر مجموعه شدن", link: "WorkWithUs" },
      { item: "تبلیغات", link: "Information" },
      { item: "خدمات ما", link: "Services" },
    ],
  },
  {
    title: "ارتباط با ما",
    items: [
      { item: "درباره ما", link: "AboutUs" },
      { item: "تاریخچه شرکت", link: "OurHistory" },
      { item: "اهداف شرکت", link: "OurGoals" },
    ],
  },
  {
    title: "بیشتر",
    items: [
      { item: "سؤالات متداول", link: "Questions" },
      { item: "راهنمای خرید کارت", link: "BuySubscription" },
      { item: "وبلاگ", link: "Blog" },
    ],
  },
];

const Gift = () => {
  return (
    <svg
      color="#8754AF"
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.0879 10H4.08789V18C4.08789 21 5.08789 22 8.08789 22H16.0879C19.0879 22 20.0879 21 20.0879 18V10Z"
        stroke="#8754AF"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.6182 7V8C21.6182 9.1 21.0882 10 19.6182 10H4.61816C3.08816 10 2.61816 9.1 2.61816 8V7C2.61816 5.9 3.08816 5 4.61816 5H19.6182C21.0882 5 21.6182 5.9 21.6182 7Z"
        stroke="#8754AF"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.7579 5.00043H6.23795C5.89795 4.63043 5.90795 4.06043 6.26795 3.70043L7.68795 2.28043C8.05795 1.91043 8.66795 1.91043 9.03795 2.28043L11.7579 5.00043Z"
        stroke="#8754AF"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.9878 5.00043H12.4678L15.1878 2.28043C15.5578 1.91043 16.1678 1.91043 16.5378 2.28043L17.9578 3.70043C18.3178 4.06043 18.3278 4.63043 17.9878 5.00043Z"
        stroke="#8754AF"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.05859 10V15.14C9.05859 15.94 9.93859 16.41 10.6086 15.98L11.5486 15.36C11.8886 15.14 12.3186 15.14 12.6486 15.36L13.5386 15.96C14.1986 16.4 15.0886 15.93 15.0886 15.13V10H9.05859Z"
        stroke="#8754AF"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const Magnifier = () => {
  return (
    <svg
      width="27"
      height="26"
      viewBox="0 0 27 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.5778 22.7503C18.3163 22.7503 22.9682 18.1426 22.9682 12.4587C22.9682 6.77473 18.3163 2.16699 12.5778 2.16699C6.83942 2.16699 2.1875 6.77473 2.1875 12.4587C2.1875 18.1426 6.83942 22.7503 12.5778 22.7503Z"
        stroke="#8754AF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24.0612 23.8337L21.874 21.667"
        stroke="#8754AF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const FooterWithSocialLinks = () => {
  return (
    <footer className="w-full">
      <section className="bg-[#ECECEC] w-full flex items-center justify-center py-6 lg:py-4">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col xl:flex-row justify-between gap-y-6 gap-x-20 py-8">
            <div className="w-full xl:max-w-80 flex flex-col items-center md:items-start justify-center gap-2">
              <div className="md:w-full flex items-center justify-center gap-2">
                <img
                  className="xl:w-[79px] xl:h-[102px] w-[43px] h-[56px]"
                  src={logo}
                  alt="AranAsayesh"
                />
                <Typography
                  variant="h5"
                  className="text-3xl font-semibold text-[#8754AF]"
                  placeholder={undefined}
                >
                  آران آسایش
                </Typography>
              </div>
              <p className="text-base font-light text-[#717171]text-justify">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و{" "}
              </p>
            </div>
            <div className="flex flex-col lg:flex-row justify-between items-center lg:w-full gap-y-8">
              <div className="grid grid-cols-3 justify-between gap-2 gap-y-8 w-full lg:w-auto xl:gap-6 xl:self-center self-start">
                {LINKS.map(({ title, items }) => (
                  <ul
                    key={title}
                    className="flex flex-col items-center justify-center lg:items-start"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="mb-3 text-base xl:text-lg font-semibold text-[#303030]"
                      placeholder={undefined}
                    >
                      {title}
                    </Typography>
                    {items.map((link) => (
                      <li key={link.item}>
                        <Link
                          to={link.link}
                          color="gray"
                          className="block antialiased font-sans text-gray-700 py-1.5 xs:text-xs text-base font-normal transition-colors hover:text-blue-gray-900 items-center lg:items-start"
                        >
                          {link.item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
              <div className="flex items-center xs:justify-between">
                <div className="flex flex-col items-center justify-center">
                  <h3 className="block antialiased mb-3 xs:text-base text-base font-semibold text-[#303030]">
                    دریافت اپلیکیشن
                  </h3>

                  <Button
                    className="flex items-center shadow-none !bg-transparent text-gray-700 hover:!bg-transparent max-sm:!px-4"
                    placeholder={undefined}
                  >
                    <HiDownload className="w-6 h-6" />
                    <span className="block antialiased text-gray-700 xs:text-sm text-base font-normal transition-colors bg-transparent">
                      دانلود مستقیم
                    </span>
                  </Button>
                  <Button
                    className="flex items-center shadow-none !bg-transparent text-gray-700 hover:!bg-transparent max-sm:!px-4"
                    placeholder={undefined}
                  >
                    <img src={bazar} className="w-8 h-8" />
                    <span className="block antialiased text-gray-700 xs:text-sm text-base font-normal transition-colors bg-transparent">
                      دانلود از کافه بازار
                    </span>
                  </Button>
                </div>

                <img src={qr_code} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-[#D9D9D9] flex items-center justify-center !py-5 lg:py-4">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="w-full flex flex-col justify-between items-center xl:flex-row">
            <Typography
              variant="small"
              className="mb-4 text-center font-normal text-[#717171] xl:mb-0"
              placeholder={undefined}
            >
              <Link to="#">
                تمامی حقوق این وبسایت برای آکادمی پیروزی محفوظ است.
              </Link>
            </Typography>
            <div className="flex gap-4 text-purple-500 sm:justify-center">
              <Link
                to="#"
                className="block antialiased py-1.5 xs:text-xs text-base font-normal hover:text-blue-gray-900 items-center lg:items-start opacity-80 transition-opacity hover:opacity-100"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link
                to="#"
                className="block antialiased py-1.5 xs:text-xs text-base font-normal hover:text-blue-gray-900 items-center lg:items-start opacity-80 transition-opacity hover:opacity-100"
              >
                <img src={telegram} className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

const RootLayout: React.FC = () => {
  const [openDrawerRight, setOpenDrawerRight] = React.useState(false);
  const setOpenDrawerRightHandler = () => setOpenDrawerRight(!openDrawerRight);

  const theme = {
    drawer: {
      styles: {
        base: {
          overlay: {
            position: "fixed",
          },
        },
      },
    },
  };

  return (
    <>
      <header>
        <section className="w-full flex items-center justify-center py-6 lg:py-4 sm:border-b-1">
          <div className="container mx-auto px-4 lg:px-8">
            <nav className="w-full flex xl:items-center sm:justify-between justify-evenly gap-2">
              <div className="inline-flex items-center xl:hidden">
                <ThemeProvider value={theme}>
                  <IconButton
                    onClick={() => setOpenDrawerRightHandler()}
                    className="bg-transparent shadow-none hover:shadow-none z-40"
                    placeholder={undefined}
                  >
                    <HiMenu className="w-6 h-6 text-black" />
                  </IconButton>
                  <Drawer
                    placement="right"
                    open={openDrawerRight}
                    onClose={() => setOpenDrawerRightHandler()}
                    className={`w-60 ${
                      openDrawerRight ? "overflow-hidden" : null
                    }`}
                    placeholder={undefined}
                  >
                    <div className="flex flex-col items-center p-6 gap-8">
                      <Button
                        className="w-full py-2 px-3 rounded-lg border-[3px] border-solid border-[#8754AF] text-lg font-semibold text-[#8754AF] hover:!bg-white bg-white"
                        placeholder={undefined}
                      >
                        ورود به حساب کاربری
                      </Button>
                      <Link className="cursor-pointer" to={"/BuySubscription"}>
                        <div className="flex items-center justify-center gap-2">
                          <span className="text-lg font-semibold text-[#8754AF]">
                            خرید گیفت کارد
                          </span>
                          <Gift />
                        </div>
                      </Link>
                      <div className="flex flex-col">
                        <AccordionCustomIcon
                          headerTitle={"رستوران و کافی‌شاپ"}
                          Id={1}
                        >
                          <></>
                        </AccordionCustomIcon>
                        <AccordionCustomIcon
                          headerTitle={"تفریحی و ورزشی"}
                          Id={2}
                        >
                          <></>
                        </AccordionCustomIcon>
                        <AccordionCustomIcon
                          headerTitle={"پزشکی و سلامت"}
                          Id={3}
                        >
                          <></>
                        </AccordionCustomIcon>
                        <AccordionCustomIcon
                          headerTitle={"هنری و آموزشی"}
                          Id={4}
                        >
                          <></>
                        </AccordionCustomIcon>
                        <AccordionCustomIcon
                          headerTitle={"زیبایی و آرایشی"}
                          Id={5}
                        >
                          <></>
                        </AccordionCustomIcon>
                        <AccordionCustomIcon headerTitle={"خدمات"} Id={6}>
                          <></>
                        </AccordionCustomIcon>
                      </div>
                    </div>
                  </Drawer>
                </ThemeProvider>
              </div>
              <Link className="block" to={"/home"}>
                <div className="flex items-center justify-center gap-2 xl:gap-4">
                  <div className="flex self-center xl:mr-8">
                    <img
                      className="xl:w-[79px] xl:h-[102px] w-[43px] h-[56px]"
                      src={logo}
                      alt="AranAsayesh"
                    />
                  </div>
                  <span className="text-2xl xl:text-3xl font-semibold text-[#8754AF]">
                    آران آسایش
                  </span>
                </div>
              </Link>
              <div className="flex xl:hidden items-center">
                <Magnifier />
              </div>
              <div className="hidden xl:flex xl:items-center xl:justify-center gap-4">
                <Link className="cursor-pointer" to={"/BuySubscription"}>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-lg font-semibold text-[#8754AF]">
                      خرید گیفت کارد
                    </span>
                    <Gift />
                  </div>
                </Link>
                <Link to="/ProfileOne">
                  <Button
                    className="py-2 rounded-lg border-[3px] border-solid border-[#8754AF] text-lg font-semibold text-[#8754AF] hover:!bg-white bg-white"
                    placeholder={undefined}
                  >
                    ورود
                  </Button>
                </Link>
                <Link to="/Application">
                  <Button
                    className="py-2 px-8 flex items-center justify-center rounded-lg border-[#8754AF] text-lg font-semibold bg-[#8754AF] hover:!bg-[#8754AF] text-white gap-2"
                    placeholder={undefined}
                  >
                    دانلود اپلیکیشن
                    <HiDownload className="w-6 h-6" />
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        </section>
        <section className="w-full hidden xl:flex xl:items-center xl:justify-center py-6 lg:py-4 bg-[#ECECEC]">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="w-full flex items-center justify-between">
              <div className="w-full flex items-center justify-center gap-5">
                <FlowbiteDropdown
                  url={closeUpOne}
                  lable="رستوران و کافی‌شاپ"
                  list={[
                    "رستوران",
                    "فست فود",
                    "کافی شاپ",
                    "باربیکیو",
                    "صبحانه",
                    "بیرون بر",
                  ]}
                />
                <FlowbiteDropdown
                  url={funMenu}
                  lable="تفریحی و ورزشی"
                  list={[
                    "استخر و پارک‌های آبی",
                    "تفریحی و سرگرمی",
                    "باشگاه‌های ورزشی",
                    "گردشگری",
                  ]}
                />
                <FlowbiteDropdown
                  url={medicalMenu}
                  lable="پزشکی و سلامت"
                  list={[
                    "لیزر موهای زائد",
                    "زیبایی و جوانسازی",
                    "زیبایی صورت",
                    "لاغری و تناسب اندام",
                    "کاشت مو",
                    "عمل‌های جراحی",
                  ]}
                />
                <FlowbiteDropdown
                  url={ArtAndEduMenu}
                  lable="هنری و آموزشی"
                  list={["آتلیه و خدمات چاپ", "آموزشی"]}
                />
                <FlowbiteDropdown
                  url={beautyMenu}
                  lable="زیبایی و آرایشی"
                  list={[
                    "خدمات پوست",
                    "خدمات و کاشت ناخن",
                    "زیبایی صورت",
                    "خدمات مو",
                    "اسپا و ماساژ",
                    "خدمات زیبایی و مجلسی",
                    "آرایش دائم",
                    "آرایش مردانه و کودکانه",
                  ]}
                />
                <FlowbiteDropdown
                  url={servicesMenu}
                  lable="خدمات"
                  list={[
                    "تشریفات، مراسم و گل",
                    "خدمات حفاظت و امنیت",
                    "کارواش",
                  ]}
                />
              </div>
              <div className="w-auto">
                <Input
                  placeholder="جستجو (مرکز خدماتی، رستوران، استخر و ...)"
                  ClassName="hidden w-80 xl:block rounded-[10px] py-2.5 px-5 z-20 text-sm text-gray-900 bg-gray-50 border-2 !border-[#8754AF] focus:ring-blue-500 focus:border-blue-500"
                  Icon={Magnifier}
                />
              </div>
            </div>
          </div>
        </section>
      </header>

      <main className="flex flex-col justify-center items-center">
        <ScrollRestoration />
        <Outlet />
      </main>

      <FooterWithSocialLinks />
    </>
  );
};

export default RootLayout;
