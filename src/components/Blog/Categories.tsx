'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Search from '../../../public/images/Search.svg';
interface Category {
  id: number;
  title: string;
  figure: number;
}

const categories: Category[] = [
  {
    id: 1,
    title: 'Crafts',
    figure: 2,
  },
  {
    id: 2,
    title: 'Design',
    figure: 8,
  },
  {
    id: 3,
    title: 'Handmade',
    figure: 7,
  },
  {
    id: 4,
    title: 'Interior',
    figure: 1,
  },
  {
    id: 5,
    title: 'Wood',
    figure: 6,
  },
];
const Categories = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCategories, setFilteredCategories] = useState(categories);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = categories.filter((cat) =>
      cat.title.toLowerCase().includes(query)
    );
    setFilteredCategories(filtered);
  };

  return (
    <div className="w-[393px] py-5 px-1 md:px-24">
      <div className="relative">
        <label htmlFor="">
          {' '}
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search Categories"
            className="px-4 border md:w-[311px] w-[250px] h-[75px] md:h-[75px] rounded-xl md:text-2xl text-base outline-none my-2 md:my-4"
          />
        </label>
        <div className="absolute top-[40%] right-[45%] md:right-[-40%] cursor-pointer">
          <Image src={Search} alt="Search" />
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-medium my-10">Categories</h2>
        <div className="text-base text-[#9F9F9F] ">
          {filteredCategories.map((catData) => (
            <div key={catData.id}>
              <div className="flex justify-between items-center mb-11 w-[320px]">
                <p>{catData.title}</p>
                <p>{catData.figure}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
