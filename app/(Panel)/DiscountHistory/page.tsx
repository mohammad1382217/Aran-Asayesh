import React from "react";
import { LineChart } from "../../components/LineChart";

const DiscountHistory = () => {
  return (
    <>
      <div className="w-full flex items-center justify-between gap-4">
        <h1 className="text-[#7F38B7] self-center md:self-start text-2xl sm:text-3xl font-semibold">
          گزارش خرید طی 30 روز گذشته
        </h1>
      </div>
      <section className="w-full flex flex-col items-center justify-between">
        <LineChart />
      </section>
    </>
  );
};

export default DiscountHistory;
