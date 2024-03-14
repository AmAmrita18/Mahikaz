import React from "react";
import infoBG from "/footerBG.png";
import { FaCircleCheck } from "react-icons/fa6";

const Features = () => {
  return (
    <div
      className="w-full"
      style={{
        backgroundImage: `url('${infoBG}')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        objectFit: "cover",
      }}
    >
      <div className="w-[80%] h-full mx-auto max-w-[1200px] py-12">
        <div className="w-[60%] bg-white rounded-xl ">
          <div className="flex justify-between px-6 py-6 border-b border-[#E4E4E4]">
            <h1 className="text-black text-[20px] leading-[23.04px] tracking-[-0.5px]">
              Description
            </h1>
          </div>
          <div className="flex flex-row  px-6 py-6 justify-between ">
            <ul className="flex flex-col gap-y-4 text-[15px] text-black leading-[22px] tracking-[-0.38px]">
              <li className="flex flex-row gap-2 items-center">
                <FaCircleCheck />Air Conditioning
              </li>
              <li className="flex flex-row gap-2 items-center">
                <FaCircleCheck />Swimming Pool
              </li>
              <li className="flex flex-row gap-2 items-center">
                <FaCircleCheck />Garage
              </li>
              <li className="flex flex-row gap-2 items-center">
                <FaCircleCheck />Sea Access
              </li>
              <li className="flex flex-row gap-2 items-center">
                <FaCircleCheck />Pet Friendly
              </li>
            </ul>
            <ul className="flex flex-col gap-y-4 text-[15px] text-black leading-[22px] tracking-[-0.38px]">
              <li className="flex flex-row gap-2 items-center">
                <FaCircleCheck />Jacuzzi
              </li>
              <li className="flex flex-row gap-2 items-center">
                <FaCircleCheck />Parking Facilities
              </li>
              <li className="flex flex-row gap-2 items-center">
                <FaCircleCheck />Home Office
              </li>
              <li className="flex flex-row gap-2 items-center">
                <FaCircleCheck />Fenced-property
              </li>
              <li className="flex flex-row gap-2 items-center">
                <FaCircleCheck />Alarm system
              </li>
            </ul>
            <ul className="flex flex-col gap-y-4 text-[15px] text-black leading-[22px] tracking-[-0.38px]">
              <li className="flex flex-row gap-2 items-center">
                <FaCircleCheck />CCTV Cameras
              </li>
              <li className="flex flex-row gap-2 items-center">
                <FaCircleCheck />Water Tank
              </li>
              <li className="flex flex-row gap-2 items-center">
                <FaCircleCheck />Solar power
              </li>
              <li className="flex flex-row gap-2 items-center">
                <FaCircleCheck />Wifi
              </li>
              <li className="flex flex-row gap-2 items-center">
                <FaCircleCheck />School Nearby
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
