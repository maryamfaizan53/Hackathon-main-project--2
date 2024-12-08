import Link from 'next/link';
import React from 'react';
import { CgProfile } from "react-icons/cg";
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

export default function Header() {
  return (
    <div>
      <div className="flex justify-center items-center bg-black h-10 text-white">
        <h3 className="text-[12px] pr-3 md:text-sm lg:text-sm ">Sign up and get 50% off on your first order</h3>
        <Link href="/sign" className="underline">Sign Up Now</Link>
      </div>
      <div className="flex justify-around items-center p-3">
        <h2 className="text-black text-2xl font-extrabold lg:text-2xl"><Link href="/"> SHOP.CO</Link></h2>
        <div className='hidden lg:flex gap-10'>
        <Link href="/items">Shop</Link>
        <Link href="#topsell">OnSale</Link>
        <Link href="#arrival">New Arrival</Link>
        <Link href="#brand">Brands</Link>
        </div>
        <div className='flex justify-center items-center gap-3'>
        <input 
          type="search" 
          placeholder="Search for Products" 
          className="rounded-lg border-2 border-black w-40 h-10 hidden px-4 md:w-96 md:flex " 
        />
        </div>
        <div className="flex space-x-4 items-center justify-around">
        <FaSearch size={24} /> 
          <FaShoppingCart size={24}/>
       
       <Link href="/login"> <CgProfile size={28} /></Link>
        </div>
      </div>
    </div>
  );
}
