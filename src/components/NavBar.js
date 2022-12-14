import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const handleMenuClick = () => {
    const menu = document.getElementById("menu");
    menu.classList.toggle("hidden");
  };

  return (
    <nav className="flex flex-wrap items-center justify-between w-full py-4 md:py-0 px-4 text-lg text-gray-700 bg-white fixed">
      <div>
        <Link to="/">logo</Link>
      </div>
      <div>
        <svg
          xmlns="<http://www.w3.org/2000/svg>"
          id="menu-button"
          className="h-6 w-6 cursor-pointer md:hidden block"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          onClick={() => handleMenuClick()}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
      <div
        className="hidden w-full md:flex md:items-center md:w-auto "
        id="menu"
      >
        <ul
          className="
              text-base text-gray-700
              pt-4
              md:flex
              md:justify-between
              md:pt-0"
        >
          <li>
            <Link
              className="md:p-4 py-2 block hover:text-purple-400"
              to="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link className="md:p-4 py-2 block hover:text-purple-400" to="/">
              Pricing
            </Link>
          </li>
          <li>
            <Link className="md:p-4 py-2 block hover:text-purple-400" to="/users">
              Users
            </Link>
          </li>
          <li>
            <Link className="md:p-4 py-2 block hover:text-purple-400" to="/blog">
              Blog
            </Link>
          </li>
          <li>
            <a
              className="md:p-4 py-2 block hover:text-purple-400 text-purple-500"
              href="/"
            >
              Sign Up
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
