'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Blog1 from '../../../public/images/Blog-1.png';
import Blog2 from '../../../public/images/Blog-2.png';
import Blog3 from '../../../public/images/Blog-3.png';
import User from '../../../public/images/user.png';
import Calender from '../../../public/images/calender.svg';
import Tag from '../../../public/images/Blog-tag.svg';
import Pagination from '../Pagination/Pagination';

interface BlogPost {
  id: number;
  image: any;
  title: string;
  content: string;
  date: string;
  calender: any;
  user: any;
  blogTag: any;
  tag: string;
}

const BlogData: BlogPost[] = [
  {
    id: 1,
    image: Blog1,
    title: 'Going all-in with millennial design',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.',
    date: '14 Oct 2022',
    calender: Calender,
    user: User,
    blogTag: Tag,
    tag: 'Wood',
  },
  {
    id: 2,
    image: Blog2,
    title: 'Exploring new ways of decorating',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.',
    date: '14 Oct 2022',
    calender: Calender,
    user: User,
    blogTag: Tag,
    tag: 'Handmade',
  },
  {
    id: 3,
    image: Blog3,
    title: 'Handmade pieces that took time to make',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.',
    date: '14 Oct 2022',
    calender: Calender,
    user: User,
    blogTag: Tag,
    tag: 'Wood',
  },
  {
    id: 4,
    image: Blog3,
    title: 'Going all-in with millennial design',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.',
    date: '14 Oct 2022',
    calender: Calender,
    user: User,
    blogTag: Tag,
    tag: 'Interior',
  },
  {
    id: 5,
    image: Blog1,
    title: 'Exploring new ways of decorating',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.',
    date: '14 Oct 2022',
    calender: Calender,
    user: User,
    blogTag: Tag,
    tag: 'Design',
  },
  {
    id: 6,
    image: Blog2,
    title: 'Handmade pieces that took time to make',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.',
    date: '14 Oct 2022',
    calender: Calender,
    user: User,
    blogTag: Tag,
    tag: 'Craft',
  },
  {
    id: 7,
    image: Blog2,
    title: 'Going all-in with millennial design',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.',
    date: '14 Oct 2022',
    calender: Calender,
    user: User,
    blogTag: Tag,
    tag: 'Design',
  },
  {
    id: 8,
    image: Blog3,
    title: 'Exploring new ways of decorating',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.',
    date: '14 Oct 2022',
    calender: Calender,
    user: User,
    blogTag: Tag,
    tag: 'Interior',
  },
  {
    id: 9,
    image: Blog1,
    title: 'Handmade pieces that took time to make',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.',
    date: '14 Oct 2022',
    calender: Calender,
    user: User,
    blogTag: Tag,
    tag: 'Craft',
  },
];

const productsPerPage = 3;
const BlogArticle = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;

  const handlePageChange = (newPage: any) => {
    setCurrentPage(newPage);
  };

  const [selectedTag, setSelectedTag] = useState(null);

  const getFilteredBlogData = () => {
    return selectedTag
      ? BlogData.filter((blog) => blog.tag === selectedTag)
      : BlogData;
  };

  const currentProducts = getFilteredBlogData().slice(startIndex, endIndex);
  const totalPages = Math.ceil(getFilteredBlogData().length / productsPerPage);

  const handleTagClick = (tag: any) => {
    setSelectedTag((prevTag: any) => (prevTag === tag ? null : tag));
    setCurrentPage(1);
  };

  return (
    <div className=" flex flex-col md:grid md:grid-cols-1 gap-6">
      <div className="grid grid-cols-2 md:flex items-center gap-4 mb-4">
        <span>Filter by Tag:</span>
        {Array.from(new Set(BlogData.map((blog) => blog.tag))).map((tag) => (
          <button
            key={tag}
            onClick={() => handleTagClick(tag)}
            className={`${
              selectedTag === tag ? 'bg-slate-500 text-white' : 'bg-gray-200'
            } px-8 py-4 rounded-full cursor-pointer border-none outline-none`}
          >
            {tag}
          </button>
        ))}
        <button
          onClick={() => handleTagClick(null)}
          className={`${
            !selectedTag ? 'bg-slate-500 text-white' : 'bg-gray-200'
          } px-8 py-4 rounded-full cursor-pointer border-none outline-none`}
        >
          Clear Filter
        </button>
      </div>
      {currentProducts.map((blog) => (
        <div key={blog.id} className="p-2 w-[597px]">
          <div className="mb-4 w-[300px] md:w-[500px]">
            <Image src={blog.image} alt="BlogImage" />
          </div>
          <div className="flex md:items-center md:gap-4 my-4">
            <div className="flex items-center gap-2 text-[#9F9F9F] text-sm">
              <Image src={blog.user} alt="User" width={20} height={20} />
              <p>Admin</p>
            </div>
            <div className="flex items-center gap-2 text-[#9F9F9F] text-sm">
              <Image
                src={blog.calender}
                alt="Calender"
                width={20}
                height={20}
              />
              <p>{blog.date}</p>
            </div>
            <div className="flex items-center gap-2 text-[#9F9F9F] text-sm">
              <Image src={blog.blogTag} alt="Tag" width={20} height={20} />
              <p>{blog.tag}</p>
            </div>
          </div>
          <div>
            <Link href={`/blog/${blog.date}`}>
              <h2 className="text-base md:text-2xl font-medium my-4 w-[250px] md:w-[500px]">
                {blog.title}
              </h2>
            </Link>
            <p className="text-[#9F9F9F] text-base leading-7 w-[300px] md:w-[500px]">
              {blog.content}
            </p>
          </div>
        </div>
      ))}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default BlogArticle;
