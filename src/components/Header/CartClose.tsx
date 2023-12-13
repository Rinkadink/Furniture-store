import React from "react";
import Image from "next/image";
import XCart from "../../../public/images/Xcart.png";

const CartClose = ({ toggleCartModal }:any) => {
  return (
    <div className="flex justify-between items-center border-b-2 pb-7">
    <h2 className="text-2xl font-semibold">Shopping Cart</h2>
    <button onClick = {toggleCartModal} >
    <Image src={XCart} alt="Product" />
    </button>
   
  </div>
  );
};

export default CartClose;