import React from "react";
import Image from "next/image";
import Logo from "../../../public/images/furniture-logo.png";
import LeftArrow from "../../../public/images/left-arrow.png";
import Link from "next/link";


const Hero = ({ pageTitle }: any) => {
  return (
    <div>
      <section className="heroProps">
        <div className="flex items-center justify-center flex-col gap-6 h-[316px]">
          <div>
            <Image src={Logo} alt="Logo" />
          </div>

          <h2 className="text-5xl">{pageTitle}</h2>

          <div className="flex gap-6">
            <Link href="/home" className="text-base">
              Home
            </Link>
            <Image src={LeftArrow} alt="Left Arrow" />
            <Link href="/shop" className="text-base">
              Shop
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
