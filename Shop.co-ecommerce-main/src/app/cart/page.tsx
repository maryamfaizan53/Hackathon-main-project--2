"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useCart } from "../context/CartContext"; // Import the hook from CartContext

export default function Cart() {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(20); // 20% discount
  const deliveryFee = 15;

  const handleQuantityChange = (id: string, action: "increment" | "decrement") => {
    const item = cart.find((i) => i.id === id);
    if (!item) return;

    const newQuantity = action === "increment"
      ? item.quantity + 1
      : Math.max(item.quantity - 1, 1);

    updateQuantity(id, newQuantity);
  };

  const handleRemoveItem = (id: string) => {
    removeFromCart(id);
  };

  const handleApplyPromo = () => {
    if (promoCode === "DISCOUNT20") {
      setDiscount(20);
    } else {
      alert("Invalid promo code");
    }
  };

  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const totalDiscount = (subtotal * discount) / 100;
  const total = subtotal - totalDiscount + deliveryFee;

  return (
    <div className="flex flex-col md:flex-row gap-8 p-6">
      {/* Cart Items */}
      <div className="w-full md:w-3/5">
        <h1 className="text-2xl font-bold mb-4">YOUR CART</h1>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="flex items-center justify-between border-b py-4">
              {item.image && (
                <Image
                  src={item.image}
                  alt={item.title}
                  width={200}
                  height={200}
                  className="w-16 h-16 object-cover"
                />
              )}
              <div className="flex-1 ml-4">
                <h2 className="font-bold">{item.title}</h2>
                {/* If you have size and color fields, you can show them here:
                    {item.size && <p className="text-sm">Size: {item.size}</p>}
                    {item.color && <p className="text-sm">Color: {item.color}</p>}
                 */}
                <p className="text-lg font-bold">${item.price}</p>
              </div>
              <div className="flex items-center">
                <button
                  className="px-2 py-1 border"
                  onClick={() => handleQuantityChange(item.id, "decrement")}
                >
                  -
                </button>
                <span className="px-4">{item.quantity}</span>
                <button
                  className="px-2 py-1 border"
                  onClick={() => handleQuantityChange(item.id, "increment")}
                >
                  +
                </button>
                <button
                  className="text-red-500 ml-4"
                  onClick={() => handleRemoveItem(item.id)}
                >
                  🗑️
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Order Summary */}
      <div className="w-full md:w-2/5 p-4 border rounded-lg">
        <h2 className="text-xl font-bold mb-4">Order Summary</h2>
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p>${subtotal.toFixed(2)}</p>
        </div>
        <div className="flex justify-between">
          <p>Discount ({discount}%)</p>
          <p className="text-red-500">-${totalDiscount.toFixed(2)}</p>
        </div>
        <div className="flex justify-between">
          <p>Delivery Fee</p>
          <p>${deliveryFee}</p>
        </div>
        <div className="flex justify-between font-bold mt-4">
          <p>Total</p>
          <p>${total.toFixed(2)}</p>
        </div>
        <div className="mt-4">
          <input
            type="text"
            placeholder="Add promo code"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
            className="w-full border p-2 rounded mb-2"
          />
          <button onClick={handleApplyPromo} className="w-full bg-black text-white py-2 rounded">
            Apply
          </button>
        </div>
        <button className="w-full bg-black text-white py-2 rounded mt-4">
          Go to Checkout →
        </button>
      </div>
    </div>
  );
}



// 'use client'
// import React, { useState } from "react";
// import Image from "next/image";

// interface CartItem {
//   id: number;
//   image: string;
//   name: string;
//   size: string;
//   color: string;
//   price: number;
//   quantity: number;
// }

