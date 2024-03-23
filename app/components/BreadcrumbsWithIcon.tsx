import { Breadcrumbs } from "@material-tailwind/react";
import home from "../assets/home.svg";
import { Link } from "react-router-dom";

export const BreadcrumbsWithIcon: React.FC<BreadcrumbsWithIconProps> = ({
  Address,
}) => {
  return (
    <Breadcrumbs className="bg-[#ECECEC]" placeholder={undefined} separator={">"}>
      <Link to="#" className="opacity-60">
        <img className="h-4 w-4" src={home} alt="" />
      </Link>
      {Address.map((item, index) =>
        Address.length - 1 !== index ? (
          <Link key={index} to="#" className="opacity-60">
            {item}
          </Link>
        ) : (
          <Link key={index} to="#" className="text-[#8754AF]">{item}</Link>
        )
      )}
    </Breadcrumbs>
  );
};

// Types
interface BreadcrumbsWithIconProps {
  Address: string[];
}
