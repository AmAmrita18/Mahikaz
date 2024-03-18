import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";

const DropdownList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenTwo, setIsOpenTwo] = useState(false);
  const [isOpenThree, setIsOpenThree] = useState(false);
  const [isOpenFour, setIsOpenFour] = useState(false);
  return (
    <div className="w-full">
      <div className="w-full h-full  max-w-[1200px] py-12 flex flex-row  ">
        <div className="w-full rounded-l-3xl border-r-2 border-[#E4E4E4] bg-white">
          <button onClick={() => setIsOpen((prev) => !prev)} className="bg-white py-12 pl-8 pr-8  text-start rounded-l-3xl flex flex-row gap-4 items-center text-[17px] leading-[19.58px] tracking-[-0.43px] text-black">
            Looking For
            {!isOpen ? <RiArrowDropDownLine className="text-[28px] font-thin" /> : <RiArrowDropUpLine className="text-[28px] font-thin text-black" />}
          </button>
          {isOpen && (
            <ul className="bg-white w-[19%]  absolute z-10 mt-4 flex flex-col rounded-3xl text-start">
              <li className="text-[17px] leading-[19.58px] tracking-[-0.43px] text-black px-8 py-5 rounded-t-3xl w-full hover:bg-[#B2A797] ">Buy</li>
              <li className="text-[17px] leading-[19.58px] tracking-[-0.43px] text-black px-8 py-5 rounded-b-3xl w-full hover:bg-[#B2A797] ">Rent</li>
            </ul>
          )}
        </div>
        <div className="w-full border-r-2 border-[#E4E4E4]  bg-white">
          <button onClick={() => setIsOpenTwo((prev) => !prev)} className="bg-white py-12 pl-8 pr-8 text-start flex flex-row gap-4 items-center text-[17px] leading-[19.58px] tracking-[-0.43px] text-black">
            Location
            {!isOpenTwo ? <RiArrowDropDownLine className="text-[28px] font-thin" /> : <RiArrowDropUpLine className="text-[28px] font-thin text-black" />}
          </button>
          {isOpenTwo && (
            <ul className="bg-white w-[19%]  absolute z-10 mt-4 flex flex-col rounded-3xl text-start">
              <li className="text-[17px] leading-[19.58px] tracking-[-0.43px] text-black px-8 py-5 rounded-t-3xl w-full hover:bg-[#B2A797] ">North</li>
              <li className="text-[17px] leading-[19.58px] tracking-[-0.43px] text-black px-8 py-5 w-full hover:bg-[#B2A797] ">South</li>
              <li className="text-[17px] leading-[19.58px] tracking-[-0.43px] text-black px-8 py-5 w-full hover:bg-[#B2A797] ">East</li>
              <li className="text-[17px] leading-[19.58px] tracking-[-0.43px] text-black px-8 py-5 w-full hover:bg-[#B2A797] ">West</li>
              <li className="text-[17px] leading-[19.58px] tracking-[-0.43px] text-black px-8 py-5 rounded-b-3xl w-full hover:bg-[#B2A797] ">Center</li>
              
            </ul>
          )}
        </div>
        <div className="w-full border-r-2 border-[#E4E4E4]  bg-white">
          <button onClick={() => setIsOpenThree((prev) => !prev)} className="bg-white py-12 pl-8 pr-8 text-start  flex flex-row gap-4 items-center text-[17px] leading-[19.58px] tracking-[-0.43px] text-black">
            Property Type
            {!isOpenThree ? <RiArrowDropDownLine className="text-[28px] font-thin" /> : <RiArrowDropUpLine className="text-[28px] font-thin text-black" />}
          </button>
          {isOpenThree && (
            <ul className="bg-white w-[19%] absolute z-10 mt-4 flex flex-col rounded-3xl text-start">
              <li className="text-[17px] leading-[19.58px] tracking-[-0.43px] text-black px-8 py-5 rounded-t-3xl w-full hover:bg-[#B2A797] ">Apartment</li>
              <li className="text-[17px] leading-[19.58px] tracking-[-0.43px] text-black px-8 py-5  w-full hover:bg-[#B2A797] ">House/Villa</li>
              <li className="text-[17px] leading-[19.58px] tracking-[-0.43px] text-black px-8 py-5  w-full hover:bg-[#B2A797] ">Land</li>
              <li className="text-[17px] leading-[19.58px] tracking-[-0.43px] text-black px-8 py-5  w-full hover:bg-[#B2A797] ">Office</li>
              <li className="text-[17px] leading-[19.58px] tracking-[-0.43px] text-black px-8 py-5  w-full hover:bg-[#B2A797] ">Commercial</li>
              <li className="text-[17px] leading-[19.58px] tracking-[-0.43px] text-black px-8 py-5 rounded-b-3xl w-full hover:bg-[#B2A797] ">Residential Complex</li>
            </ul>
          )}
        </div>
        <div className="w-full rounded-r-3xl  bg-white">
          <button onClick={() => setIsOpenFour((prev) => !prev)} className="bg-white py-12 pl-8 pr-8 text-start rounded-r-3xl flex flex-row gap-4 items-center text-[17px] leading-[19.58px] tracking-[-0.43px] text-black">
            Budget
            {!isOpenFour ? <RiArrowDropDownLine className="text-[28px] font-thin" /> : <RiArrowDropUpLine className="text-[28px] font-thin text-black" />}
          </button>
          {isOpenFour && (
            <ul className="bg-white w-[19%]  absolute z-10 mt-4 flex flex-col rounded-3xl text-start">
              <li className="text-[17px] leading-[19.58px] tracking-[-0.43px] text-black px-8 py-5 rounded-t-3xl w-full hover:bg-[#B2A797] ">Rs 0 - Rs 25,000</li>
              <li className="text-[17px] leading-[19.58px] tracking-[-0.43px] text-black px-8 py-5  w-full hover:bg-[#B2A797] ">Rs 25,000 - Rs 50,000</li>
              <li className="text-[17px] leading-[19.58px] tracking-[-0.43px] text-black px-8 py-5  w-full hover:bg-[#B2A797] ">Rs 50,000 - Rs 75,000</li>
              <li className="text-[17px] leading-[19.58px] tracking-[-0.43px] text-black px-8 py-5  w-full hover:bg-[#B2A797] ">Rs 75,000 - Rs 100,000</li>
              <li className="text-[17px] leading-[19.58px] tracking-[-0.43px] text-black px-8 py-5  w-full hover:bg-[#B2A797] ">Rs 100,000 - Rs 150,000</li>
              <li className="text-[17px] leading-[19.58px] tracking-[-0.43px] text-black px-8 py-5  w-full hover:bg-[#B2A797] ">Rs 150,000 - Rs 200,000</li>
              <li className="text-[17px] leading-[19.58px] tracking-[-0.43px] text-black px-8 py-5 rounded-b-3xl w-full hover:bg-[#B2A797] ">Rs 200,000 - Rs 1,000,000</li>
            </ul>
          )}
        </div>

      </div>
    </div>
  );
};

export default DropdownList;
