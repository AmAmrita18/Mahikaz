import React from "react";
import infoBG from "/footerBG.png";
import propertyPeople from "/propertyPeople.png";
const PropertySearch = () => {
  return (
    <div
      className="w-full"
      
    >
      <div className="pt-24 flex flex-row-reverse">
        <div
          className="w-[50%]"
          style={{
            backgroundImage: `url('${propertyPeople}')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            objectFit: "cover",
          }}
        >
        </div>

        <div className="w-[50%] py-44 h-full mx-auto max-w-[1200px] flex flex-col gap-8 pr-12 pl-32">
          <h1 className="text-[50px] text-black leading-[57.6px] tracking-[-1.26px]">
          Personalized and Curated Property Search          </h1>
          <p className="text-[20px] text-black leading-[28px] tracking-[-0.5px]">
          Whether you're searching for a luxurious beachfront villa, a cozy mountain retreat, or a stylish urban apartment, our expert team is dedicated to finding a property that meets your every need and desire. 
          </p>
          <p className="text-[20px] text-black leading-[28px] tracking-[-0.5px]">
         

With our extensive local knowledge and personalized approach, we guide you through every step of the journey, ensuring a seamless and enjoyable experience.
          </p>
          <button className="bg-[#251408] w-[200px] text-[17px] leading-[19.58px] tracking-[-0.43px] text-white px-8 py-6 rounded-tr-xl">
            LEARN MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertySearch;
