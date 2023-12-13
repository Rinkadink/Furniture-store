import React from 'react';
import Image from 'next/image';
import HomeFur2 from '../../../public/images/home-fur-2.png';
import HomeFur3 from '../../../public/images/home-fur-3.png';
import Link from 'next/link';
const HeroSubSec = () => {
  return (
    <div className="">
      <div className="heroSubSec flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 py-[51px]">
        <div className="flex flex-col justify-center items-center">
          <Image src={HomeFur2} alt="Home Furniture" />
          <div className="text-center md:text-left mt-4 md:mt-0">
            <h2 className="text-2xl md:text-4xl font-medium">Side Table</h2>
            <button className="text-base md:text-2xl font-medium border-b-2 border-solid border-black mt-2 md:mt-9 pb-2">
              <Link href={'/shop'}>View More</Link>
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mt-4 md:mt-0">
          <Image src={HomeFur3} alt="Home Furniture" />
          <div className="text-center md:text-left mt-4 md:mt-0">
            <h2 className="text-2xl md:text-4xl font-medium">Side Table</h2>
            <button className="text-base md:text-2xl font-medium border-b-2 border-solid border-black mt-2 md:mt-9 pb-2">
              <Link href={'/shop'}>View More</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroSubSec;