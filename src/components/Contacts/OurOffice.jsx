import React from "react";
import office1 from "/office1.png";
import office2 from "/office2.png";
import office3 from "/office3.png";
const OurOffice = () => {
  return (
    <div className="w-full">
      <div className="w-[80%] h-full mx-auto max-w-[1200px] flex flex-col items-center justify-center gap-6">
        <h1 className="text-black text-[50px] leading-[57.6px] text-current tracking-[-1.26px] md:py-16">
          Our Office
        </h1>
        <p className="text-black text-[18px] text-center leading-[20.74px] text-current tracking-widest">
          Located at the vibrant CentrePoint in Trianon, Mahikaz Properties sits
          at the nexus of commerce and convenience.
        </p>
        <p className="text-black text-[18px] text-center leading-[20.74px] text-current tracking-widest">
          Adjacent to the M2 highway and a short walk from Trianon Metro
          Station, our office offers unparalleled access and visibility.{" "}
        </p>
        <p className="text-black text-[18px] text-center leading-[20.74px] text-current tracking-widest">
          We're perfectly positioned to serve your real estate needs in a
          bustling, strategic location. Visit us and experience the advantage of
          connectivity and convenience at Mahikaz Properties.
        </p>
        <div className="w-full flex flex-col md:gap-8 gap-4 md:pt-16 pt-4 md:pb-28 pb-20">
         <div className="relative rounded-tr-[60px]">

            <img src={office1} alt="" />
            <div className="absolute rounded-tr-[60px] top-0  w-[95%] h-full bg-[#32210D66]"></div>
         </div>
         <div className="flex flex-row md:gap-x-8 gap-x-4">
            <div className="relative rounded-bl-[60px] ">
                <img src={office2} alt="" />
                <div className="absolute rounded-bl-[60px]  top-0  w-full h-full bg-[#32210D66]"></div>
            </div>
            <div className="relative rounded-br-[60px] ">
            <img src={office3} alt="" />
            <div className="absolute rounded-br-[60px]  top-0  w-full h-full bg-[#32210D66]"></div>
            </div>
         </div>
        </div>
      </div>
    </div>
  );
};

export default OurOffice;
