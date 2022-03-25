import React from "react";
import Tony from "../../../assets/tony.jpg";
import sky from "../../../assets/Sky.jpg";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { BiMessageRounded, BiBookmark } from "react-icons/bi";
import { FiSend } from "react-icons/fi";
import { GoKebabHorizontal } from "react-icons/go";

function Post() {
  return (
    <div className=" w-[100%] mb-6  h-[97%] bg-white border-gray-300 border ">
      <div className=" header flex items-center justify-between mx-4 my-5">
        <div className=" profile flex items-center">
          <img
            src={Tony}
            alt="profile"
            className="rounded-3xl w-10 mr-3 border-pink-700 border-2"
          />
          <h3>Tony Stark</h3>
        </div>
        <GoKebabHorizontal className="text-xl" />
      </div>

      <div className="mainimage ">
        <img src={sky} alt="" className="w-[100%]" />
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
      <p className="postdescription mx-4 my-6">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Similiquevoluptatum ab dolor duci necessitatibus nostrum animi, id iure
        dolores blanditiis! Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Commodi reiciendis in debitis corrupti illum culpa! Eligendi
        similique alias, necessitatibus neque blanditiis ullam commodi veniam
        aut corrupti praesentium facilis, omnis doloribus.
      </p>
    </div>
  );
}

export default Post;
