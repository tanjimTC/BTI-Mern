import React from "react";
import BlogCard from "./BlogCard";
import { blogs } from "../blogs";

const Blogs = () => {
  return (
    <div>
      <div className="bg-[#EDA0A8] py-10">
        <h3 className="text-2xl tracking-widest text-[#fff] text-center">
          Blogs
        </h3>
        <h1 className="mt-4 text-center text-5xl text-[#fff] font-bold">
          Lorem, ipsum dolor.
        </h1>

        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <BlogCard key={index} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
