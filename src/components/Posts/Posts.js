import Post from "./Post/Post";
import React from "react";
import { useSelector } from "react-redux";

function Posts() {
  const posts = useSelector((state) => state.post);
  return !posts.length ? null : (
    <div className="mt-24 self-start box-content md:w-[40%] w-[97%] mx-auto flex flex-col-reverse  ">
      {posts.map((post) => (
        <Post
          key={post._id}
          creator={post.creator}
          title={post.title}
          message={post.message}
          selectedFile={post.selectedFile}
        />
      ))}
    </div>
  );
}

export default Posts;
