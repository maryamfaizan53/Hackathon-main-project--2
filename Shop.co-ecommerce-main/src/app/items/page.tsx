"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { LiaStarSolid } from 'react-icons/lia';
import Link from 'next/link';
import { useWishlist } from '../context/WishlistContext';
import { allProducts } from '../lib/products'; // Import products

export default function Items() {
  const [sortBy, setSortBy] = useState('Most Popular');
  const { addToWishlist } = useWishlist();

  const handleAddToWishlist = (product: typeof allProducts[number]) => {
    addToWishlist({
      id: product.id.toString(),
      title: product.name,
      price: product.price,
      image: product.imageUrl,
    });
  };

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Sidebar Filters */}
      <aside className="w-full hidden lg:inline lg:w-[200px] xl:w-[250px] p-5 border-r">
        {/* ...Filter UI... */}
      </aside>

      {/* Main Content */}
      <main className="flex-1">
        <header className="flex justify-between items-center p-5 border-b">
          <h1 className="text-2xl font-bold">Casual</h1>
          <div>
            <label className="text-sm">Sort by: </label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border px-2 py-1"
            >
              <option>Most Popular</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-5">
          {allProducts.map((product) => (
            <div key={product.id} className="shadow rounded-md p-4">
              <Link href={`/product/${product.id}`}>
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-[250px] object-cover rounded"
                  width={300}
                  height={250}
                />
                <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <LiaStarSolid
                      key={index}
                      color={index < product.rating ? 'orange' : 'gray'}
                    />
                  ))}
                  <span className="text-sm">{product.rating}/5</span>
                </div>
                <p className="font-bold mt-1">${product.price}</p>
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

        {/* Pagination */}
        <div className="flex justify-center items-center gap-3 mt-5">
          {/* ...Pagination UI... */}
        </div>
      </main>
    </div>
  );
}


// "use client";
// import React, { useState } from 'react';
// import Image from 'next/image';
// import { LiaStarSolid } from 'react-icons/lia';
// import Link from 'next/link';
// import { useWishlist } from '../context/WishlistContext';

// export default function Items() {
//   const [sortBy, setSortBy] = useState('Most Popular');
//   const { addToWishlist } = useWishlist();

//   const products = [
//     {
//       id: 1,
//       name: 'Hoodie For Mens',
//       imageUrl: '/images/pic1.png',
//       price: 212,
//       rating: 5,
//     },
//     {
//       id: 2,
//       name: 'T-Shirts For Mens',
//       imageUrl: '/images/pic2.png',
//       price: 145,
//       rating: 3,
//     },
//     {
//       id: 3,
//       name: 'Trousers For Women',
//       imageUrl: '/images/pic3.png',
//       price: 80,
//       rating: 4,
//     },
//     {
//       id: 4,
//       name: 'Fits Bermuda T-Shirts',
//       imageUrl: '/images/pic4.png',
//       price: 210,
//       rating: 5,
//     },
//     {
//       id: 5,
//       name: 'Hoodie For Mens',
//       imageUrl: '/images/pic5.png',
//       price: 212,
//       rating: 5,
//     },
//     {
//       id: 6,
//       name: 'T-Shirts For Mens',
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
//       name: 'Fits Bermuda T-Shirts',
//       imageUrl: '/images/pic8.png',
//       price: 210,
//       rating: 5,
//     },
//     {
//       id: 9,
//       name: 'Fits Bermuda T-Shirts',
//       imageUrl: '/images/pic9.png',
//       price: 189,
//       rating: 5,
//     },
//     {
//       id: 10,
//       name: 'Fits Bermuda T-Shirts',
//       imageUrl: '/images/pic10.png',
//       price: 110,
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
//     <div className="flex flex-col lg:flex-row">
//       {/* Sidebar Filters */}
//       <aside className="w-full hidden lg:inline lg:w-[200px] xl:w-[250px] p-5 border-r">
//         <h2 className="text-lg font-bold mb-5">Filters</h2>
//         {/* Categories */}
//         <div className="mb-5">
//           <h3 className="font-medium">Categories</h3>
//           <ul className="space-y-2">
//             {['T-shirts', 'Shorts', 'Shirts', 'Hoodies', 'Jeans'].map((category) => (
//               <li key={category}>
//                 <label>
//                   <input type="checkbox" className="mr-2" />
//                   {category}
//                 </label>
//               </li>
//             ))}
//           </ul>
//         </div>
//         {/* Price */}
//         <div className="mb-5">
//           <h3 className="font-medium">Price</h3>
//           <input type="range" min="50" max="200" className="w-full mt-3" />
//           <div className="flex justify-between text-sm">
//             <span>$50</span>
//             <span>$200</span>
//           </div>
//         </div>
//         {/* Colors */}
//         <div className="mb-5">
//           <h3 className="font-medium">Colors</h3>
//           <div className="flex gap-2 flex-wrap mt-2">
//             {['red', 'blue', 'green', 'yellow', 'pink', 'purple'].map((color) => (
//               <div
//                 key={color}
//                 className="w-6 h-6 rounded-full border cursor-pointer"
//                 style={{ backgroundColor: color }}
//               />
//             ))}
//           </div>
//         </div>
//         {/* Sizes */}
//         <div className="mb-5">
//           <h3 className="font-medium">Size</h3>
//           <div className="flex gap-2 flex-wrap mt-2">
//             {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
//               <span key={size} className="border px-3 py-1 text-sm cursor-pointer">
//                 {size}
//               </span>
//             ))}
//           </div>
//         </div>
//         {/* Dress Style */}
//         <div className="mb-5">
//           <h3 className="font-medium">Dress Style</h3>
//           <ul className="space-y-2">
//             {['Casual', 'Formal', 'Party', 'Gym'].map((style) => (
//               <li key={style}>
//                 <label>
//                   <input type="checkbox" className="mr-2" />
//                   {style}
//                 </label>
//               </li>
//             ))}
//           </ul>
//         </div>
//         <button className="w-full py-2 bg-black text-white rounded-md mt-3">
//           Apply Filter
//         </button>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1">
//         {/* Header */}
//         <header className="flex justify-between items-center p-5 border-b">
//           <h1 className="text-2xl font-bold">Casual</h1>
//           <div>
//             <label className="text-sm">Sort by: </label>
//             <select
//               value={sortBy}
//               onChange={(e) => setSortBy(e.target.value)}
//               className="border px-2 py-1"
//             >
//               <option>Most Popular</option>
//               <option>Price: Low to High</option>
//               <option>Price: High to Low</option>
//             </select>
//           </div>
//         </header>

