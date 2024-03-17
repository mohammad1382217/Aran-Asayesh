import React from "react";
import foodpost from "../assets/images/foodpost.png";
import CardComponent from "../components/Card";
import LineSpace from "../components/lineSpace";
import recreational from "../assets/images/icons/recreational.svg";
import { BreadcrumbsWithIcon } from "../components/BreadcrumbsWithIcon";

const Categories: React.FC = () => {
  return (
    <>
      <section className="w-full py-10 bg-[#F5F5F5] flex flex-col justify-center items-center">
        <div className="container gap-4 mx-auto w-11/12 md:w-10/12">
        <div className="w-full flex items-center justify-start rounded-2xl">
            <BreadcrumbsWithIcon
              Address={["تفریحی ورزشی"]}
            />
          </div>
          <LineSpace
            color={`#717171`}
            text={"تفریحی و ورزشی"}
            icon={<img className="w-7 h-7" src={recreational}></img>}
            showMore={false}
          />
          <div>
          </div>
          <div className="space-y-4 grid-cols-1 sm:gap-4 sm:space-y-0 grid grid-flow-row sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-3">
          <CardComponent
            text={"باغ رستوران بهشت"}
            rate={"4.0"}
            offer={"20%"}
            img={foodpost}
          />
          <CardComponent
            text={"باغ رستوران بهشت"}
            rate={"4.0"}
            offer={"20%"}
            img={foodpost}
          />
          <CardComponent
            text={"باغ رستوران بهشت"}
            rate={"4.0"}
            offer={"20%"}
            img={foodpost}
          />
          <CardComponent
            text={"باغ رستوران بهشت"}
            rate={"4.0"}
            offer={"20%"}
            img={foodpost}
          />
          <CardComponent
            text={"باغ رستوران بهشت"}
            rate={"4.0"}
            offer={"20%"}
            img={foodpost}
          />
          <CardComponent
            text={"باغ رستوران بهشت"}
            rate={"4.0"}
            offer={"20%"}
            img={foodpost}
          />
          <CardComponent
            text={"باغ رستوران بهشت"}
            rate={"4.0"}
            offer={"20%"}
            img={foodpost}
          />
          <CardComponent
            text={"باغ رستوران بهشت"}
            rate={"4.0"}
            offer={"20%"}
            img={foodpost}
          />
          <CardComponent
            text={"باغ رستوران بهشت"}
            rate={"4.0"}
            offer={"20%"}
            img={foodpost}
          />
          <CardComponent
            text={"باغ رستوران بهشت"}
            rate={"4.0"}
            offer={"20%"}
            img={foodpost}
          />
          <CardComponent
            text={"باغ رستوران بهشت"}
            rate={"4.0"}
            offer={"20%"}
            img={foodpost}
          />
          <CardComponent
            text={"باغ رستوران بهشت"}
            rate={"4.0"}
            offer={"20%"}
            img={foodpost}
          />
          <CardComponent
            text={"باغ رستوران بهشت"}
            rate={"4.0"}
            offer={"20%"}
            img={foodpost}
          />
          <CardComponent
            text={"باغ رستوران بهشت"}
            rate={"4.0"}
            offer={"20%"}
            img={foodpost}
          />
          <CardComponent
            text={"باغ رستوران بهشت"}
            rate={"4.0"}
            offer={"20%"}
            img={foodpost}
          />
          <CardComponent
            text={"باغ رستوران بهشت"}
            rate={"4.0"}
            offer={"20%"}
            img={foodpost}
          />
          </div>
        </div>
      </section>
    </>
  );
};

export default Categories;
