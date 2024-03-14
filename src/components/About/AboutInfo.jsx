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
      <div className="md:py-32 py-12 flex md:flex-row flex-col">
        <div
          className="md:w-[50%] h-[750px] brightness-50 md:rounded-tr-[54px]"
          style={{
            backgroundImage: `url('${infoPeople}')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            objectFit: "cover",
          }}
        >
        </div>

        <div className="md:w-[50%] h-full mx-auto max-w-[1200px] flex flex-col gap-12 md:pl-12 md:pr-32 px-10">
          <h1 className="md:text-[50px] text-[40px] text-black leading-[57.6px] tracking-[-1.26px]">
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
