import React from "react";
import foodpost from "../assets/images/foodpost.png";
import CardComponent from "../components/Card";
import LineSpace from "../components/lineSpace";
import recreational from "../assets/images/icons/recreational.svg";
import { BreadcrumbsWithIcon } from "../components/BreadcrumbsWithIcon";

const Categories: React.FC = () => {
  return (
    <>
      <section className="w-full py-10 bg-[#F5F5F5] flex flex-col justify-start items-center">
        <div className="container gap-4 mx-auto w-11/12 md:w-10/12">
          <div className="w-full flex items-start justify-start rounded-2xl">
            <BreadcrumbsWithIcon Address={["تفریحی ورزشی"]} />
          </div>
          <LineSpace
            ClassName={'!justify-start -mr-2'}
            color={`#717171`}
            text={"تفریحی و ورزشی"}
            icon={
              <img
                className="w-7 h-7 my-10"
                src={recreational}
              ></img>
            }
            showMore={false}
          />
          <div className="space-y-10 justify-center justify-items-center items-center content-center grid-cols-1  sm:gap-4 sm:space-y-0 grid grid-flow-row sm:grid-cols-2 lg:gap-8 lg:grid-cols-3 2xl:gap-10 2xl:grid-cols-4">
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
