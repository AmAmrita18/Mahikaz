import infoBG from "/footerBG.png";
import React from "react";
import propertyHouse from "../../assets/Property House.png";
import facility1 from "../../assets/Rectangle (1).png";
import facility2 from "../../assets/Rectangle (2).png";
import facility3 from "../../assets/Rectangle (3).png";
import facility4 from "../../assets/Rectangle (4).png";
import facility5 from "../../assets/Rectangle (5).png";
import facility6 from "../../assets/Rectangle (6).png";
import facility7 from "../../assets/Rectangle (7).png";
const Details = () => {
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
      <div className="w-[80%] h-full mx-auto max-w-[1200px] pt-28 pb-12 flex flex-row">
        <div className="w-50%">
          <div>
            <img src={propertyHouse} alt="" />
          </div>
          <div className="flex flex-row gap-6 py-6">
            <div>
              <img src={facility1} alt="" />
            </div>
            <div>
              <img src={facility2} alt="" />
            </div>
            <div>
              <img src={facility3} alt="" />
            </div>
            <div>
              <img src={facility4} alt="" />
            </div>
            <div>
              <img src={facility5} alt="" />
            </div>
            <div>
              <img src={facility6} alt="" />
            </div>
            <div>
              <img src={facility7} alt="" />
            </div>
          </div>
          <div className=" bg-white rounded-xl">
            <div className="flex justify-between px-6 py-6 border-b border-[#E4E4E4]">
              <h1>Details</h1>
              <h1>Rs 80000</h1>
            </div>
            <div className="flex flex-row justify-between ">
              <div className="mx-auto text-center pr-16 border-r border-[#E4E4E4] py-4">
                <h1>4</h1>
              </div>
              <div className="mx-auto text-center pr-16 border-r border-[#E4E4E4] py-4">
                <h1>2</h1>
              </div>
              <div className="mx-auto text-center pr-16 border-r border-[#E4E4E4] py-4">
                <h1>2</h1>
              </div>
              <div className="mx-auto text-center pr-16 border-r border-[#E4E4E4] py-4">
                <h1>1</h1>
              </div>
              <div className="mx-auto  py-4">
                <h1>2007</h1>
              </div>
            </div>
          </div>
                 
        </div>
        <div className="w-50%">
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, eos.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Details;
