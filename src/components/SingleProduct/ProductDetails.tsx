'use client';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/slices/cartSlice';
import Image from 'next/image';
import Heart from '../../../public/images/heart.png';
import BreadCrumbs from './Breadcrumbs';
import Rating from './icons/Rating';
import Link from 'next/link';

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
}
interface CartItem extends Product {
  quantity: number;
}

export default function ProductDetails({ product }: { product: Product }) {
  const dispatch = useDispatch();

  const handleAddToCart = (cart: CartItem) => {
    dispatch(addItem(cart));
  };

  const [itemCount, setItemCount] = useState(0);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <section className="max-w-7xl mx-auto mt-8 pb-10">
        <BreadCrumbs />
        <div className="flex flex-col items-end justify-end">
          <div className="flex flex-col md:flex-row gap-20 mt-10">
            <div className="md:flex md:flex-col gap-8 grid grid-cols-2">
              {product.gallery.map((img) => {
                return (
                  <Image
                    key={img}
                    width={100}
                    height={100}
                    src={`/images/${img}`}
                    alt="Product Image"
                    className="bg-[#FFF9E5] rounded-2xl"
                  />
                );
              })}
            </div>

            <div className="bg-[#FFF9E5] basis-1/2 h-[500px] rounded-xl">
              <Image
                width={500}
                height={500}
                className="object-center w-full h-full object-cover"
                src={`/images/${product.thumbnail}`}
                alt=""
              />
            </div>

            <div className="basis-1/2">
              <h1 className="text-4xl font-semibold">{product.name}</h1>
              <p className="text-2xl text-slate-500 mt-3 flex gap-40">
                {product.price}
                <Image src={Heart} alt="Heart" />
              </p>

              <div className="divide-x mt-2 divide-slate-800 flex gap-x-4">
                <Rating />
                <p className="pl-4 text-slate-500">5 customer reviews</p>
              </div>

              <p className="font-medium mt-5">
                <p>
                  <strong>{product.description}</strong>
                </p>
              </p>

              <div className="mt-5 space-y-2">
                <h3 className="font-medium text-slate-500">Size</h3>

                <div className="space-x-4">
                  {product.size.map((size) => {
                    return (
                      <button
                        key={size}
                        className="py-1.5 px-3 bg-[#FAF4F4] rounded-md"
                      >
                        {size}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="mt-5 space-y-2">
                <h3 className="font-medium text-slate-500">Color</h3>

                <div className="space-x-4">
                  {product.colors.map((color) => {
                    return (
                      <button
                        key={color}
                        style={{
                          backgroundColor: color,
                        }}
                        className="h-[30px] w-[30px] rounded-full border"
                      ></button>
                    );
                  })}
                </div>
              </div>

              <div className="mt-5 flex gap-x-4">
                <div className="flex item-center gap-x-8 md:p-4 py-3.5 px-3.5 border rounded-md w-max">
                  <button
                    disabled={itemCount === 0}
                    onClick={() => setItemCount(itemCount - 1)}
                  >
                    -
                  </button>
                  <p className="py-4 md:py-0">{itemCount}</p>
                  <button onClick={() => setItemCount(itemCount + 1)}>+</button>
                </div>

                <Link href="/cart">
                  <button
                    onClick={() =>
                      handleAddToCart({ ...product, quantity: itemCount })
                    }
                    className="md:p-4 py-8 px-8 w-[150px] border border-slate-800 rounded-md"
                  >
                    <p className="text-sm md:text-base">Add to Cart</p>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
