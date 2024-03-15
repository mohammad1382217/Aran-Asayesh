import "./Home.scss";
import React from "react";
import CardComponent from "../components/Card";
import LineSpace from "../components/lineSpace";
import foodpost from "../assets/images/foodpost.png";
import ImageHomeHeaderLeft2 from "../assets/images/coffee.png";
import ImageHomeHeaderRight from "../assets/images/coffee2.png";
import ImageHomeHeaderLeft1 from "../assets/images/dentist.png";
import presentage from "../assets/images/icons/percentage-square.svg";

const Home: React.FC = () => {
  return (
    <>
      <div className="flex flex-col mt-10 justify-center max-w-7xl mx-auto">
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
      </div>
      <div className="bg-[#F5F5F5] mt-3 flex justify-center">
        <div className="mt-10 w-9/12">
          <LineSpace
            color={`#8754AF`}
            text={"پیشنهادهای ویژه"}
            icon={<img className="w-7 h-7" src={presentage}></img>}
          />
          <div className="grid items-center justify-between grid-cols-3">
            <CardComponent
              text={"باغ رستوران بهشت"}
              rate={"4.0"}
              offer={["10%", "20%"]}
              img={foodpost}
            />
            <CardComponent
              text={"باغ رستوران بهشت"}
              rate={"4.0"}
              offer={["10%", "20%"]}
              img={foodpost}
            />
            <CardComponent
              text={"باغ رستوران بهشت"}
              rate={"4.0"}
              offer={["10%", "20%"]}
              img={foodpost}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
