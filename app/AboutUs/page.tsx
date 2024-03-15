import React from "react";
import ImageHomeHeaderLeft2 from "../assets/images/coffee.png";
import ImageHomeHeaderRight from "../assets/images/coffee2.png";
import ImageHomeHeaderLeft1 from "../assets/images/dentist.png";

const AboutUs = () => {
  return (
    <section className="w-full h-full flex items-center bg-[#F5F5F5]">
      <div className="w-full flex items-center justify-between bg-white max-w-7xl mx-auto my-10">
        <div className="w-full flex flex-col items-center justify-between bg-white px-20 py-10 rounded-2xl">
          <div className="w-full flex items-center justify-between">
            <div className="flex items-center justify-center">
              <div className="flex items-center justify-center">
                <div className="flex flex-col">
                  <h1 className="text-6xl text-[#7F38B7] font-semibold py-9">
                    درباره ما
                  </h1>
                  <div className="flex justify-center">
                    <img
                      src={ImageHomeHeaderRight}
                      className="w-2/3 rounded-t-lg"
                      alt=""
                    />
                    <div className="flex flex-col w-1/3">
                      <img
                        src={ImageHomeHeaderLeft1}
                        className="w-full rounded-t-lg"
                        alt=""
                      />
                      <img
                        src={ImageHomeHeaderLeft2}
                        className="w-full rounded-t-lg"
                        alt=""
                      />
                    </div>
                  </div>
                  <p className="text-lg text-justify font-semibold py-7">
                    مجوعه آران آسایش آفرینان متشکل از جمعی از پزشکان و اساتید
                    دانشگاه و صاحبان کسب و کار از سال 1397 با مدیریت آقای
                    محمدرضا مرادی مشغول فعالیت است. این مجموعه با راه‌اندازی
                    شبکه سراسری تخفیف ایران با صرفه‌جویی در هزینه‌های جاری
                    خانوار و حمایت از اقتصاد خانواده، مصداق بارزی از اقتصاد
                    مقاومتی ارائه نموده است. امروزه با توجه به شرایط اقتصادی
                    حاکم بر کشور، پس‌انداز و صرفه‌جویی در هزینه‌های جاری و ضروری
                    خانواده‌ها بیش از همیشه مورد توجه اقشار مختلف جامعه و سرپرست
                    خانواده‌ها است. از طرفی صاحبان مشاغل و خدمات گوناگون نیز با
                    همین رکود اقتصادی و کمرشکنی روبرو هستند که در بسیاری از
                    مواقع حاضرند به نفع مشتری از قسمتی از سود خود چشم پوشی کرده
                    و با دید قناعت به حداقل سود، ضمن خروج از رکود و بحران مالی
                    زمینه جذب مشتری و بازار جدید را فراهم سازند. متخصصان مجموعه
                    آران آسایش آفرینان با مطالعه روی معضل رکود و با هدف خروج از
                    آن دور هم گرد آمده و با جمع‌آوری نتایج خود و تحقیقات میدانی،
                    به راهکار این معضل دست پیدا کردند. یکی از نتایج جمع شدن
                    متخصصان بازار دور هم، شروع به کار تیم آران آسایش آفرینان
                    است. گره کار این مشکل در نظام کار آمد و هدفمند امروزی به دست
                    صاحبان خدمات یا کالاها به وسیله تکنیکی به نام تخفیف باز
                    می‌شود. در حقیقت ، نظام تخفیف در کسب و کار باعث توسعه و رونق
                    اقتصادی، معرفی و اطلاع‌رسانی برترین‌های صاحبان مشاغل و خدمات
                    گوناگون در محدوده‌های جغرافیایی شهرها و استان‌های کشور است
                    که در نتیجه رفاه بیشتری برای تمامی مردم را به دنبال خواهد
                    داشت. استفاده از شیوه اقتصادی تخفیف که بیشتر به صورت غیر
                    رسمی و با مشارکت داوطلبانه فراگیر مردم و صاحبان صنایع و
                    خدمات امکان پذیر است که اگر از سوی حاکمیت مورد اهتمام جدی
                    قرار گیرد، در حقیقت می‌تواند حلال بسیاری از مشکلات اقتصادی
                    اقشار ضعیف جامعه باشد. در شرایط کنونی علی‌رغم تمام مشکلات
                    موجود با استقبال گسترده مردم و صاحبان حرف و خدمات مختلف،
                    شبکه سراسری تخفیف در حال گسترش روز افزون است. مجموعه آران
                    آسایش آفرینان با عزم ملي و مديريت جهادي در عرصه توسعه
                    اقتصادي به عنوان پيشگام قدم در اين راه دشوار گذاشته است و در
                    آینده‌ای نزدیک با توکل به خداوند متعال هر هموطن ایرانی یک
                    تخفیف کارت آران آسایش را خواهد داشت.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
