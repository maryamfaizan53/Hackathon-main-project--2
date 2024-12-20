"use client";

import React from 'react';
import Image from 'next/image';
import { LiaStarSolid } from 'react-icons/lia';
import Link from 'next/link';
import { useWishlist } from '../context/WishlistContext';
import { topSellProducts } from '../lib/products'; // Import products

export default function TopSell() {
  const { addToWishlist } = useWishlist();

  const handleAddToWishlist = (product: typeof topSellProducts[number]) => {
    addToWishlist({
      id: product.id.toString(),
      title: product.name,
      price: product.price,
      image: product.imageUrl,
    });
  };

  return (
    <div id='topsell'>
      <h2 className="font-extrabold text-[35px] text-center my-8 md:text-[45px] lg:text-[60px] lg:mt-10">
        TOP SELLING
      </h2>
      <div className="flex justify-center items-center overflow-x-auto gap-5">
        {topSellProducts.map((product) => (
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
              <figure className="text-[20px] font-bold pl-3 inline-flex">${product.price}</figure>
            </Link>

            <button
              onClick={() => handleAddToWishlist(product)}
              className="mt-3 px-4 py-2 border-2 border-black rounded hover:bg-black hover:text-white"
            >
              Add to Wishlist
            </button>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center mt-10">
        <Link href="/items">
          <button className="border-2 border-black rounded-2xl px-28 py-3 text-[20px] font-bold md:px-12 hover:bg-black hover:text-white">
            View All
          </button>
        </Link>
      </div>
    </div>
  );
}


// "use client";

// import React from 'react';
// import Image from 'next/image';
// import { LiaStarSolid } from 'react-icons/lia';
// import Link from 'next/link';
// import { useWishlist } from '../context/WishlistContext';

// export default function TopSell() {
//   const { addToWishlist } = useWishlist();

//   const products = [
//     {
//       id: 5,
//       name: 'Vertical Striped Shirt',
//       imageUrl: '/images/pic5.png',
//       price: 212,
//       rating: 5,
//     },
//     {
//       id: 6,
//       name: 'Courage Graphic T-Shirt',
//       imageUrl: '/images/pic6.png',
//       price: 145,
//       rating: 3,
//     },
//     {
//       id: 7,
//       name: 'Loose Fits Bermuda Shorts',
//       imageUrl: '/images/pic7.png',
//       price: 80,
//       rating: 4,
//     },
//     {
//       id: 8,
//       name: 'Faded Skiny Jeans',
//       imageUrl: '/images/pic8.png',
//       price: 210,
//       rating: 5,
//     },
//   ];

//   const handleAddToWishlist = (product: typeof products[number]) => {
//     addToWishlist({
//       id: product.id.toString(),
//       title: product.name,
//       price: product.price,
//       image: product.imageUrl,
//     });
//   };

//   return (
//     <div id='topsell'>
//       <h2 className="font-extrabold text-[35px] text-center my-8 md:text-[45px] lg:text-[60px] lg:mt-10">
//         TOP SELLING
//       </h2>
//       <div className="flex justify-center items-center overflow-x-auto gap-5">
//         {products.map((product) => (
//           <div key={product.id} className='hover:shadow-lg transition-shadow p-5 hover:rounded-r-xl'>
//             <Link href={`/product/${product.id}`}>
//               <Image
//                 src={product.imageUrl}
//                 alt={product.name}
//                 className="object-cover w-[300px] h-[300px] rounded-[20px]"
//                 width={300}
//                 height={300}
//               />
//               <h4 className="text-[20px] font-bold pl-3 pt-2">{product.name}</h4>
//               <div className="flex items-center pl-2">
//                 {Array.from({ length: product.rating }, (_, index) => (
//                   <LiaStarSolid key={index} color="orange" size="20px" />
//                 ))}
//                 <figcaption className="px-3 text-[12px]">{product.rating}.0/5</figcaption>
//               </div>
//               <figure className="text-[20px] font-bold pl-3 inline-flex">${product.price}</figure>
//             </Link>

//             {/* Add to Wishlist Button */}
//             <button
//               onClick={() => handleAddToWishlist(product)}
//               className="mt-3 px-4 py-2 border-2 border-black rounded hover:bg-black hover:text-white"
//             >
//               Add to Wishlist
//             </button>
//           </div>
//         ))}
//       </div>
//       <div className="flex justify-center items-center mt-10">
//         <Link href="/items">
//           <button className="border-2 border-black rounded-2xl px-28 py-3 text-[20px] font-bold md:px-12 hover:bg-black hover:text-white">
//             View All
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// }


// import React from 'react';
  // import Image from 'next/image';
  // import { LiaStarSolid } from 'react-icons/lia';
  // import Link from 'next/link';

  // export default function TopSell() {
  //   const products = [
  //     {
  //       id: 5,
  //       name: 'Vertical Striped Shirt',
  //       imageUrl: '/images/pic5.png',
  //       price: 212,
  //       rating: 5,
  //     },
  //     {
  //       id: 6,
  //       name: 'Courage Graphic T-Shirt',
  //       imageUrl: '/images/pic6.png',
  //       price: 145,
  //       rating: 3,
  //     },
  //     {
  //       id: 7,
  //       name: 'Loose Fits Bermuda Shorts',
  //       imageUrl: '/images/pic7.png',
  //       price: 80,
  //       rating: 4,
  //     },
  //     {
  //       id: 8,
  //       name: 'Faded Skiny Jeans',
  //       imageUrl: '/images/pic8.png',
  //       price: 210,
  //       rating: 5,
  //     },
  //   ];

  //   return (
  //     <div id='topsell'>
  //       <h2 className="font-extrabold text-[35px] text-center my-8 md:text-[45px] lg:text-[60px] lg:mt-10">
  //         TOP SELLING
  //       </h2>
  //       <div className="flex justify-center items-center overflow-x-auto gap-5">
  //         {products.map((product) => (
  //           <div key={product.id} className='hover:shadow-lg transition-shadow p-5 hover:rounded-r-xl'>
  //             <Link href={`/product/${product.id}`}>
  //               <Image
  //                 src={product.imageUrl}
  //                 alt={product.name}
  //                 className="object-cover w-[300px] h-[300px] rounded-[20px]"
  //                 width={300}
  //                 height={300}
  //               />
  //               <h4 className="text-[20px] font-bold pl-3 pt-2">{product.name}</h4>
  //               <div className="flex items-center pl-2">
  //                 {Array.from({ length: product.rating }, (_, index) => (
  //                   <LiaStarSolid key={index} color="orange" size="20px" />
  //                 ))}
  //                 <figcaption className="px-3 text-[12px]">{product.rating}.0/5</figcaption>
  //               </div>
  //               <figure className="text-[20px] font-bold pl-3 inline-flex">${product.price}</figure>
  //             </Link>
  //           </div>
  //         ))}
  //       </div>
  //       <div className="flex justify-center items-center mt-10">
  //        <Link href="/items"> <button className="border-2 border-black rounded-2xl px-28 py-3 text-[20px] font-bold md:px-12 hover:bg-black hover:text-white">
  //           View All
  //         </button> </Link>
  //       </div>
  //     </div>
  //   );
  // }
