import React from "react";
import Tony from "../../../assets/tony.jpg";

import { MdOutlineFavoriteBorder } from "react-icons/md";
import { BiMessageRounded, BiBookmark } from "react-icons/bi";
import { FiSend } from "react-icons/fi";
import { GoKebabHorizontal } from "react-icons/go";

function Post({ title, message, selectedFile }) {
  return (
    <div className=" w-[100%] mb-6  h-[97%] bg-white border-gray-300 border hover:border-pink-700 hover:rounded-3xl hover:border-4 ">
      <div className=" header flex items-center justify-between mx-4 my-5">
        <div className=" profile flex items-center">
          <img
            src={Tony}
            alt="profile"
            className="rounded-3xl w-10 mr-3 border-pink-700 border-2"
          />
          <h3>Anonymous</h3>
        </div>
        <GoKebabHorizontal className="text-xl" />
      </div>

      <div className="mainimage ">
        <img src={selectedFile} alt="" className="w-[100%]" />
      </div>

      <div className=" icons flex justify-between my-3">
        <div className="flex">
          <MdOutlineFavoriteBorder className="text-3xl ml-4 mr-3" />
          <BiMessageRounded className="text-3xl mx-3" />
          <FiSend className="text-3xl mx-3" />
        </div>
        <div>
          <BiBookmark className="text-3xl mr-4" />
        </div>
      </div>
      <h2 className="mx-4 text-xl text-pink-700 font-bold">{title}</h2>
      <p className="postdescription mx-4 my-2">{message}</p>
    </div>
  );
}

export default Post;
