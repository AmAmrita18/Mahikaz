import React from "react";
import SimilarListingSlider from "./SimilarListingSlider";


const SimilarListings = () => {
  return (
    <div className="w-full bg-white"
   >
      <div className="w-[80%] h-full mx-auto max-w-[1200px] pt-28">
        <div className="w-[170px] h-1 bg-black rounded-md"></div>
        <h1 className="text-[50px] py-4 text-black leading-[57.6px] tracking-[-1.26px]">
          Similar Listings
        </h1>
        <SimilarListingSlider/>
      </div>
    </div>
  );
};

export default SimilarListings;