// const Cart: React.FC = () => {
//   const [cartItems, setCartItems] = useState<CartItem[]>([
//     {
//       id: 1,
//       image: "/images/pic1.png",
//       name: "Gradient Graphic T-shirt",
//       size: "Large",
//       color: "White",
//       price: 145,
//       quantity: 1,
//     },
//     {
//       id: 2,
//       image: "/images/pic2.png",
//       name: "Checkered Shirt",
//       size: "Medium",
//       color: "Red",
//       price: 180,
//       quantity: 1,
//     },
//     {
//       id: 3,
//       image: "/images/pic3.png",
//       name: "Skinny Fit Jeans",
//       size: "Large",
//       color: "Blue",
//       price: 240,
//       quantity: 1,
//     },
//   ]);
//   const [promoCode, setPromoCode] = useState("");
//   const [discount, setDiscount] = useState(20); // 20% discount
//   const deliveryFee = 15;

//   const handleQuantityChange = (id: number, action: "increment" | "decrement") => {
//     setCartItems((prev) =>
//       prev.map((item) =>
//         item.id === id
//           ? {
//               ...item,
//               quantity: action === "increment" ? item.quantity + 1 : Math.max(item.quantity - 1, 1),
//             }
//           : item
//       )
//     );
//   };

//   const handleRemoveItem = (id: number) => {
//     setCartItems((prev) => prev.filter((item) => item.id !== id));
//   };

//   const handleApplyPromo = () => {
//     if (promoCode === "DISCOUNT20") {
//       setDiscount(20);
//     } else {
//       alert("Invalid promo code");
//     }
//   };

//   const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
//   const totalDiscount = (subtotal * discount) / 100;
//   const total = subtotal - totalDiscount + deliveryFee;

//   return (
//     <div className="flex flex-col md:flex-row gap-8 p-6">
//       {/* Cart Items */}
//       <div className="w-full md:w-3/5">
//         <h1 className="text-2xl font-bold mb-4">YOUR CART</h1>
//         {cartItems.map((item) => (
//           <div key={item.id} className="flex items-center justify-between border-b py-4">
//             <Image src={item.image} alt={item.name} width={200} height={200} className="w-16 h-16 object-cover" />
//             <div className="flex-1 ml-4">
//               <h2 className="font-bold">{item.name}</h2>
//               <p className="text-sm">Size: {item.size}</p>
//               <p className="text-sm">Color: {item.color}</p>
//               <p className="text-lg font-bold">${item.price}</p>
//             </div>
//             <div className="flex items-center">
//               <button
//                 className="px-2 py-1 border"
//                 onClick={() => handleQuantityChange(item.id, "decrement")}
//               >
//                 -
//               </button>
//               <span className="px-4">{item.quantity}</span>
//               <button
//                 className="px-2 py-1 border"
//                 onClick={() => handleQuantityChange(item.id, "increment")}
//               >
//                 +
//               </button>
//               <button
//                 className="text-red-500 ml-4"
//                 onClick={() => handleRemoveItem(item.id)}
//               >
//                 🗑️
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Order Summary */}
//       <div className="w-full md:w-2/5 p-4 border rounded-lg">
//         <h2 className="text-xl font-bold mb-4">Order Summary</h2>
//         <div className="flex justify-between">
//           <p>Subtotal</p>
//           <p>${subtotal}</p>
//         </div>
//         <div className="flex justify-between">
//           <p>Discount ({discount}%)</p>
//           <p className="text-red-500">-${totalDiscount.toFixed(2)}</p>
//         </div>
//         <div className="flex justify-between">
//           <p>Delivery Fee</p>
//           <p>${deliveryFee}</p>
//         </div>
//         <div className="flex justify-between font-bold mt-4">
//           <p>Total</p>
//           <p>${total.toFixed(2)}</p>
//         </div>
//         <div className="mt-4">
//           <input
//             type="text"
//             placeholder="Add promo code"
//             value={promoCode}
//             onChange={(e) => setPromoCode(e.target.value)}
//             className="w-full border p-2 rounded mb-2"
//           />
//           <button onClick={handleApplyPromo} className="w-full bg-black text-white py-2 rounded">
//             Apply
//           </button>
//         </div>
//         <button className="w-full bg-black text-white py-2 rounded mt-4">
//           Go to Checkout →
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Cart;
