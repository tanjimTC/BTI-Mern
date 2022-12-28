import React from "react";

const SpecificBlog = ({ myBlog }) => {
  return (
    <div>
      <div class="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 relative">
        <div
          class="bg-cover h-64 text-center overflow-hidden"
          style={{
            height: "450px",
            backgroundImage: `url(${myBlog.imageUrl})`,
          }}
          title="Woman holding a mug"
        ></div>
        <div class="max-w-2xl mx-auto">
          <div class="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
            <div class="">
              <a
                href="/"
                class="text-xs text-indigo-600 uppercase font-medium hover:text-gray-900 transition duration-500 ease-in-out"
              >
                {myBlog.category}
              </a>

              <h1 href="#" class="text-gray-900 font-bold text-3xl mb-2">
                {myBlog.blogTitle}
              </h1>
              <p class="text-gray-700 text-xs mt-2">
                Written By:{" "}
                <span
                  class="text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
                >
                  {myBlog.firstName} {myBlog.lastName}
                </span>
              </p>
              <p class="text-base leading-8 my-5">
                {myBlog.blog}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecificBlog;
