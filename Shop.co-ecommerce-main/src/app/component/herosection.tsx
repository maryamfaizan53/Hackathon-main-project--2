import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function herosection() {
  return (
    <div>
    <div className='mt-3 lg:flex md:m-10'>
      <div>
        <h1 className='text-[45px] font-[900] pl-3 leading-[45px] m-0 md:text-[35px] lg:text-[60px] lg:leading-[70px] xl:text-[85px] xl:leading-[80px]'>FIND CLOTHES</h1>
         <h1 className='text-[45px] font-[900] pl-3 leading-[45px] m-0 md:text-[35px] lg:text-[60px] lg:leading-[70px] xl:text-[85px] xl:leading-[80px]'> THAT MATCHES</h1>
        <h1 className='text-[45px] font-[900] pl-3 leading-[45px] m-0 md:text-[35px] lg:text-[60px] lg:leading-[70px] xl:text-[85px] xl:leading-[80px]'>YOUR STYLES</h1>
        <p className='text-[18px] pl-3 pt-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, incidunt. Cumque porro neque consequatur assumenda?</p> 
        <Link href="/items"><button className='flex justify-center items-center border-2 border-black rounded-3xl text-center px-28 py-3 ml-3 mt-3 bg-black text-white text-2xl md:px-20 '>Shop Now</button></Link>     
      <div className='m-5 flex justify-around items-center flex-wrap'>
        <h2 className='text-3xl font-[900] leading-5 border-r-2 p-5 lg:border-hidden'>200+ <br /><span className='text-[12px] font-medium '>International Brands</span></h2>
        <h2 className='text-3xl font-[900] leading-5  p-5'>2,000+ <br /><span className='text-[12px] font-medium '>High Quality Product</span></h2>
        <h2 className='text-3xl font-[900] leading-5  p-5'>30,000+ <br /><span className='text-[12px] font-medium '>Happy Customers</span></h2>
      </div>
      </div>
      <Image
          src="/hero.jpg"
          alt="hero-image"
          width={600}
          height={0}
          className='w-[100%] sm:w-[500px] md:w-[400px] lg:w-[500px] h-auto'
        />
    </div>
     
     <div id='brand' className='flex justify-evenly items-center flex-wrap bg-black text-white text-xl font-medium py-5 md:text-2xl md:font-bold lg:text-3xl xl:text-4xl xl:py-8 xl:font-extrabold'>
        <h3>VERSACE</h3>
        <h3>ZARA</h3>
        <h3>GUCCI</h3>
        <h3>PRADA</h3>
        <h3>CALVIN KLEIN</h3>
     </div>
    </div>
  )
}
