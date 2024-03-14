import React from "react";
import infoBG from "/footerBG.png";

const SimilarListings = () => {
  return (
    <div className="w-full"
    style={{
        backgroundImage: `url('${infoBG}')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        objectFit: "cover",
      }}>
      <div className="w-[80%] h-full mx-auto max-w-[1200px] py-28">
        <div className="w-[170px] h-1 bg-black rounded-md"></div>
        <h1 className="text-[50px] py-4 text-black leading-[57.6px] tracking-[-1.26px]">
          Similar Listings
        </h1>
        
      </div>
    </div>
  );
};

export default SimilarListings;
