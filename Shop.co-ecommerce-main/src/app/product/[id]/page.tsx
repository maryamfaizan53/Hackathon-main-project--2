"use client";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { useWishlist } from "../../context/WishlistContext";
import { useCart } from "../../context/CartContext";
import { allProducts } from "../../lib/products"; // import from your products.ts

const reviews = [
  {
    id: 1,
    name: "Samantha D.",
    rating: 5,
    comment: "I love this product! The design is unique and fits perfectly.",
    date: "August 14, 2020",
  },
  {
    id: 2,
    name: "Alex M.",
    rating: 4,
    comment: "Great quality! Comfortable and stylish.",
    date: "August 10, 2024",
  },
];

export default function ProductPage() {
  const { id } = useParams(); // Get the product ID from the URL
  const router = useRouter(); // For navigation
  const product = allProducts.find((p) => p.id.toString() === id);

  const { addToWishlist } = useWishlist();
  const { addToCart } = useCart();

  const [quantity, setQuantity] = useState<number>(1);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  if (!product) {
    return <div>Product not found!</div>;
  }

  const handleQuantityChange = (amount: number) => {
    setQuantity((prev) => Math.max(1, prev + amount));
  };

  const handleSizeSelect = (size: string) => {
    setSelectedSize(size);
  };

  const handleSuggestionClick = (suggestedId: number) => {
    router.push(`/product/${suggestedId}`);
  };

  // Handler for adding product to wishlist
  const handleAddToWishlist = () => {
    addToWishlist({
      id: product.id.toString(),
      title: product.name,
      price: product.price,
      image: product.imageUrl,
    });
  };

  // Handler for adding product to cart
  const handleAddToCart = () => {
    addToCart({
      id: product.id.toString(),
      title: product.name,
      price: product.price,
      image: product.imageUrl,
      quantity, // use the current quantity state
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Product Details */}
      <div className="flex flex-col lg:flex-row gap-10">
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={400}
          height={400}
          className="rounded-lg"
        />

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          {product.description && (
            <p className="text-gray-700 mt-4">{product.description}</p>
          )}
          <div className="flex items-center gap-4 mt-4">
            <span className="text-2xl font-bold text-green-600">${product.price}</span>
            <span className="text-yellow-500">★ {product.rating}/5</span>
          </div>

          {/* Size Selector */}
          <div className="mt-6">
            <h2 className="font-semibold text-gray-700">Select Size</h2>
            <div className="flex gap-4 mt-2">
              {["Small", "Medium", "Large", "X-Large"].map((size) => (
                <button
                  key={size}
                  onClick={() => handleSizeSelect(size)}
                  className={`px-4 py-2 border rounded ${selectedSize === size ? "bg-black text-white" : "bg-white"}`}
                >
                  {size}
                </button>
              ))}
            </div>
            {selectedSize && (
              <p className="text-sm text-green-600 mt-2">
                Selected Size: {selectedSize}
              </p>
            )}
          </div>

          {/* Quantity Selector and Add to Cart */}
          <div className="flex gap-4 mt-6">
            <div className="flex items-center border rounded">
              <button
                onClick={() => handleQuantityChange(-1)}
                className="px-2 text-xl"
              >
                -
              </button>
              <span className="px-4">{quantity}</span>
              <button
                onClick={() => handleQuantityChange(1)}
                className="px-2 text-xl"
              >
                +
              </button>
            </div>
            <button
              onClick={handleAddToCart}
              className="px-6 py-2 bg-black text-white rounded-lg"
            >
              Add to Cart
            </button>
          </div>

          {/* Add to Wishlist */}
          <div className="mt-4">
            <button
              onClick={handleAddToWishlist}
              className="px-6 py-2 border-2 border-black rounded hover:bg-black hover:text-white"
            >
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold">Reviews</h2>
        <div className="flex flex-col gap-4 mt-4">
          {reviews.map((review) => (
            <div key={review.id} className="p-4 border rounded-md shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold">{review.name}</span>
                <span className="text-yellow-500">★ {review.rating}/5</span>
              </div>
              <p className="text-gray-600 mt-2">{review.comment}</p>
              <span className="text-sm text-gray-400">
                Posted on {review.date}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Suggested Products */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold">You Might Also Like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
          {allProducts
            .filter((p) => p.id.toString() !== id)
            .map((suggestedProduct) => (
              <div
                key={suggestedProduct.id}
                onClick={() => handleSuggestionClick(suggestedProduct.id)}
                className="border rounded-lg p-4 shadow-sm cursor-pointer hover:shadow-lg transition-shadow"
              >
                <Link href={`/product/${suggestedProduct.id}`}>
                  <Image
                    src={suggestedProduct.imageUrl}
                    alt={suggestedProduct.name}
                    className="object-cover w-[300px] h-[300px] rounded-[20px]"
                    width={300}
                    height={300}
                  />
                  <h3 className="text-md font-medium mt-2">{suggestedProduct.name}</h3>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-lg font-bold text-green-600">
                      ${suggestedProduct.price}
                    </span>
                    <span className="text-yellow-500">
                      ★ {suggestedProduct.rating}/5
                    </span>
                  </div>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}





// "use client";

// import { useParams, useRouter } from "next/navigation";
// import Image from "next/image";
// import { useState } from "react";
// import Link from "next/link";
// import { useWishlist } from "../../context/WishlistContext";
// import { allProducts } from "../../lib/products"; // Import from products

// // Example Reviews
// const reviews = [
//   {
//     id: 1,
//     name: "Samantha D.",
//     rating: 5,
//     comment: "I love this product! The design is unique and fits perfectly.",
//     date: "August 14, 2020",
//   },
//   {
//     id: 2,
//     name: "Alex M.",
//     rating: 4,
//     comment: "Great quality! Comfortable and stylish.",
//     date: "August 10, 2024",
//   },
// ];

// export default function ProductPage() {
//   const { id } = useParams(); // Get the product ID from the URL
//   const router = useRouter(); // For navigation
//   const product = allProducts.find((p) => p.id.toString() === id);

//   const { addToWishlist } = useWishlist();
//   const [quantity, setQuantity] = useState<number>(1);
//   const [selectedSize, setSelectedSize] = useState<string | null>(null);

//   if (!product) {
//     return <div>Product not found!</div>;
//   }

//   const handleQuantityChange = (amount: number) => {
//     setQuantity((prev) => Math.max(1, prev + amount));
//   };

//   const handleSizeSelect = (size: string) => {
//     setSelectedSize(size);
//   };

//   const handleSuggestionClick = (suggestedId: number) => {
//     router.push(`/product/${suggestedId}`);
//   };

//   const handleAddToWishlist = () => {
//     addToWishlist({
//       id: product.id.toString(),
//       title: product.name,
//       price: product.price,
//       image: product.imageUrl,
//     });
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="flex flex-col lg:flex-row gap-10">
//         <Image
//           src={product.imageUrl}
//           alt={product.name}
//           width={400}
//           height={400}
//           className="rounded-lg"
//         />

//         <div>
//           <h1 className="text-3xl font-bold">{product.name}</h1>
//           {product.description && <p className="text-gray-700 mt-4">{product.description}</p>}
//           <div className="flex items-center gap-4 mt-4">
//             <span className="text-2xl font-bold text-green-600">${product.price}</span>
//             <span className="text-yellow-500">★ {product.rating}/5</span>
//           </div>

//           <div className="mt-6">
//             <h2 className="font-semibold text-gray-700">Select Size</h2>
//             <div className="flex gap-4 mt-2">
//               {["Small", "Medium", "Large", "X-Large"].map((size) => (
//                 <button
//                   key={size}
//                   onClick={() => handleSizeSelect(size)}
//                   className={`px-4 py-2 border rounded ${selectedSize === size ? "bg-black text-white" : "bg-white"}`}
//                 >
//                   {size}
//                 </button>
//               ))}
//             </div>
//             {selectedSize && (
//               <p className="text-sm text-green-600 mt-2">
//                 Selected Size: {selectedSize}
//               </p>
//             )}
//           </div>

//           <div className="flex gap-4 mt-6">
//             <div className="flex items-center border rounded">
//               <button onClick={() => handleQuantityChange(-1)} className="px-2 text-xl">-</button>
//               <span className="px-4">{quantity}</span>
//               <button onClick={() => handleQuantityChange(1)} className="px-2 text-xl">+</button>
//             </div>
//             {/* Add to Cart Button (Add to Cart functionality) */}
//             <button className="px-6 py-2 bg-black text-white rounded-lg">
//               Add to Cart
//             </button>
//           </div>

//           <div className="mt-4">
//             <button
//               onClick={handleAddToWishlist}
//               className="px-6 py-2 border-2 border-black rounded hover:bg-black hover:text-white"
//             >
//               Add to Wishlist
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Reviews Section */}
//       <div className="mt-10">
//         <h2 className="text-xl font-semibold">Reviews</h2>
//         <div className="flex flex-col gap-4 mt-4">
//           {reviews.map((review) => (
//             <div key={review.id} className="p-4 border rounded-md shadow-sm">
//               <div className="flex items-center justify-between">
//                 <span className="text-lg font-bold">{review.name}</span>
//                 <span className="text-yellow-500">★ {review.rating}/5</span>
//               </div>
//               <p className="text-gray-600 mt-2">{review.comment}</p>
//               <span className="text-sm text-gray-400">
//                 Posted on {review.date}
//               </span>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Suggested Products */}
//       <div className="mt-10">
//         <h2 className="text-xl font-semibold">You Might Also Like</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
//           {allProducts
//             .filter((p) => p.id.toString() !== id)
//             .map((suggestedProduct) => (
//               <div
//                 key={suggestedProduct.id}
//                 onClick={() => handleSuggestionClick(suggestedProduct.id)}
//                 className="border rounded-lg p-4 shadow-sm cursor-pointer hover:shadow-lg transition-shadow"
//               >
//                 <Link href={`/product/${suggestedProduct.id}`}>
//                   <Image
//                     src={suggestedProduct.imageUrl}
//                     alt={suggestedProduct.name}
//                     className="object-cover w-[300px] h-[300px] rounded-[20px]"
//                     width={300}
//                     height={300}
//                   />
//                   <h3 className="text-md font-medium mt-2">{suggestedProduct.name}</h3>
//                   <div className="flex items-center gap-2 mt-2">
//                     <span className="text-lg font-bold text-green-600">
//                       ${suggestedProduct.price}
//                     </span>
//                     <span className="text-yellow-500">
//                       ★ {suggestedProduct.rating}/5
//                     </span>
//                   </div>
//                 </Link>
//               </div>
//             ))}
//         </div>
//       </div>
//     </div>
//   );
// }


// "use client";

// import { useParams, useRouter } from "next/navigation";
// import Image from "next/image";
// import { useState } from "react";
// import Link from "next/link";
// import { useWishlist } from "../../context/WishlistContext";  // <--- import hook

// // Static Product Data
// const productData = [
//   {
//     id: "1",
//     name: 'Hoodie For Mens',
//     price: 212,
//     rating: 5,
//     description: "Stylish hoodie made for comfort and durability.",
//     image: "/images/pic1.png",
//   },
//   {
//     id: "2",
//     name: 'T-Shirts For Mens',
//     price: 145,
//     rating: 3,
//     description: "Casual t-shirt for everyday wear.",
//     image: "/images/pic2.png",
//   },
//   {
//     id: "3",
//     name: 'Trousers For Women',
//     price: 80,
//     rating: 4,
//     description: "Stylish hoodie made for comfort and durability.",
//     image: "/images/pic3.png",
//   },
//   {
//     id: "4",
//     name: 'Fits Bermuda T-Shirts',
//     price: 210,
//     rating: 5,
//     description: "Stylish hoodie made for comfort and durability.",
//     image: "/images/pic4.png",
//   },
//   {
//     id: "5",
//     name: "Hoodie For Mens",
//     price: 212,
//     rating: 5,
//     description: "Stylish hoodie made for comfort and durability.",
//     image: "/images/pic5.png",
//   },
//   {
//     id: "6",
//     name: "T-Shirts For Mens",
//     price: 145,
//     rating: 3,
//     description: "Casual t-shirt for everyday wear.",
//     image: "/images/pic6.png",
//   },
//   {
//     id: "7",
//     name: "Loose Fits Bermuda Shorts",
//     price: 80,
//     rating: 4,
//     description: "Comfortable shorts perfect for summer.",
//     image: "/images/pic7.png",
//   },
//   {
//     id: "8",
//     name: "Fits Bermuda T-Shirts",
//     price: 210,
//     rating: 5,
//     description: "High-quality t-shirt for a relaxed fit.",
//     image: "/images/pic8.png",
//   },
//   {
//     id: "9",
//     name: "Fits Bermuda T-Shirts",
//     price: 189,
//     rating: 5,
//     description: "High-quality t-shirt for a relaxed fit.",
//     image: "/images/pic9.png",
//   },
//   {
//     id: "10",
//     name: "Fits Bermuda T-Shirts",
//     price: 110,
//     rating: 5,
//     description: "High-quality t-shirt for a relaxed fit.",
//     image: "/images/pic8.png",
//   },
// ];

// const reviews = [
//   {
//     id: 1,
//     name: "Samantha D.",
//     rating: 5,
//     comment: "I love this product! The design is unique and fits perfectly.",
//     date: "August 14, 2020",
//   },
//   {
//     id: 2,
//     name: "Alex M.",
//     rating: 4,
//     comment: "Great quality! Comfortable and stylish.",
//     date: "August 10, 2024",
//   },
// ];

// export default function ProductPage() {
//   const { id } = useParams(); // Get the product ID from the URL
//   const router = useRouter(); // For navigation
//   const product = productData.find((p) => p.id === id);

//   const { addToWishlist } = useWishlist();  // <--- usage
//   const [quantity, setQuantity] = useState<number>(1);
//   const [selectedSize, setSelectedSize] = useState<string | null>(null);

//   if (!product) {
//     return <div>Product not found!</div>;
//   }

//   const handleQuantityChange = (amount: number) => {
//     setQuantity((prev) => Math.max(1, prev + amount));
//   };

//   const handleSizeSelect = (size: string) => {
//     setSelectedSize(size);
//   };

//   const handleSuggestionClick = (suggestedId: string) => {
//     router.push(`/product/${suggestedId}`); // Navigate to suggested product
//   };

//   // Handler for adding to wishlist
//   const handleAddToWishlist = () => {
//     addToWishlist({
//       id: product.id,
//       title: product.name,
//       price: product.price,
//       image: product.image,
//     });
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       {/* Product Details */}
//       <div className="flex flex-col lg:flex-row gap-10">
//         {/* Product Image */}
//         <Image
//           src={product.image}
//           alt={product.name}
//           width={400}
//           height={400}
//           className="rounded-lg"
//         />

//         {/* Product Info */}
//         <div>
//           <h1 className="text-3xl font-bold">{product.name}</h1>
//           <p className="text-gray-700 mt-4">{product.description}</p>
//           <div className="flex items-center gap-4 mt-4">
//             <span className="text-2xl font-bold text-green-600">${product.price}</span>
//             <span className="text-yellow-500">★ {product.rating}/5</span>
//           </div>

//           {/* Size Selector */}
//           <div className="mt-6">
//             <h2 className="font-semibold text-gray-700">Select Size</h2>
//             <div className="flex gap-4 mt-2">
//               {["Small", "Medium", "Large", "X-Large"].map((size) => (
//                 <button
//                   key={size}
//                   onClick={() => handleSizeSelect(size)}
//                   className={`px-4 py-2 border rounded ${
//                     selectedSize === size ? "bg-black text-white" : "bg-white"
//                   }`}
//                 >
//                   {size}
//                 </button>
//               ))}
//             </div>
//             {selectedSize && (
//               <p className="text-sm text-green-600 mt-2">
//                 Selected Size: {selectedSize}
//               </p>
//             )}
//           </div>

//           {/* Quantity Selector and Add to Cart */}
//           <div className="flex gap-4 mt-6">
//             <div className="flex items-center border rounded">
//               <button
//                 onClick={() => handleQuantityChange(-1)}
//                 className="px-2 text-xl"
//               >
//                 -
//               </button>
//               <span className="px-4">{quantity}</span>
//               <button
//                 onClick={() => handleQuantityChange(1)}
//                 className="px-2 text-xl"
//               >
//                 +
//               </button>
//             </div>
//             <button className="px-6 py-2 bg-black text-white rounded-lg">
//               Add to Cart
//             </button>
//           </div>

//           {/* Add to Wishlist Button */}
//           <div className="mt-4">
//             <button
//               onClick={handleAddToWishlist}
//               className="px-6 py-2 border-2 border-black rounded hover:bg-black hover:text-white"
//             >
//               Add to Wishlist
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Reviews Section */}
//       <div className="mt-10">
//         <h2 className="text-xl font-semibold">Reviews</h2>
//         <div className="flex flex-col gap-4 mt-4">
//           {reviews.map((review) => (
//             <div key={review.id} className="p-4 border rounded-md shadow-sm">
//               <div className="flex items-center justify-between">
//                 <span className="text-lg font-bold">{review.name}</span>
//                 <span className="text-yellow-500">★ {review.rating}/5</span>
//               </div>
//               <p className="text-gray-600 mt-2">{review.comment}</p>
//               <span className="text-sm text-gray-400">
//                 Posted on {review.date}
//               </span>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Suggested Products */}
//       <div className="mt-10">
//         <h2 className="text-xl font-semibold">You Might Also Like</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
//           {productData
//             .filter((p) => p.id !== product.id) // Exclude the current product
//             .map((suggestedProduct) => (
//               <div
//                 key={suggestedProduct.id}
//                 onClick={() => handleSuggestionClick(suggestedProduct.id)}
//                 className="border rounded-lg p-4 shadow-sm cursor-pointer hover:shadow-lg transition-shadow"
//               >
//                 <Link href={`/product/${suggestedProduct.id}`}>
//                   <Image
//                     src={suggestedProduct.image}
//                     alt={suggestedProduct.name}
//                     className="object-cover w-[300px] h-[300px] rounded-[20px]"
//                     width={300}
//                     height={300}
//                   />
//                   <h3 className="text-md font-medium mt-2">{suggestedProduct.name}</h3>
//                   <div className="flex items-center gap-2 mt-2">
//                     <span className="text-lg font-bold text-green-600">
//                       ${suggestedProduct.price}
//                     </span>
//                     <span className="text-yellow-500">
//                       ★ {suggestedProduct.rating}/5
//                     </span>
//                   </div>
//                 </Link>
//               </div>
//             ))}
//         </div>
//       </div>
//     </div>
//   );
// }


// "use client";

// import { useParams, useRouter } from "next/navigation";
// import Image from "next/image";
// import { useState } from "react";
// import Link from "next/link";

// // Static Product Data
// const productData = [
//   {
//     id: "1",
//     name: 'Hoodie For Mens',
//     price: 212,
//     rating: 5,
//     description: "Stylish hoodie made for comfort and durability.",
//     image: "/images/pic1.png",
//   },
//   {
//     id: "2",
//     name: 'T-Shirts For Mens',
//     price: 145,
//     rating: 3,
//     description: "Casual t-shirt for everyday wear.",
//     image: "/images/pic2.png",
//   },
//   {
//     id: "3",
//     name: 'Trousers For Women',
//     price: 80,
//     rating: 4,
//     description: "Stylish hoodie made for comfort and durability.",
//     image: "/images/pic3.png",
//   },
//   {
//     id: "4",
//     name: 'Fits Bermuda T-Shirts',
//     price: 210,
//     rating: 5,
//     description: "Stylish hoodie made for comfort and durability.",
//     image: "/images/pic4.png",
//   },
//   {
//     id: "5",
//     name: "Hoodie For Mens",
//     price: 212,
//     rating: 5,
//     description: "Stylish hoodie made for comfort and durability.",
//     image: "/images/pic5.png",
//   },
//   {
//     id: "6",
//     name: "T-Shirts For Mens",
//     price: 145,
//     rating: 3,
//     description: "Casual t-shirt for everyday wear.",
//     image: "/images/pic6.png",
//   },
//   {
//     id: "7",
//     name: "Loose Fits Bermuda Shorts",
//     price: 80,
//     rating: 4,
//     description: "Comfortable shorts perfect for summer.",
//     image: "/images/pic7.png",
//   },
//   {
//     id: "8",
//     name: "Fits Bermuda T-Shirts",
//     price: 210,
//     rating: 5,
//     description: "High-quality t-shirt for a relaxed fit.",
//     image: "/images/pic8.png",
//   },
//   {
//     id: "9",
//     name: "Fits Bermuda T-Shirts",
//     price: 189,
//     rating: 5,
//     description: "High-quality t-shirt for a relaxed fit.",
//     image: "/images/pic9.png",
//   },
//   {
//     id: "10",
//     name: "Fits Bermuda T-Shirts",
//     price: 110,
//     rating: 5,
//     description: "High-quality t-shirt for a relaxed fit.",
//     image: "/images/pic8.png",
//   },
// ];

// const reviews = [
//   {
//     id: 1,
//     name: "Samantha D.",
//     rating: 5,
//     comment: "I love this product! The design is unique and fits perfectly.",
//     date: "August 14, 2020",
//   },
//   {
//     id: 2,
//     name: "Alex M.",
//     rating: 4,
//     comment: "Great quality! Comfortable and stylish.",
//     date: "August 10, 2024",
//   },
// ];

// export default function ProductPage() {
//   const { id } = useParams(); // Get the product ID from the URL
//   const router = useRouter(); // For navigation
//   const product = productData.find((p) => p.id === id);

//   const [quantity, setQuantity] = useState<number>(1);
//   const [selectedSize, setSelectedSize] = useState<string | null>(null);

//   if (!product) {
//     return <div>Product not found!</div>;
//   }

//   const handleQuantityChange = (amount: number) => {
//     setQuantity((prev) => Math.max(1, prev + amount));
//   };

//   const handleSizeSelect = (size: string) => {
//     setSelectedSize(size);
//   };

//   const handleSuggestionClick = (suggestedId: string) => {
//     router.push(`/shop/${suggestedId}`); // Navigate to the suggested product's detail page
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       {/* Product Details */}
//       <div className="flex flex-col lg:flex-row gap-10">
//         {/* Product Image */}
//         <Image
//           src={product.image}
//           alt={product.name}
//           width={400}
//           height={400}
//           className="rounded-lg"
//         />

//         {/* Product Info */}
//         <div>
//           <h1 className="text-3xl font-bold">{product.name}</h1>
//           <p className="text-gray-700 mt-4">{product.description}</p>
//           <div className="flex items-center gap-4 mt-4">
//             <span className="text-2xl font-bold text-green-600">${product.price}</span>
//             <span className="text-yellow-500">★ {product.rating}/5</span>
//           </div>

//           {/* Size Selector */}
//           <div className="mt-6">
//             <h2 className="font-semibold text-gray-700">Select Size</h2>
//             <div className="flex gap-4 mt-2">
//               {["Small", "Medium", "Large", "X-Large"].map((size) => (
//                 <button
//                   key={size}
//                   onClick={() => handleSizeSelect(size)}
//                   className={`px-4 py-2 border rounded ${
//                     selectedSize === size ? "bg-black text-white" : "bg-white"
//                   }`}
//                 >
//                   {size}
//                 </button>
//               ))}
//             </div>
//             {selectedSize && (
//               <p className="text-sm text-green-600 mt-2">
//                 Selected Size: {selectedSize}
//               </p>
//             )}
//           </div>

//           {/* Quantity Selector */}
//           <div className="flex gap-4 mt-6">
//             <div className="flex items-center border rounded">
//               <button
//                 onClick={() => handleQuantityChange(-1)}
//                 className="px-2 text-xl"
//               >
//                 -
//               </button>
//               <span className="px-4">{quantity}</span>
//               <button
//                 onClick={() => handleQuantityChange(1)}
//                 className="px-2 text-xl"
//               >
//                 +
//               </button>
//             </div>
//             <button className="px-6 py-2 bg-black text-white rounded-lg">
//               Add to Cart
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Reviews Section */}
//       <div className="mt-10">
//         <h2 className="text-xl font-semibold">Reviews</h2>
//         <div className="flex flex-col gap-4 mt-4">
//           {reviews.map((review) => (
//             <div key={review.id} className="p-4 border rounded-md shadow-sm">
//               <div className="flex items-center justify-between">
//                 <span className="text-lg font-bold">{review.name}</span>
//                 <span className="text-yellow-500">★ {review.rating}/5</span>
//               </div>
//               <p className="text-gray-600 mt-2">{review.comment}</p>
//               <span className="text-sm text-gray-400">Posted on {review.date}</span>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Suggested Products */}
//       <div className="mt-10">
//         <h2 className="text-xl font-semibold">You Might Also Like</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
//           {productData
//             .filter((p) => p.id !== product.id) // Exclude the current product
//             .map((suggestedProduct) => (
//               <div
//                 key={suggestedProduct.id}
//                 onClick={() => handleSuggestionClick(suggestedProduct.id)}
//                 className="border rounded-lg p-4 shadow-sm cursor-pointer hover:shadow-lg transition-shadow"
//               >
//               <Link href={`/product/${product.id}`}>
//                 <Image
//                   src={suggestedProduct.image}
//                   alt={suggestedProduct.name}
//                   className="object-cover w-[300px] h-[300px] rounded-[20px]"
//                 width={300}
//                 height={300}
//                 />
//                 <h3 className="text-md font-medium mt-2">{suggestedProduct.name}</h3>
//                 <div className="flex items-center gap-2 mt-2">
//                   <span className="text-lg font-bold text-green-600">
//                     ${suggestedProduct.price}
//                   </span>
//                   <span className="text-yellow-500">
//                     ★ {suggestedProduct.rating}/5
//                   </span>
//                 </div>
//                 </Link>
//               </div>
//             ))}
//         </div>
//       </div>
//     </div>
//   );
// }


