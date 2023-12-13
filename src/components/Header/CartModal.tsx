import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import Delete from "../../../public/images/delete.svg";
import { removeItem } from "@/redux/slices/cartSlice";
import { selectCartItems } from "@/redux/slices/cartSlice";
import CartClose from "./CartClose";

interface Product {
  id: number;
  name: string;
  price: number;
  thumbnail: string;
  description: string;
  gallery: string[];
  size: string[];
  colors: string[];
  SKU: string;
  category: string;
  tags: string[];
  quantity: number;
}
const CartModal = (
  { toggleCartModal }: any,
  { product }: { product: Product }
) => {
  const dispatch = useDispatch();

  const products = useSelector(selectCartItems);

  // Load cart data from local storage on component mount
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      const parsedCart: Product[] = JSON.parse(storedCart);
    }
  }, []);

  // Update local storage whenever the cart changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(products));
  }, [products]);

  //  Subtotal
  const calculateSubtotal = (product: Product): number => {
    return product.price * product.quantity;
  };

  // Total
  const calculateTotal = (): number => {
    return products.reduce(
      (total, product) => total + calculateSubtotal(product),
      0
    );
  };

  // Delete
  const handleDeleteProduct = (productId: number) => {
    dispatch(removeItem(productId));
  };

  return (
    <div className=" flex flex-col justify-between p-8 w-[417px] h-[746px]">
      <div>
        <CartClose toggleCartModal={toggleCartModal} />
        <div className="w-full">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex justify-between items-center mt-12 w-full"
            >
              <div>
                <div className="bg-[#fbebb5] rounded-xl">
                  <Image
                    width={100}
                    height={100}
                    src={`/images/${product.thumbnail}`}
                    alt={product.name}
                  />
                </div>
              </div>

              <div className="text-xl text-center">
                <p>{product.name}</p>
                <p className="my-4">
                  {product.quantity} X &nbsp;
                  <span className="text-[#B88E2F] font-medium">
                    {product.price}
                  </span>
                </p>
              </div>

              <div>
                <div
                  onClick={() => handleDeleteProduct(product.id)}
                  className="h-7 w-7 bg-[#9F9F9F] flex justify-center items-center text-white font-bold rounded-full cursor-pointer"
                >
                  x
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="flex gap-[150px] text-base pb-6 border-b-2">
          <p>Subtotal</p>
          <p className="text-[#B88E2F] font-medium">
            {" "}
            Rs {calculateTotal().toFixed(2)}
          </p>
        </div>

        <div className="flex gap-7 pt-6">
          <Link
            href="/cart"
            className="border border-black rounded-[50px] py-2 px-9"
          >
            View Cart
          </Link>
          <Link
            href="/checkout"
            className="border border-black rounded-[50px] py-2 px-9"
          >
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
