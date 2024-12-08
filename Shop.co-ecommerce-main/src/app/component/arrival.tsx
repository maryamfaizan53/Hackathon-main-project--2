import React from 'react';
import Image from 'next/image';
import { LiaStarSolid } from 'react-icons/lia';
import Link from 'next/link';

export default function NewArrivals() {
  const products = [
    {
      id: 1,
      name: 'Hoodie For Mens',
      imageUrl: '/images/pic1.png',
      price: 120,
      rating: 5,
    },
    {
      id: 2,
      name: 'T-Shirts For Mens',
      imageUrl: '/images/pic2.png',
      price: 240,
      rating: 3,
    },
    {
      id: 3,
      name: 'Trousers For Women',
      imageUrl: '/images/pic3.png',
      price: 180,
      rating: 4,
    },
    {
      id: 4,
      name: 'Fits Bermuda T-Shirts',
      imageUrl: '/images/pic4.png',
      price: 130,
      rating: 5,
    },
  ];

  return (
    <div id='arrival' className="border-b-2 border-black py-10">
      <h2 className="font-extrabold text-[35px] text-center my-8 md:text-[45px] lg:text-[60px] lg:mt-10">
        NEW ARRIVALS
      </h2>
      <div className="flex justify-center items-center overflow-x-auto gap-5">
        {products.map((product) => (
          <div key={product.id} className='hover:shadow-lg transition-shadow p-5 hover:rounded-r-xl'>
            <Link href={`/product/${product.id}`}>
              <Image
                src={product.imageUrl}
                alt={product.name}
                className="object-cover w-[300px] h-[300px] rounded-[20px]"
                width={300}
                height={300}
              />
              <h4 className="text-[20px] font-bold pl-3 pt-2">{product.name}</h4>
              <div className="flex items-center pl-2">
                {Array.from({ length: product.rating }, (_, index) => (
                  <LiaStarSolid key={index} color="orange" size="20px" />
                ))}
                <figcaption className="px-3 text-[12px]">
                  {product.rating}.0/5
                </figcaption>
              </div>
              <figure className="text-[20px] font-bold pl-3 inline-flex">
                ${product.price}
              </figure>
            </Link>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center mt-10">
      <Link href="/items"> <button className="border-2 border-black rounded-2xl px-28 py-3 text-[20px] font-bold md:px-12 hover:bg-black hover:text-white">
          View All
        </button> </Link> 
      </div>
    </div>
  );
}
