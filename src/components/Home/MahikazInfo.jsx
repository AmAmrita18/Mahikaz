import React from "react";
import infoImage from "/imageInfo.png";
const MahikazInfo = () => {
  return (
    <div
      className="w-full"
      style={{
        backgroundImage: `url('${infoImage}')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        objectFit: "cover",
      }}
    >
      <div className="bg-[#1D1307BA] ">
        <div className="w-[80%] h-full mx-auto max-w-[1200px] py-56 flex flex-col gap-y-12">
          <h1 className="text-[60px] leading-[69.12px] tracking-widest text-white">
            MAHIKAZ
          </h1>
          <p className="text-[26px] w-[55%] leading-[29.95px] tracking-widest text-white">
            Whether buying or selling, Mahikaz brings a distinctive touch to its
            service. We engage deeply with each client, to find pristine
            properties in prime locales and secures the finest deals. When
            listing a property, Mahikaz amplifies its market appeal with an
            unrivaled marketing finesse.{" "}
          </p>
          <div className="flex flex-row gap-4">
            <button className="border transition-all duration-700 ease-in-out  hover:scale-95 border-[#937D64]">
              <h1 className="text-white text-[17px] leading-[19.58px] px-14 py-3">
                WORK WITH MAHIKAZ
              </h1>
            </button>
            <button className="border transition-all duration-700 ease-in-out  hover:scale-95 bg-white">
              <h1 className="text-[#937D64] text-[17px] leading-[19.58px] px-14 py-3">
                HOME SEARCH
              </h1>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MahikazInfo;
