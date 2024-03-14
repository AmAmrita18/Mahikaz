import React from "react";
import heroImage from "/hero-home.png";
import Header from "../Header";
const HeroHome = () => {
  return (
    <div
      className="w-full h-full"
      style={{
        backgroundImage: `url('${heroImage}')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        objectFit: "cover",
      }}
    >
      <Header transparent={true}/>
      <div className="w-[80%] h-full mx-auto max-w-[1200px]  md:pt-36 md:pb-56 pt-20 pb-32 flex flex-col gap-12 justify-center items-center">
        <div className="text-center">
          <h1 className="text-white text-[23px] leading-[26.5px] tracking-widest ">
            Curated Real Estate
          </h1>
          <h1 className="text-white md:text-[60px] text-[45px] leading-[69.12px] tracking-widest ">
            MAHIKAZ PROPERTIES
          </h1>
        </div>
        <p className="text-white text-[20px] leading-[35px] md:w-[50%] md:px-14 text-center">
          Dive Into A Realm, Where Every Property Tells A Story, And Every Space
          Whispers Luxury
        </p>
        <button className="border transition-all duration-700 ease-in-out  hover:scale-95 border-[#937D64]">
          <h1 className="text-white text-[17px] leading-[19.58px] px-14 py-3">
            SEARCH ALL HOMES
          </h1>
        </button>
      </div>
    </div>
  );
};

export default HeroHome;
