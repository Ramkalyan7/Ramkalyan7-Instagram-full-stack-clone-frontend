import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as api from "../api/index";
import Tony from "../assets/Sky.jpg";

export const getPosts = createAsyncThunk("Post/getPosts", async () => {
  try {
    const { data } = await api.fetchPosts();
    return data;
  } catch (error) {
    console.log(error.message);
  }
});
export const createPost = createAsyncThunk("Post/createPost", async (post) => {
  try {
    const { data } = await api.createPost(post);
    return data;
  } catch (error) {
    console.log(error.message);
  }
});

const postSlice = createSlice({
  name: "Post",
  initialState: [
    {
      _id: 1,
      creator: "Ram Kalyan",
      title: "Flying in the sky",
      message:
        "'USE THE FORM TO ADD NEW POSTS!!!' and I dont know what I am writing. Just to increase the size of this post I am writing this text randomly but it have some meaning that is nothing 😂😂 . Let me write something meaning less because i dont wanna waste your time since  'NO AMOUNT OF MONEY EVER BOUGHT A SINGLE MINUTE OF TIME' 😉 ",
      selectedFile: Tony,
    },
  ],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPosts.fulfilled, (state, action) => {
      return [...state, ...action.payload];
    });
    builder.addCase(createPost.fulfilled, (state, action) => {
      return [...state, action.payload];
    });
  },
});

export default postSlice.reducer;