//         {/* Product Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-5">
//           {products.map((product) => (
//             <div key={product.id} className="shadow rounded-md p-4">
//               <Link href={`/product/${product.id}`}>
//                 <Image
//                   src={product.imageUrl}
//                   alt={product.name}
//                   className="w-full h-[250px] object-cover rounded"
//                   width={300}
//                   height={250}
//                 />
//                 <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
//                 <div className="flex items-center gap-1">
//                   {Array.from({ length: 5 }).map((_, index) => (
//                     <LiaStarSolid
//                       key={index}
//                       color={index < product.rating ? 'orange' : 'gray'}
//                     />
//                   ))}
//                   <span className="text-sm">{product.rating}/5</span>
//                 </div>
//                 <p className="font-bold mt-1">${product.price}</p>
//               </Link>

//               {/* Add to Wishlist Button */}
//               <button
//                 onClick={() => handleAddToWishlist(product)}
//                 className="mt-3 px-4 py-2 border-2 border-black rounded hover:bg-black hover:text-white"
//               >
//                 Add to Wishlist
//               </button>
//             </div>
//           ))}
//         </div>

//         {/* Pagination */}
//         <div className="flex justify-center items-center gap-3 mt-5">
//           <button className="px-3 py-1 border rounded">Previous</button>
//           {Array.from({ length: 5 }).map((_, index) => (
//             <button
//               key={index}
//               className="px-3 py-1 border rounded hover:bg-black hover:text-white"
//             >
//               {index + 1}
//             </button>
//           ))}
//           <button className="px-3 py-1 border rounded">Next</button>
//         </div>
//       </main>
//     </div>
//   );
// }



// "use client"
// import React, { useState } from 'react';
// import Image from 'next/image';
// import { LiaStarSolid } from 'react-icons/lia';
// import Link from 'next/link';

// export default function Items() {
//   const [sortBy, setSortBy] = useState('Most Popular');

//   const products = [
//     {
//             id: 1,
//             name: 'Hoodie For Mens',
//             imageUrl: '/images/pic1.png',
//             price: 212,
//             rating: 5,
//           },
//           {
//             id: 2,
//             name: 'T-Shirts For Mens',
//             imageUrl: '/images/pic2.png',
//             price: 145,
//             rating: 3,
//           },
//           {
//             id: 3,
//             name: 'Trousers For Women',
//             imageUrl: '/images/pic3.png',
//             price: 80,
//             rating: 4,
//           },
//           {
//             id: 4,
//             name: 'Fits Bermuda T-Shirts',
//             imageUrl: '/images/pic4.png',
//             price: 210,
//             rating: 5,
//           },
//           {
//               id: 5,
//               name: 'Hoodie For Mens',
//               imageUrl: '/images/pic5.png',
//               price: 212,
//               rating: 5,
//             },
//             {
//               id: 6,
//               name: 'T-Shirts For Mens',
//               imageUrl: '/images/pic6.png',
//               price: 145,
//               rating: 3,
//             },
//             {
//               id: 7,
//               name: 'Loose Fits Bermuda Shorts',
//               imageUrl: '/images/pic7.png',
//               price: 80,
//               rating: 4,
//             },
//             {
//               id: 8,
//               name: 'Fits Bermuda T-Shirts',
//               imageUrl: '/images/pic8.png',
//               price: 210,
//               rating: 5,
//             },
//             {
//               id: 9,
//               name: 'Fits Bermuda T-Shirts',
//               imageUrl: '/images/pic9.png',
//               price: 189,
//               rating: 5,
//             },
//             {
//               id: 10,
//               name: 'Fits Bermuda T-Shirts',
//               imageUrl: '/images/pic10.png',
//               price: 110,
//               rating: 5,
//             },
//   ];

