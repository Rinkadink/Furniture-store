import React from "react";
import Image from "next/image";
import CloudSofa from "../../../public/images/Cloud sofa-1.png";
import CloudSofa2 from "../../../public/images/Cloud sofa-2.png";

const ProductDesc = () => {
  return (
    <div className="mt-4 sm:mt-8 py-4 sm:py-8 border-t border-b border-[#d9d9d9]">
      <div>
        <div className="text-lg sm:text-2xl font-medium flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-14 py-4 sm:py-12">
          <h3 className="text-center sm:text-left">Description</h3>
          <h3 className="text-center sm:text-left text-[#9F9F9F]">
            Additional Information
          </h3>
          <h3 className="text-center sm:text-left text-[#9F9F9F]">
            Reviews [5]
          </h3>
        </div>

        <div className="mx-4 sm:mx-auto w-full sm:w-[770px] text-sm sm:text-base text-[#9F9F9F] pb-4 sm:pb-8">
          <p className="py-4">
            Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
            portable active stereo speaker takes the unmistakable look and sound
            of Marshall, unplugs the chords, and takes the show on the road.
          </p>

          <p>
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of
            vintage styled engineering. Setting the bar as one of the loudest
            speakers in its class, the Kilburn is a compact, stout-hearted hero
            with a well-balanced audio which boasts a clear midrange and
            extended highs for a sound that is both articulate and pronounced.
            The analog knobs allow you to fine-tune the controls to your
            personal preferences while the guitar-influenced leather strap
            enables easy and stylish travel.
          </p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mt-4 sm:mt-0">
        <div className="bg-[#FFF9E5] rounded-lg">
          <Image src={CloudSofa} alt="Cloud Sofa" />
        </div>
        <div className="bg-[#FFF9E5] rounded-lg">
          <Image src={CloudSofa2} alt="Cloud Sofa" />
        </div>
      </div>
    </div>
  );
};

export default ProductDesc;
