import React from "react";
import Image from "next/image";
import Filter from "../../../public/images/filter.svg";
import GridLayout from "../../../public/images/ci_grid-big-round.png";
import ListLayout from "../../../public/images/bi_view-list.png";

const BreadCrumbs = () => {
  return (
    <div className="bg-[#FAF4F4] mt-4 sm:mt-8 p-4 sm:p-6 lg:p-12 flex flex-col sm:flex-row justify-between items-center">
      <div className="flex justify-center items-center gap-4 sm:gap-7">
        <div className="flex items-center gap-2">
          <Image src={Filter} alt="Filter" />
          <p className="text-lg sm:text-xl font-medium">Filter</p>
        </div>

        <div className="flex items-center gap-4">
          <Image src={GridLayout} alt="Grid Layout" />
          <Image src={ListLayout} alt="List Layout" />
        </div>

        <div className="border-t sm:border-0 border-[#9F9F9F] sm:border-l-2 h-10 flex items-center mt-4 sm:mt-0 pl-8 ml-8">
          <p className="text-sm sm:text-base font-medium">Showing 1–16 of 32 results</p>
        </div>
      </div>

      <div className="flex gap-5 mt-4 sm:mt-0">
        <div className="flex items-center gap-4">
          <p className="text-lg sm:text-xl font-medium">Show</p>
          <input
            type="button"
            value="16"
            className="text-lg sm:text-xl font-medium text-[#9F9F9F] bg-white px-4 py-2 sm:px-5 sm:py-3"
          />
        </div>
        <div className="flex items-center gap-4">
          <p className="text-lg sm:text-xl font-medium">Sort By</p>
          <input
            type="button"
            value="Default"
            className="text-lg sm:text-xl font-medium text-[#9F9F9F] bg-white px-4 py-2 sm:px-5 sm:py-3"
          />
        </div>
      </div>
    </div>
  );
};

export default BreadCrumbs;
