import arrowDown from "../../images/arrowDown.png";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import "../../Genealogy.css";
// Đời

const CustomTextField = () => {
  const [Gender, SetGender] = useState("");
  const [isOpenGender, SetisOpenGender] = useState<boolean>(false);


  return (
    <div className="relative w-auto min-w-[30%]">
      <div
        className="border-1 cursor-pointer rounded-[5px] justify-between flex border-[#dccfbe] px-[20px] py-[10px]"
        onClick={() => SetisOpenGender(!isOpenGender)}
      >
        <div className="flex">
          <img src={iconGenealogy} className="w-[18px] h-[18px]"></img>
          <div className="ml-[10%]">{Gender}</div>
        </div>
        <img
          src={arrowDown}
          className={
            isOpenGender
              ? "w-[15px] h-[15px] rotate-180"
              : "w-[15px] h-[15px] rotate-0"
          }
        ></img>
      </div>
      {!isOpenGender ? null : (
        <div className="absolute shadow-select pt-[5%] w-full h-[250px] z-[100] bg-white flex px-[5%] flex-col">
          <div className="border-b-1 font-semibold xl:text-[16px] lg:text-[14px] md:text-[12px] sm:text-[12px] maxsm:text-[10px] px-[10%]">
            Đời
          </div>
          {dataGender.map((option) => (
            <MenuItem
              onClick={() => {
                SetGender(option.label);
              }}
              key={option.value}
              className="flex items-center"
              value={option.value}
            >
              {option.label}
            </MenuItem>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomTextField;
