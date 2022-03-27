import React from "react";
import Logo from "../../assets/instagram-logo.jpg";
import { FaHome } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";
import {
  MdOutlineAddBox,
  MdOutlineExplore,
  MdFavoriteBorder,
  MdAccountCircle,
  MdSearch,
} from "react-icons/md";
const Header = () => {
  return (
    <nav className="flex justify-between items-center px-6  py-4 border-gray-300 fixed left-0 right-0 top-0 bg-white border-b md:px-44">
      <div className="w-[30%] md:w-[15%]">
        <a href="/">
          <img src={Logo} alt="logo" />
        </a>
      </div>
      <div className="items-center bg-gray-200 rounded-lg h-10 w-64 px-2 hidden md:flex ">
        <MdSearch className="text-gray-500" />
        <input
          type="text"
          placeholder="Search"
          className="bg-gray-200 px-2 placeholder:text-gray-500 focus:outline-none"
        />
      </div>
      <div className="md:m-0 ml-6">
        <ul className="flex items-center ">
          <li className="mx-2 hover:text-gray-400">
            <a href="/">
              <FaHome className="text-xl md:text-3xl;" />
            </a>
          </li>
          <li className="mx-2 hover:text-gray-400   ">
            <a href="/">
              <AiOutlineMessage className="text-xl md:text-3xl; " />
            </a>
          </li>
          <li className="mx-2 hover:text-gray-400   ">
            <a href="/">
              <MdOutlineAddBox className="text-xl md:text-3xl;" />
            </a>
          </li>
          <li className="mx-2 hover:text-gray-400   ">
            <a href="/">
              <MdOutlineExplore className="text-xl md:text-3xl;" />
            </a>
          </li>
          <li className="mx-2 hover:text-gray-400   ">
            <a href="/">
              <MdFavoriteBorder className="text-xl md:text-3xl;" />
            </a>
          </li>
          <li className="mx-2 hover:text-gray-400   ">
            <a href="/">
              <MdAccountCircle className="text-xl md:text-3xl;" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
