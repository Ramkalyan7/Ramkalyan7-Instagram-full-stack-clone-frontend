import axios from "axios";

const url = API_ENDPOINT;

export const fetchPosts = () => {
  return axios.get(url);
};

export const createPost = (post) => {
  return axios.post(url, post);
};
