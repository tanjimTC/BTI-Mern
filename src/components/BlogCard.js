import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  return (
    <div>
      <div className="mt-10 mx-4 py-4 px-4 bg-whit  bg-white rounded-xl shadow-lg">
        <div className="w-sm">
          <img className="w-64" src={blog.imageUrl} alt="xyz" />
          <div className="basic-chip background-green">{blog.category}</div>
          <div className="mt-4 text-[#EDA0A8] text-center">
            <h1 className="text-xl font-bold">{blog.title}</h1>
            <p className="mt-4 text-gray-600 mb-8">
              {blog.blog.length > 10
                ? blog.blog.slice(0, 80) + "..."
                : blog.blog}
            </p>
            <Link
              to={`/specific-blog/${blog._id}`}
              className="cursor-pointer mb-4 py-2 px-14 rounded-full bg-[#EDA0A8] text-white tracking-widest hover:bg-[#fe939e] transition duration-200"
            >
              MORE
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
