import React from "react";
import ImageHomeHeaderRight from "../assets/images/coffee2.png";
import ImageHomeHeaderLeft1 from "../assets/images/dentist.png";
import ImageHomeHeaderLeft2 from "../assets/images/coffee.png";
import presentage from "../assets/images/icons/percentage-square.svg";
import foodpost from "../assets/images/foodpost.png";
import LineSpace from "../components/lineSpace";
import "./style.css";
import CardComponent from "../components/Card";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col mt-10 justify-center ">
      <div className="flex justify-center">
        <img src={ImageHomeHeaderRight} className="w-2/4 rounded-t-lg" alt="" />
        <div className="flex flex-col w-1/4">
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
      <div className="bg-[#F5F5F5] mt-3 flex justify-center">
        <div className="mt-10 w-9/12">
          <LineSpace
            color={`#8754AF`}
            text={"پیشنهادهای ویژه"}
            icon={<img className="w-7 h-7" src={presentage}></img>}
          />
          <CardComponent text={'باغ رستوران بهشت'} rate={'4.0'} offer={["10%", "20%"]} img={foodpost} />
        </div>
      </div>
    </div>
  );
};
export default Home;
