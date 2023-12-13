import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <section className="flex flex-col md:flex-row justify-around p-4 md:p-12 gap-4 md:gap-16">
        <div className="flex items-center justify-center md:mb-4">
          <p className="text-[#9F9F9F] text-base text-center md:text-left">
            400 University Drive Suite 200 Coral Gables, FL 33134 USA
          </p>
        </div>

        <div>
          <p className="text-[#9F9F9F] text-base mb-2 md:mb-6">Links</p>
          <ul className="space-y-2">
            <li>
              <Link href="/home">
                <p className="text-lg leading-[48px]">Home</p>
              </Link>
            </li>
            <li>
              <Link href="/shop">
                <p className="text-lg leading-[48px]">Shop</p>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <p className="text-lg leading-[48px]">Blog</p>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <p className="text-lg leading-[48px]">Contact</p>
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-[#9F9F9F] text-base mb-2 md:mb-6">Help</p>
          <ul className="space-y-2">
            <li className="leading-[46px]">Payment Options</li>
            <li className="leading-[46px]">Returns</li>
            <li className="leading-[46px]">Privacy Policies</li>
          </ul>
        </div>

        <div>
          <p className="text-[#9F9F9F] text-base mb-2 md:mb-6">Newsletter</p>
          <div className="flex flex-col md:flex-row">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="border-b border-black py-2 md:py-4 mr-0 md:mr-3 outline-none mb-2 md:mb-0"
            />
            <input
              type="button"
              value="SUBSCRIBE"
              className="border-b border-black py-2 md:py-4 outline-none"
            />
          </div>
        </div>
      </section>
      <footer className="text-base border-t border-[#D9D9D9] p-4 md:p-9">
        <p className="text-center md:text-left">
          2022 Meubel House. All rights reserved
        </p>
      </footer>
    </div>
  );
};

export default Footer;
