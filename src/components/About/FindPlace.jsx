import React from 'react'
import infoBG from "/footerBG.png";

import { estates } from './FindPlaceArr'
import { FaBed, FaHashtag } from 'react-icons/fa6'
import { FaBath } from 'react-icons/fa'
import DropdownList from './DropdownList';

const FindPlace = () => {
  return (
    <div className='w-full' 
    style={{
      backgroundImage: `url('${infoBG}')`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      objectFit: "cover",
    }}>
        <div className="w-[80%] h-full mx-auto max-w-[1200px] py-28">
          <div className='w-[170px] h-1 bg-black rounded-md'></div>
          <h1 className='text-[50px] py-4 text-black leading-[57.6px] tracking-[-1.26px]'>Find your next place to live</h1>
          <DropdownList/>
         <div className='grid lg:grid-cols-3  md:grid-cols-2 grid-cols-1 gap-x-12 gap-y-8'>
         {
            estates.map((est) => (
              <div key={est.id} className="flex flex-col shadow-2xl  bg-[#fff] rounded-[32px]">
                <img src={est.thumbnail} alt="thumbnail" className='w-full h-52 rounded-t-[30px] brightness-50' />
                <h3 className='text-black text-[24px] p-8 leading-[27.65px] tracking-[-0.6px] border-b border-[#E4E4E4]'>{est.title}</h3>
                <div className="flex justify-between w-full rounded-b-[32px] text-black">
                  <p className='flex gap-x-2 py-3  px-12 items-center'>
                    <FaBed />
                    {est.beds}
                  </p>
                  <p className='flex gap-x-2 py-4  px-12 items-center border-l border-r border-[#E4E4E4]'>
                    <FaBath />
                    {est.washroom}
                  </p>
                  <p className='flex gap-x-2 py-3  md:px-12 px-4 items-center'>
                    <FaHashtag />
                    {est.livingroom}
                  </p>
                </div>
              </div>
            ))
          }
         </div>
        </div>
    </div>
  )
}

export default FindPlace