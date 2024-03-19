import React from "react";
import blogpsot from "../assets/images/blogpost.png";
import { BreadcrumbsWithIcon } from "../components/BreadcrumbsWithIcon";
import CardComponentBlog from "../components/CardBlog";
import { Button } from "@material-tailwind/react";

const BlogPost: React.FC = () => {
  return (
    <>
      <section className="w-full py-10 bg-[#F5F5F5] flex flex-col justify-center items-center">
        <div className="container gap-4 mx-auto w-11/12 md:w-10/12">
          <div className="w-full flex items-center justify-start rounded-2xl">
            <BreadcrumbsWithIcon Address={["وبلاگ", "بلاگ"]} />
          </div>
          <div className="w-full px-5 md:px-10 flex flex-col py-10 bg-[#FFFFFF] rounded-2xl gap-4 justify-center lg:justify-start items-start my-4 lg:my-2 lg:mt-10">
            <h2 className="text-[#7F38B7] md:px-2 md:mr-4 text-3xl sm:text-4xl font-semibold">
              بلاگ
            </h2>
            <span className="text-lg md:px-2 md:mr-4 font-light text-[#C8C8C8]">
              تاریخ انتشار: 1402/08/09
            </span>

            <div className="space-y-3 md:px-2">
              <img src={blogpsot} className="" alt="" />
              <p className="text-base md:text-lg font-light text-[#303030] text-justify">
              مجوعه آران آسایش آفرینان متشکل از جمعی از پزشکان و اساتید دانشگاه و صاحبان کسب و کار از سال 1397 با مدیریت آقای محمدرضا مرادی مشغول فعالیت است. این مجموعه با راه‌اندازی شبکه سراسری تخفیف ایران با صرفه‌جویی در هزینه‌های جاری خانوار و حمایت از اقتصاد خانواده، مصداق بارزی از اقتصاد مقاومتی ارائه نموده است.
              </p>
              <p className="text-base md:text-lg font-light text-[#303030] text-justify">
              امروزه با توجه به شرایط اقتصادی حاکم بر کشور، پس‌انداز و صرفه‌جویی در هزینه‌های جاری و ضروری خانواده‌ها بیش از همیشه مورد توجه اقشار مختلف جامعه و سرپرست خانواده‌ها است. از طرفی صاحبان مشاغل و خدمات گوناگون نیز با همین رکود اقتصادی و کمرشکنی روبرو هستند که در بسیاری از مواقع حاضرند به نفع مشتری از قسمتی از سود خود چشم پوشی کرده و با دید قناعت به حداقل سود، ضمن خروج از رکود و بحران مالی زمینه جذب مشتری و بازار جدید را فراهم سازند.
              </p>
              <p className="text-base md:text-lg font-light text-[#303030] text-justify">
              متخصصان مجموعه آران آسایش آفرینان با مطالعه روی معضل رکود و با هدف خروج از آن دور هم گرد آمده و با جمع‌آوری نتایج خود و تحقیقات میدانی، به راهکار این معضل دست پیدا کردند. یکی از نتایج جمع شدن متخصصان بازار دور هم، شروع به کار تیم آران آسایش آفرینان است.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPost;
