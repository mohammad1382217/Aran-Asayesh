import React from "react";
import {
  Dropdown,
  Flowbite,
  DropdownItem,
  CustomFlowbiteTheme,
} from "flowbite-react";

const FlowbiteDropdown: React.FC<FlowbitDropdownProps> = ({
  lable,
  url,
  list,
}) => {
  const Theme: CustomFlowbiteTheme["dropdown"] = {
    arrowIcon: "h-4 w-4",
    content: "focus:border-none focus:outline-none",
    inlineWrapper:
      "w-auto flex items-center justify-between text-gray-700 hover:text-blue-700 py-2 border-0 p-0 gap-2 hover:gap-2",
  };

  return (
    <Dropdown
      theme={Theme}
      inline={true}
      className="font-normal rounded-lg shadow w-80 h-72"
      trigger="hover"
      label={lable}
      dismissOnClick={false}
    >
      <div
        style={{
          backgroundImage: `url(${url})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
        className="bg-cover h-72 rounded-e-lg"
      >
        {list.map((item) => (
          <DropdownItem key={item} className="w-48">
            {item}
          </DropdownItem>
        ))}
      </div>
    </Dropdown>
  );
};

export default FlowbiteDropdown;

//Types
interface FlowbitDropdownProps {
  url: string;
  lable: string;
  list: string[];
}
