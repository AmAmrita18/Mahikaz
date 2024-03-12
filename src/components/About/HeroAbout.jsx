import React from "react";
import heroImageAbout from "/heroAboutImg.png";
import Header from "../Header";
const HeroAbout = () => {
  return (
    <div
      className="w-full h-full"
      style={{
        backgroundImage: `url('${heroImageAbout}')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        objectFit: "cover",
      }}
    >
      <Header />
      <div className="w-[80%] h-full mx-auto max-w-[1200px]  pt-36 pb-56 flex flex-col gap-6 justify-center items-center">
        <h1 className="text-[60px] px-60 text-center text-white leading-[80px] tracking-[-2.01px]">
          Unveiling the Splendor of Mauritius Real Estate
        </h1>
        <p className="text-white text-[20px] leading-[35px] w-[50%]  text-center">
          Embark on a journey to your dream home in Mauritius with our tailored
          services, bespoke properties, and unmatched local expertise. Let
          Mahikaz guide you to a world where luxury meets tranquility.
        </p>
        <button className="border transition-all duration-700 ease-in-out  hover:scale-95 border-[#937D64]">
          <h1 className="text-white text-[17px] leading-[19.58px] px-14 py-3">
            EXPLORE MORE
          </h1>
        </button>
      </div>
    </div>
  );
};

export default HeroAbout;
