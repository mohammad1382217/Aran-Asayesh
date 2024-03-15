import "./Home.scss";
import React from "react";
import ImageHomeHeaderLeft2 from "../assets/images/coffee.png";
import ImageHomeHeaderRight from "../assets/images/coffee2.png";
import ImageHomeHeaderLeft1 from "../assets/images/dentist.png";
import presentage from "../assets/images/icons/percentage-square.svg";
import foodIcon from "../assets/images/icons/hamperger.png";
import foodpost from "../assets/images/foodpost.png";
import health from "../assets/images/icons/health.svg";
import recreational from "../assets/images/icons/recreational.svg";
import teacher from "../assets/images/icons/teacher.svg";
import LineSpace from "../components/lineSpace";
import "./style.css";
import CardComponent from "../components/Card";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col mt-10 justify-center">
      <div className="flex flex-col md:flex-row  px-5">
        {/* <div> */}
        <img src={ImageHomeHeaderRight} className="md:w-8/12 rounded-t-lg" alt="" />
        <div className="flex flex-row md:flex-col md:w-4/12">
          <img
            src={ImageHomeHeaderLeft1}
            className="w-6/12 md:w-full rounded-t-lg"
            alt=""
          />
          <img
            src={ImageHomeHeaderLeft2}
            className="w-6/12 md:w-full rounded-t-lg"
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
        {/* </div> */}
      </div>
      <div>
      <div className="bg-[#8448B2] my-3 flex flex-col justify-center items-center">
        <div className="mt-10 lg:w-9/12 w-11/12 ">
          <LineSpace
            color={`#FFFFFF`}
            text={"پیشنهادهای ویژه"}
            icon={<img className="w-7 h-7" src={presentage}></img>}
          />
          <div className="flex flex-row mb-1 justify-between overflow-x-scroll ">
          <CardComponent text={'باغ رستوران بهشت'} rate={'4.0'} offer={["10%", "20%"]} img={foodpost} />
          <CardComponent text={'باغ رستوران بهشت'} rate={'4.0'} offer={["10%", "20%"]} img={foodpost} />
          <CardComponent text={'باغ رستوران بهشت'} rate={'4.0'} offer={["10%", "20%"]} img={foodpost} />
          <CardComponent text={'باغ رستوران بهشت'} rate={'4.0'} offer={["10%", "20%"]} img={foodpost} />
          </div>
        </div>
        </div>
        <div className="mt-10 mx-auto lg:w-9/12 w-11/12">
          <LineSpace
            color={`#717171`}
            text={"رستوران و کافی‌شاپ"}
            icon={<img className="w-7 h-7" src={foodIcon}></img>}
          />
          <div className="flex flex-row justify-between overflow-x-scroll">
          <CardComponent text={'باغ رستوران بهشت'} rate={'4.0'} offer={["10%", "20%"]} img={foodpost} />
          <CardComponent text={'باغ رستوران بهشت'} rate={'4.0'} offer={["10%", "20%"]} img={foodpost} />
          <CardComponent text={'باغ رستوران بهشت'} rate={'4.0'} offer={["10%", "20%"]} img={foodpost} />
          <CardComponent text={'باغ رستوران بهشت'} rate={'4.0'} offer={["10%", "20%"]} img={foodpost} />
          </div>
        </div>
        <div className="mt-10 mx-auto lg:w-9/12 w-11/12">
          <LineSpace
            color={`#717171`}
            text={"تفریحی و ورزشی"}
            icon={<img className="w-7 h-7" src={recreational}></img>}
          />
          <div className="flex flex-row justify-between overflow-x-scroll">
          <CardComponent text={'باغ رستوران بهشت'} rate={'4.0'} offer={["10%", "20%"]} img={foodpost} />
          <CardComponent text={'باغ رستوران بهشت'} rate={'4.0'} offer={["10%", "20%"]} img={foodpost} />
          <CardComponent text={'باغ رستوران بهشت'} rate={'4.0'} offer={["10%", "20%"]} img={foodpost} />
          <CardComponent text={'باغ رستوران بهشت'} rate={'4.0'} offer={["10%", "20%"]} img={foodpost} />
          </div>
        </div>
        <div className="mt-10 mx-auto lg:w-9/12 w-11/12">
          <LineSpace
            color={`#717171`}
            text={"پزشکی و سلامت"}
            icon={<img className="w-7 h-7" src={health}></img>}
          />
          <div className="flex flex-row justify-between overflow-x-scroll">
          <CardComponent text={'باغ رستوران بهشت'} rate={'4.0'} offer={["10%", "20%"]} img={foodpost} />
          <CardComponent text={'باغ رستوران بهشت'} rate={'4.0'} offer={["10%", "20%"]} img={foodpost} />
          <CardComponent text={'باغ رستوران بهشت'} rate={'4.0'} offer={["10%", "20%"]} img={foodpost} />
          <CardComponent text={'باغ رستوران بهشت'} rate={'4.0'} offer={["10%", "20%"]} img={foodpost} />
          </div>
        </div>
        <div className="mt-10 mx-auto lg:w-9/12 w-11/12">
          <LineSpace
            color={`#717171`}
            text={"هنری و آموزشی"}
            icon={<img className="w-7 h-7" src={teacher}></img>}
          />
          <div className="flex flex-row justify-between overflow-x-scroll">
          <CardComponent text={'باغ رستوران بهشت'} rate={'4.0'} offer={["10%", "20%"]} img={foodpost} />
          <CardComponent text={'باغ رستوران بهشت'} rate={'4.0'} offer={["10%", "20%"]} img={foodpost} />
          <CardComponent text={'باغ رستوران بهشت'} rate={'4.0'} offer={["10%", "20%"]} img={foodpost} />
          <CardComponent text={'باغ رستوران بهشت'} rate={'4.0'} offer={["10%", "20%"]} img={foodpost} />
          </div>
        </div>
        <div className="mt-10 mx-auto lg:w-9/12 w-11/12">
          <LineSpace
            color={`#717171`}
            text={"زیبایی و آرایشی"}
            icon={<img className="w-7 h-7" src={teacher}></img>}
          />
          <div className="flex flex-row justify-between overflow-x-scroll">
          <CardComponent text={'باغ رستوران بهشت'} rate={'4.0'} offer={["10%", "20%"]} img={foodpost} />
          <CardComponent text={'باغ رستوران بهشت'} rate={'4.0'} offer={["10%", "20%"]} img={foodpost} />
          <CardComponent text={'باغ رستوران بهشت'} rate={'4.0'} offer={["10%", "20%"]} img={foodpost} />
          <CardComponent text={'باغ رستوران بهشت'} rate={'4.0'} offer={["10%", "20%"]} img={foodpost} />
          </div>
        </div>
        <div className="mt-10 mx-auto lg:w-9/12 w-11/12">
          <LineSpace
            color={`#717171`}
            text={"خدمات"}
            icon={<img className="w-7 h-7" src={teacher}></img>}
          />
          <div className="flex flex-row justify-between overflow-x-scroll">
          <CardComponent text={'باغ رستوران بهشت'} rate={'4.0'} offer={["10%", "20%"]} img={foodpost} />
          <CardComponent text={'باغ رستوران بهشت'} rate={'4.0'} offer={["10%", "20%"]} img={foodpost} />
          <CardComponent text={'باغ رستوران بهشت'} rate={'4.0'} offer={["10%", "20%"]} img={foodpost} />
          <CardComponent text={'باغ رستوران بهشت'} rate={'4.0'} offer={["10%", "20%"]} img={foodpost} />
          </div>
        </div>
        </div>
    </div>
          // <div className="grid items-center justify-between grid-cols-3">
          //   <CardComponent
          //     text={"باغ رستوران بهشت"}
          //     rate={"4.0"}
          //     offer={["10%", "20%"]}
          //     img={foodpost}
          //   />
          //   <CardComponent
          //     text={"باغ رستوران بهشت"}
          //     rate={"4.0"}
          //     offer={["10%", "20%"]}
          //     img={foodpost}
          //   />
          //   <CardComponent
          //     text={"باغ رستوران بهشت"}
          //     rate={"4.0"}
          //     offer={["10%", "20%"]}
          //     img={foodpost}
          //   />
          // </div>
        
  );
};
export default Home;
