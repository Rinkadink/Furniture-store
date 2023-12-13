import React from 'react';
import Image from 'next/image';
import TopPick1 from '../../../public/images/fur-1.png';
import TopPick2 from '../../../public/images/fur-2.png';
import TopPick3 from '../../../public/images/fur-3.png';
import TopPick4 from '../../../public/images/fur-4.png';
import Link from 'next/link';
const TopPicks = () => {
  return (
    <div className="px-4 md:px-24 py-8 md:py-16">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-medium">Top Picks For You</h2>
        <p className="text-[#9F9F9F] text-base md:text-lg font-medium mt-3 md:mt-6">
          Find a bright idea to suit your taste with our great selection of
          suspension, floor and table lights.
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6 mt-8">
        <div className="w-full md:w-[298px] h-[350px]">
          <Image src={TopPick1} alt="Home Furniture" />
          <div>
            <p className="text-base md:text-lg font-medium">
              Trenton modular sofa_3
            </p>
            <p className="text-lg md:text-2xl font-semibold mt-1 md:mt-3">
              Rs.25,000.00
            </p>
          </div>
        </div>
        <div className="w-full md:w-[298px] h-[350px]">
          <Image src={TopPick2} alt="Home Furniture" />
          <div className="mt-[110px]">
            <p className="text-base md:text-lg font-medium">
              Granite dining table with dining chair
            </p>
            <p className="text-lg md:text-2xl font-semibold mt-1 md:mt-3">
              Rs.25,000.00
            </p>
          </div>
        </div>
        <div className="w-full md:w-[298px] h-[350px]">
          <Image src={TopPick3} alt="Home Furniture" />
          <div className="mt-[50px]">
            <p className="text-base md:text-lg font-medium">
              Outdoor bar table and stool
            </p>
            <p className="text-lg md:text-2xl font-semibold mt-1 md:mt-3">
              Rs.25,000.00
            </p>
          </div>
        </div>
        <div className="w-full md:w-[298px] h-[350px]">
          <Image src={TopPick4} alt="Home Furniture" />
          <div className="mt-[130px]">
            <p className="text-base md:text-lg font-medium">
              Plain console with teak mirror
            </p>
            <p className="text-lg md:text-2xl font-semibold mt-1 md:mt-3">
              Rs.25,000.00
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center my-8 md:my-16">
        <button className="text-lg md:text-2xl font-medium border-b-2 border-solid border-black mt-4 md:mt-9 pb-2">
          <Link href={'/shop'}>View More</Link>
        </button>
      </div>
    </div>
  );
};
export default TopPicks;