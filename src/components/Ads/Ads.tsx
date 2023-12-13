import React from 'react';
import Image from 'next/image';
import HomeFur4 from '../../../public/images/home-fur-4.png';
import Link from 'next/link';
const Ads = () => {
  return (
    <div className="bg-[#FFF9E5] flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 px-4 md:px-24 py-6 md:py-12">
      <div>
        <Image src={HomeFur4} alt="Home Furniture" />
      </div>
      <div className="text-center">
        <h3 className="text-xl md:text-2xl font-medium leading-7 md:leading-10">
          New Arrivals
        </h3>
        <h1 className="font-bold text-4xl md:text-5xl">Asgaard Sofa</h1>
        <div className="text-center mt-3 md:mt-6">
          <button className="border border-black px-8 md:px-14 py-2 md:py-4 text-base md:text-xl font-medium">
            <Link href={'/shop/14'}>View More</Link>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Ads;