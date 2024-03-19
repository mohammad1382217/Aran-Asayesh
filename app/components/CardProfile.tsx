import React from "react";
import percentage_takhfif from "../assets/images/percentage-takhfif.png"; 

const CardProfile = () => {
  return (
    <div className="w-full rounded-2xl bg-white p-6">
      <div className="pb-4 flex items-center justify-between border-b border-dashed border-[#C8C8C8]">
        <h3 className="text-xl text-[#7F38B7]">رستوران باغ بهشت</h3>
        <span className="text-xl text-[#7F38B7]">1368/05/12</span>
      </div>
      <div className="pt-6 flex items-center justify-between">
        <img className="lg:w-32" src={percentage_takhfif} alt="" />
        <div className="flex flex-col items-center self-end">
          <span className="text-xl lg:text-3xl font-semibold text-[#C8C8C8] line-through">
            800.000 تومان
          </span>
          <span className="text-xl lg:text-3xl font-semibold text-[#7F38B7]">
            800.000 تومان
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardProfile;
