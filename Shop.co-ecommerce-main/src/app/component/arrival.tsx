"use client"; // If not already marked as 'use client'

import React from 'react';
import Image from 'next/image';
import { LiaStarSolid } from 'react-icons/lia';
import Link from 'next/link';
import { useWishlist } from '../context/WishlistContext'; // import the hook

export default function NewArrivals() {
  const { addToWishlist } = useWishlist();

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

  // Transform product to WishlistItem interface
  const handleAddToWishlist = (product: typeof products[number]) => {
    addToWishlist({
      id: product.id.toString(),
      title: product.name,
      price: product.price,
      image: product.imageUrl,
    });
  };

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

            {/* Add to Wishlist Button */}
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


// import React from 'react';
// import Image from 'next/image';
// import { LiaStarSolid } from 'react-icons/lia';
// import Link from 'next/link';

// export default function NewArrivals() {
//   const products = [
//     {
//       id: 1,
//       name: 'Hoodie For Mens',
//       imageUrl: '/images/pic1.png',
//       price: 120,
//       rating: 5,
//     },
//     {
//       id: 2,
//       name: 'T-Shirts For Mens',
//       imageUrl: '/images/pic2.png',
//       price: 240,
//       rating: 3,
//     },
//     {
//       id: 3,
//       name: 'Trousers For Women',
//       imageUrl: '/images/pic3.png',
//       price: 180,
//       rating: 4,
//     },
//     {
//       id: 4,
//       name: 'Fits Bermuda T-Shirts',
//       imageUrl: '/images/pic4.png',
//       price: 130,
//       rating: 5,
//     },
//   ];

//   return (
//     <div id='arrival' className="border-b-2 border-black py-10">
//       <h2 className="font-extrabold text-[35px] text-center my-8 md:text-[45px] lg:text-[60px] lg:mt-10">
//         NEW ARRIVALS
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
//                 <figcaption className="px-3 text-[12px]">
//                   {product.rating}.0/5
//                 </figcaption>
//               </div>
//               <figure className="text-[20px] font-bold pl-3 inline-flex">
//                 ${product.price}
//               </figure>
//             </Link>
//           </div>
//         ))}
//       </div>
//       <div className="flex justify-center items-center mt-10">
//       <Link href="/items"> <button className="border-2 border-black rounded-2xl px-28 py-3 text-[20px] font-bold md:px-12 hover:bg-black hover:text-white">
//           View All
//         </button> </Link> 
//       </div>
//     </div>
//   );
// }


// han kr rha ho ..yeh keh rha ho ke ham neh ushi repo mai krdia kaam ..new banai thi na usmeh nai kra hahh...baat suno ab AP ...usmeh dair bhat lge gi mai apne pas add krlu repo ko ? ok phr mai products ka sys dynamic ek page se le kar aao ga then phr sab par display hoga then ham agye yeh ham ko sanity and database bi lage ga toh issue nai ayega apko..yr lakin mjhe to aya nhi ye sb...dekhdeo mai krta jao ga and ap ko voice note bhej bi dooo ga. agar ap bolona toh call pr ... nhi voice bhj dena...haye,,, oh no... suno pr call par ana ek baar toh mai project mai kia kra hai kese kra hai bs thora sa khud se bologa ap samjana shi ha nah prh ap code dekho gi nah apko sab agye ga easy hai koi inta bara kaam nai hai ,,sanity meneh seekh li hai..ap ko dair haina kab soo gi ap toh thora abi krlein .. han...acha prr ek baat bolo agar ap han bolo toh bonooooooooooooooooooooooo.......woh hena status mai lete wali thi nah,,toh leteh ke bagair hogi.. nah.. dekho mai kia... han bolo gi nah..han bolo gi nah bolo...no.............yar dil horha tah nah islye bola hai..hn bol do nah ,, kia hogye ga...no...kabi hn nhi bolti mere ko toh...hn bol do nah itni achi thi mai koi nazar thori lgao ga..sach mai... hn bol do nah ...sachi dil kar rha ..