import React from "react";
import { Link } from "react-router-dom";
import { BsFacebook, BsTwitter, BsGithub, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-gray-100">
      <div className="max-w-screen-xl py-5 px-4 sm:px-6 text-gray-800 sm:flex justify-between mx-auto">
        <div className="p-5 sm:w-8/12">
          <h3 className="font-bold text-3xl text-[#ED9FA8] mb-4">
            Lorem Ipsum
          </h3>

          <div className="flex text-gray-500 uppercase text-sm">
            <Link to="/" className="mr-2 hover:text-indigo-600">
              Home
            </Link>
            <Link to="/" className="mr-2 hover:text-indigo-600">
              About
            </Link>
            <Link to="/" className="mr-2 hover:text-indigo-600">
              Blog
            </Link>
            <Link to="/" className="mr-2 hover:text-indigo-600">
              Contact
            </Link>
          </div>
        </div>
        <div className="p-5 sm:w-4/12">
          <h3 className="font-medium text-lg text-[#ED9FA8] mb-4">
            Follow us on social media
          </h3>
          <div className="flex">
            <Link to="/">
              <BsFacebook className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 p-2 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" />
            </Link>
            <Link to="/">
              <BsTwitter className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 p-2 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" />
            </Link>
            <Link to="/">
              <BsGithub className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 p-2 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" />
            </Link>
            <Link to="/">
              <BsInstagram className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 p-2 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex py-5 m-auto text-gray-800 text-sm flex-col items-center border-t max-w-screen-xl">
        <p>© Copyright 2022. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