//   return (
//     <div className="flex flex-col lg:flex-row">
//       {/* Sidebar Filters */}
//       <aside className="w-full hidden lg:inline lg:w-[200px] xl:w-[250px] p-5 border-r">
//         <h2 className="text-lg font-bold mb-5">Filters</h2>
//         {/* Categories */}
//         <div className="mb-5">
//           <h3 className="font-medium">Categories</h3>
//           <ul className="space-y-2">
//             {['T-shirts', 'Shorts', 'Shirts', 'Hoodies', 'Jeans'].map((category) => (
//               <li key={category}>
//                 <label>
//                   <input type="checkbox" className="mr-2" />
//                   {category}
//                 </label>
//               </li>
//             ))}
//           </ul>
//         </div>
//         {/* Price */}
//         <div className="mb-5">
//           <h3 className="font-medium">Price</h3>
//           <input type="range" min="50" max="200" className="w-full mt-3" />
//           <div className="flex justify-between text-sm">
//             <span>$50</span>
//             <span>$200</span>
//           </div>
//         </div>
//         {/* Colors */}
//         <div className="mb-5">
//           <h3 className="font-medium">Colors</h3>
//           <div className="flex gap-2 flex-wrap mt-2">
//             {['red', 'blue', 'green', 'yellow', 'pink', 'purple'].map((color) => (
//               <div
//                 key={color}
//                 className={`w-6 h-6 rounded-full border cursor-pointer`}
//                 style={{ backgroundColor: color }}
//               />
//             ))}
//           </div>
//         </div>
//         {/* Sizes */}
//         <div className="mb-5">
//           <h3 className="font-medium">Size</h3>
//           <div className="flex gap-2 flex-wrap mt-2">
//             {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
//               <span key={size} className="border px-3 py-1 text-sm cursor-pointer">
//                 {size}
//               </span>
//             ))}
//           </div>
//         </div>
//         {/* Dress Style */}
//         <div className="mb-5">
//           <h3 className="font-medium">Dress Style</h3>
//           <ul className="space-y-2">
//             {['Casual', 'Formal', 'Party', 'Gym'].map((style) => (
//               <li key={style}>
//                 <label>
//                   <input type="checkbox" className="mr-2" />
//                   {style}
//                 </label>
//               </li>
//             ))}
//           </ul>
//         </div>
//         <button className="w-full py-2 bg-black text-white rounded-md mt-3">
//           Apply Filter
//         </button>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1">
//         {/* Header */}
//         <header className="flex justify-between items-center p-5 border-b">
//           <h1 className="text-2xl font-bold">Casual</h1>
//           <div>
//             <label className="text-sm">Sort by: </label>
//             <select
//               value={sortBy}
//               onChange={(e) => setSortBy(e.target.value)}
//               className="border px-2 py-1"
//             >
//               <option>Most Popular</option>
//               <option>Price: Low to High</option>
//               <option>Price: High to Low</option>
//             </select>
//           </div>
//         </header>

//         {/* Product Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-5">
//           {products.map((product) => (
//             <div key={product.id} className="shadow rounded-md p-4">
//              <Link href={`/product/${product.id}`}>
//               <Image
//                 src={product.imageUrl}
//                 alt={product.name}
//                 className="w-full h-[250px] object-cover rounded"
//                 width={300}
//                 height={250}
//               />
//               <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
//               <div className="flex items-center gap-1">
//                 {Array.from({ length: 5 }).map((_, index) => (
//                   <LiaStarSolid
//                     key={index}
//                     color={index < product.rating ? 'orange' : 'gray'}
//                   />
//                 ))}
//                 <span className="text-sm">{product.rating}/5</span>
//               </div>
//               <p className="font-bold mt-1">${product.price}</p>
//               </Link>
//             </div>

//           ))}
//         </div>

//         {/* Pagination */}
//         <div className="flex justify-center items-center gap-3 mt-5">
//           <button className="px-3 py-1 border rounded">Previous</button>
//           {Array.from({ length: 5 }).map((_, index) => (
//             <button
//               key={index}
//               className="px-3 py-1 border rounded hover:bg-black hover:text-white"
//             >
//               {index + 1}
//             </button>
//           ))}
//           <button className="px-3 py-1 border rounded">Next</button>
//         </div>
//       </main>
//     </div>
//   );
// }


//whatsapp toh dekho ....abi ayega mouse ...yar kia hai ....whsappp pr aaoo nah ...kia faida hoga apko mera dil jala kar btao mai ne aj tak kuch galat kra ha bolo,,,,chup hokar ap jesa bolti ho krta ho...dil jal rha ho mera bolo kai faiada hoga apko ...