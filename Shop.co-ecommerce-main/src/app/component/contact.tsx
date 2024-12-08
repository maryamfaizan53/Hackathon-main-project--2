import React from 'react'

export default function contact() {
  return (
    <div className='flex justify-center items-center m-auto bg-black flex-col md:flex-row mt-10 w-[80%] rounded-3xl relative top-16'>
        <h3 className='flex flex-wrap text-[32px] font-extrabold text-white text-left p-1 pl-5 md:text-[40px]'>STAY UPTO DATE UPON OUR LATEST OFFERS</h3>
        <div className='flex justify-center items-center flex-col p-5 w-[100%] md:w-[45%]'>
        <input type="email" placeholder='Enter Your E-Mail' className='rounded-3xl px-5 py-3 md:px-8 lg:px-[65px]'  />
        <button className='rounded-3xl px-5 py-[10px] mt-3 bg-white text-lg font-bold md:text-[16px] lg:text-[24px] '>Subscribe To Newsletters</button>
        </div>
    </div>

  )
}
 