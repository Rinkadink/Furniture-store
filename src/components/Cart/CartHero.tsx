'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { useDispatch, useSelector } from 'react-redux';

import Delete from '../../../public/images/delete.svg';
import { removeItem, selectCartItems } from '@/redux/slices/cartSlice';

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image?: any;
}

const CartHero = () => {
  const dispatch = useDispatch();

  const products = useSelector(selectCartItems);

  // Load cart data from local storage on component mount
  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      const parsedCart: Product[] = JSON.parse(storedCart);
    }
  }, []);

  // Update local storage whenever the cart changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(products));
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
    <div className="my-20 mx-4 sm:mx-8 md:mx-12 lg:mx-24 xl:mx-36 flex flex-col md:flex-row justify-between gap-8">
      <div className="w-full">
        <table className="w-full">
          <thead className="bg-[#FFF9E5]">
            <tr className="text-base font-medium flex justify-between items-center md:py-8 md:px-28">
              <th className="text-left">Product</th>
              <th className="text-left">Price</th>
              <th className="text-left">Quantity</th>
              <th className="text-left">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr
                key={product.id}
                className="flex justify-between items-center mt-12"
              >
                <td className="flex items-center">
                  <div className="flex items-center gap-4 md:gap-8">
                    <div className="bg-[#FBEBB5] rounded-xl w-[112px] h-[92px] flex items-center justify-center">
                      <Image
                        width={100}
                        height={100}
                        src={`/images/${product.thumbnail}`}
                        alt={product.name}
                      />
                    </div>
                    <p className="text-base text-[#9F9F9F]">{product.name}</p>
                  </div>
                </td>
                <td className="text-base text-[#9F9F9F]">
                  Rs {product.price.toFixed(2)}
                </td>
                <td>
                  <button className="border py-4 px-6 rounded-lg">
                    {product.quantity}
                  </button>
                </td>
                <td>
                  <div className="flex items-center gap-4 md:gap-[50px]">
                    <p className="text-base">
                      Rs {(product.price * product.quantity).toFixed(2)}
                    </p>
                    <div
                      onClick={() => handleDeleteProduct(product.id)}
                      className="cursor-pointer"
                    >
                      <Image src={Delete} alt="Delete" />
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="w-full pt-4 pb-8 px-4 md:px-24 bg-[#FFF9E5] text-center md:w-[393px] h-[390px] flex justify-center items-center">
        <div>
          <div>
            <h2 className="text-3xl font-semibold mb-12">Cart Totals</h2>

            {/* Subtotal */}
            <div className="flex justify-between">
              <span className="text-base font-medium">Subtotal:</span>
              <span className="text-base text-[#9F9F9F]">
                Rs. {calculateTotal().toFixed(2)}
              </span>
            </div>

            {/* Total */}
            <div className="flex justify-between mt-2">
              <span className="text-base font-medium">Total:</span>
              <span className="text-xl text-[#B88E2F]">
                Rs. {calculateTotal().toFixed(2)}
              </span>
            </div>
            <Link
              href={{
                pathname: '/checkout',
                query: { products: JSON.stringify(products) },
              }}
            >
              <button className="mt-12 py-4 px-12 text-xl border border-black rounded-xl hover:bg-slate-600 hover:text-white">
                Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartHero;
