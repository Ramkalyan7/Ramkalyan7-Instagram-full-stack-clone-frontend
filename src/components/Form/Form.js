import React from "react";
import FileBase64 from "react-file-base64";

function Form() {
  return (
    <div className="text-2xl md:w-[40%] w-[97%] h-[97%] mt-24 mx-auto">
      <h1>Create New Post</h1>
      <input type="text" placeholder="Title of the Post" />
      <textarea
        name="description"
        id=""
        cols="30"
        rows="10"
        placeholder="Description of the Post"
      ></textarea>
    </div>
  );
}

export default Form;
