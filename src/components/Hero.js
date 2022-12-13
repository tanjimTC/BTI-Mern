import React from "react";

const Hero = () => {
  return (
    <section className="px-3  bg-neutral-100 lg:py-10 ">
      <div className="grid md:grid-cols-2 lg:grid-cols-2 items-center justify-items-center gap-5 min-h-[80vh]">
        <div className="p-3 order-2 lg:order-1 flex flex-col justify-center items-center">
          <p className="text-4xl font-bold md:text-5xl lg:7xl text-[#EDA0A8]">
            Lorem Ipsum
          </p>
          <p className="text-xl font-bold"> Lorem ipsum dolor </p>
          <p className="mt-2 text-sm">Lorem ipsum dolor sit amit dolor.</p>
          <button className="text-lg md:text-2xl bg-black text-white py-2 px-5 mt-10 hover:bg-zinc-800">
            Blogs
          </button>
        </div>
        <div className="order-1 lg:order-2">
          <img
            className="h-52 w-52 object-cover md:w-[300px] md:h-[300px] lg:w-[500px] lg:h-[500px]"
            src="https://img.freepik.com/free-photo/joyful-black-author-works-writing-new-book-readers_273609-28047.jpg?w=1800&t=st=1670850961~exp=1670851561~hmac=967ec92f4241cca229c0950c53c726aba72dfe494867dfa06b7efa7d1398eefa"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
