import React from 'react';
import Image from 'next/image';
import HomeBlog1 from '../../../public/images/home-blog-1.png';
import HomeBlog2 from '../../../public/images/home-blog-2.png';
import HomeBlog3 from '../../../public/images/home-blog-3.png';
import Timer from '../../../public/images/timer.svg';
import Calender from '../../../public/images/calender.svg';
import Link from 'next/link';
const HomeBlog = () => {
  return (
    <div className="px-4 md:px-24">
      <div className="text-center my-6 md:my-10">
        <h2 className="text-3xl md:text-4xl font-medium py-3 md:py-6">
          Our Blogs
        </h2>
        <p className="text-base font-medium text-[#9F9F9F]">
          Find a bright idea to suit your taste with our great selection
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-6">
        <div className="text-center">
          <Image src={HomeBlog1} alt="Home Furniture" />
          <div className="mt-4 md:mt-8">
            <p className="text-lg md:text-xl font-medium">
              Going all-in with millennial design
            </p>
            <div className="flex justify-center items-center">
              <button className="text-lg md:text-2xl font-medium border-b-2 border-solid border-black mt-4 md:mt-9 pb-2">
                <Link href={'/blog'}>Read More</Link>
              </button>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mt-4 md:mt-5">
              <div className="flex items-center gap-2">
                <Image src={Timer} alt="Timer" />
                <p className="text-base">5 min</p>
              </div>
              <div className="flex items-center gap-2">
                <Image src={Calender} alt="Calender" />
                <p className="text-base">
                  12<sup>th</sup> Oct 2022
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <Image src={HomeBlog2} alt="Home Furniture" />
          <div className="mt-4 md:mt-8">
            <p className="text-lg md:text-xl font-medium">
              Going all-in with millennial design
            </p>
            <div className="flex justify-center items-center">
              <button className="text-lg md:text-2xl font-medium border-b-2 border-solid border-black mt-4 md:mt-9 pb-2">
                <Link href={'/blog'}>Read More</Link>
              </button>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mt-4 md:mt-5">
              <div className="flex items-center gap-2">
                <Image src={Timer} alt="Timer" />
                <p className="text-base">5 min</p>
              </div>
              <div className="flex items-center gap-2">
                <Image src={Calender} alt="Calender" />
                <p className="text-base">
                  12<sup>th</sup> Oct 2022
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <Image src={HomeBlog3} alt="Home Furniture" />
          <div className="mt-4 md:mt-8">
            <p className="text-lg md:text-xl font-medium">
              Going all-in with millennial design
            </p>
            <div className="flex justify-center items-center">
              <button className="text-lg md:text-2xl font-medium border-b-2 border-solid border-black mt-4 md:mt-9 pb-2">
                <Link href={'/blog'}>Read More</Link>
              </button>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mt-4 md:mt-5">
              <div className="flex items-center gap-2">
                <Image src={Timer} alt="Timer" />
                <p className="text-base">5 min</p>
              </div>
              <div className="flex items-center gap-2">
                <Image src={Calender} alt="Calender" />
                <p className="text-base">
                  12<sup>th</sup> Oct 2022
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center my-6 md:my-16">
        <button className="text-lg md:text-2xl font-medium border-b-2 border-solid border-black mt-4 md:mt-9 pb-2">
          <Link href={'/blog'}> View All Posts </Link>
        </button>
      </div>
    </div>
  );
};
export default HomeBlog;