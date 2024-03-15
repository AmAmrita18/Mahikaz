import React from 'react'
import heroImage from "/MainBlogHero.png";
import Header from "../Header";
const MainBlogHero = () => {
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
    
      <Header transparent={true} />
      <div className="w-[80%] h-full mx-auto max-w-[1200px]  md:pt-36 md:pb-56 pt-20 pb-32 flex flex-col gap-6 justify-start items-start">
        <div className='bg-[#FFFFFF26] rounded-xl'><h1 className='px-6 py-3 text-white text-[10px] leading-[11.52px] text-center'>REAL ESTATE</h1></div>
        <h1 className="md:text-[36px]   text-white md:leading-[41px]">
        The Hidden Gems of Mauritius Real Estate: <br /> Discovering Unique Properties
        </h1>
        <p className="text-[#E5E5E5] text-start text-[14px] leading-[20px] md:w-[50%] tracking-[-0.5px]">
          Ready to find your perfect home? Our team at Mahikaz is here to
          guide you through every step of your property journey. Contact us
          now and let's make your dream a reality.
        </p>
        <p className="text-white text-start text-[12px] leading-[20px] md:w-[50%] tracking-[-0.5px]">
        By Mahikaz Properties
        </p>
      </div>
   
  </div>
  )
}

export default MainBlogHero