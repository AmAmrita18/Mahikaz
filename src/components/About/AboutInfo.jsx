import React from "react";
import infoBG from "/footerBG.png";
import infoPeople from "/infoPeople.png";
const AboutInfo = () => {
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
      <div className="py-32 flex flow-row">
        <div
          className="w-[50%] h-[750px]"
          style={{
            backgroundImage: `url('${infoPeople}')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            objectFit: "cover",
          }}
        >
          <div className="w-[93%] rounded-r-[54px] bg-[#39271680] h-[657px] "></div>
        </div>

        <div className="w-[50%] h-full mx-auto max-w-[1200px] flex flex-col gap-12 pl-16 pr-32">
          <h1 className="text-[50px] text-black leading-[57.6px] tracking-[-1.26px]">
            Navigating Your Real Estate Dreams in Mauritius
          </h1>
          <p className="text-[20px] text-black leading-[28px] tracking-[-0.5px]">
            Welcome to Mahikaz, where your journey to find the perfect home in
            the breathtaking landscapes of Mauritius begins.
          </p>
          <p className="text-[20px] text-black leading-[28px] tracking-[-0.5px]">
            Nestled in the heart of the Indian Ocean, our island paradise offers
            a unique blend of tranquil beaches, lush greenery, and vibrant
            culture. At Mahikaz, we pride ourselves on our deep understanding of
            Mauritius' diverse real estate market, and our commitment to helping
            you discover a place where you can create unforgettable memories.
          </p>
          <button className="bg-[#251408] w-[200px] text-[17px] leading-[19.58px] tracking-[-0.43px] text-white px-8 py-6 rounded-tr-xl">
            LEARN MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutInfo;
