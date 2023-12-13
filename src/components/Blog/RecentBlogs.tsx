import React from "react";
import Link from "next/link";
import Image from "next/image";
import RecentBlog1 from "../../../public/images/RecentPost-1.png";
import RecentBlog2 from "../../../public/images/RecentPost-2.png";
import RecentBlog3 from "../../../public/images/RecentPost-3.png";
import RecentBlog4 from "../../../public/images/RecentPost-4.png";
import RecentBlog5 from "../../../public/images/RecentPost-5.png";

interface RecentBlog {
  id: number;
  image: any;
  title: string;
  date: string;
}

const RecentBlogData: RecentBlog[] = [
  {
    id: 1,
    image: RecentBlog1,
    title: "Going all-in with millennial design",
    date: "03 Aug 2022",
  },
  {
    id: 2,
    image: RecentBlog2,
    title: "Exploring new ways of decorating",
    date: "03 Aug 2022",
  },
  {
    id: 3,
    image: RecentBlog3,
    title: "Handmade pieces that took time to make",
    date: "03 Aug 2022",
  },
  {
    id: 4,
    image: RecentBlog4,
    title: "Modern home in Milan",
    date: "03 Aug 2022",
  },
  {
    id: 5,
    image: RecentBlog5,
    title: "Colorful office redesign",
    date: "03 Aug 2022",
  },
];

const RecentBlogs: React.FC = () => {
  return (
    <div className="py-5 px-8 md:px-24">
      <h2 className="pb-8 text-2xl font-medium">Recent Blog Posts</h2>
      <div>
        {RecentBlogData.map((post) => (
          <div key={post.id} className="w-[393px] flex items-center gap-3 pb-8">
            <div>
              <Image src={post.image} alt="BlogImage" />
            </div>
            <div>
              <Link href={`/blog/${post.date}`}>
                <h3 className="font-medium text-sm w-[119px]">{post.title}</h3>
              </Link>
              <p className="text-[#9F9F9F] text-xs">{post.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentBlogs;
