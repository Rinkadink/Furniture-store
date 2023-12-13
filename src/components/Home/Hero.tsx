import React from 'react';
import Image from 'next/image';
import HomeFur from '../../../public/images/home-fur-1.svg';
import Link from 'next/link';
const Hero = () => {
  return (
    <div className="home flex flex-col-reverse md:flex-row justify-center items-center px-4 md:px-16 py-8 md:py-24">
      <div className="text-center md:text-left">
        <h1 className="text-4xl md:text-7xl font-medium">
          Rocket Single Seater
        </h1>
        <button className="text-xl md:text-2xl font-medium border-b-2 border-solid border-black mt-4 md:mt-9 pb-2">
          <Link href={'/shop'}>Shop Now</Link>
        </button>
      </div>
      <div className="mt-4 md:mt-0">
        <Image src={HomeFur} alt="Home Furniture" />
      </div>
    </div>
  );
};
export default Hero;