import React from "react";
import bgwhite2 from "/BG2.png";
import region1 from "../../assets/region1.png";
import region2 from "../../assets/region2.png";
import region3 from "../../assets/region3.png";

const Region = () => {
  return (
    <div
      className="w-full"
      style={{
        backgroundImage: `url('${bgwhite2}')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        objectFit: "cover",
      }}
    >
      <div className="w-[80%] h-full mx-auto max-w-[1200px] md:py-32 py-12 flex flex-col items-center gap-y-12">
        <h1 className="lg:text-[60px] md:text-[50px] text-[45px] text-center leading-[69.12px] tracking-widest text-black">
          CURATED BY REGION
        </h1>
        <div className="flex md:flex-row flex-col lg:gap-12 gap-8">
          <div className="relative">
            <img src={region1} alt="" className="brightness-50" />
            <div className="lg:px-8 pl-3 absolute bottom-0 mb-4">
              <h1 className="text-white lg:text-[40px] text-[30px] leading-[46.08px] tracking-widest">
                North Coast
              </h1>
              <h2 className="text-white text-[20px] leading-[23.04px] tracking-widest">
                86 Properties
              </h2>
            </div>
          </div>

          <div className="relative">
            <img src={region2} alt="" className="brightness-50" />
            <div className="lg:px-8 pl-3 absolute bottom-0 mb-4">
              <h1 className="text-white lg:text-[40px] text-[30px] leading-[46.08px] tracking-widest">
                City Center
              </h1>
              <h2 className="text-white text-[20px] leading-[23.04px] tracking-widest">
                54 Properties
              </h2>
            </div>
          </div>

          <div className="relative">
            <img src={region3} alt="" className="brightness-50 " />
            <div className="lg:px-8 pl-3 absolute bottom-0 mb-4">
              <h1 className="text-white lg:text-[40px] text-[30px] leading-[46.08px] tracking-widest">
                West Coast
              </h1>
              <h2 className="text-white text-[20px] leading-[23.04px] tracking-widest">
                97 Properties
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Region;
