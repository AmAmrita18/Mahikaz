import React from 'react'

const Copyright = () => {
  return (
    <div className='bg-white w-full'>
        <div className="w-[80%] h-full mx-auto max-w-[1200px] flex md:flex-row  flex-col text-center justify-between md:my-16 ">
          <h1 className="md:text-[16px] text-[12px] text-[#1E1E1E] tracking-widest leading-[18.43px]">
            Built With Passion by <span className="border-b-2 border-black pb-2">The Meraki Studio</span>
          </h1>
          <h1 className="md:text-[16px] text-[12px] text-[#1E1E1E] tracking-widest leading-[18.43px]">
            © Copyright 2024 MahiKaz Limited | Privacy Policy
          </h1>
        </div>
    </div>
  )
}

export default Copyright