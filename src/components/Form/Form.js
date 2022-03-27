import React, { useState } from "react";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { createPost } from "../../features/postSlice";

function Form() {
  const initialState = {
    creator: "",
    title: "",
    message: "",
    selectedFile: "",
  };

  const dispatch = useDispatch();
  const [postData, setPostData] = useState(initialState);

  const handleChange = (e) => {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (postData.selectedFile !== "") {
      dispatch(createPost(postData));

      setPostData(initialState);
    } else {
      alert("Mr.RAMKALYAN don't like posts without image 😉");
    }
  };

  return (
    <div className="text-2xl md:w-[35%] w-[90%] h-[97%] mt-24 mx-auto bg-white rounded-lg border-pink-400 border">
      <form onSubmit={handleSubmit}>
        <h1 className="text-center my-4 text-pink-700 font-bold">
          Create New Post
        </h1>

        <div className="border  w-[90%] mx-auto my-4 p-2 rounded-lg px-2 border-gray-300 text-lg">
          <input
            name="title"
            value={postData.title}
            type="text"
            placeholder="Title"
            className="focus:outline-none placeholder:text-gray-500 w-[100%]"
            onChange={handleChange}
            required
          />
        </div>
        <div className="border border-gray-300 w-[90%] mx-auto my-4 p-1 rounded-lg px-2 text-lg  ">
          <textarea
            name="message"
            value={postData.message}
            id=""
            cols="30"
            rows="5"
            placeholder="Message"
            className="focus:outline-none placeholder:text-gray-500 w-[100%]"
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="mx-auto  w-[90%] text-sm  ">
          <h4 className="text-lg font-bold text-pink-700 my-2">
            Upload Image :{" "}
          </h4>
          <FileBase
            type="file"
            multiple={false}
            className=" text-gray-900 "
            onDone={({ base64 }) => {
              setPostData({ ...postData, selectedFile: base64 });
            }}
          />
        </div>

        <div className="w-[90%] bg-blue-800 mx-auto my-4 text-center rounded-lg text-white py-1 hover:bg-blue-500 active:border-2 active:border-blue-900 active:bg-blue-500">
          <button type="submit" className="w-[90%] ">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
