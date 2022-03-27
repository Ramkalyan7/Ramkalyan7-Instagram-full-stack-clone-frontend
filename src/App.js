import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header.js";
import Posts from "./components/Posts/Posts";
import { getPosts } from "./features/postSlice";
import { useSelector } from "react-redux";

function App() {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch, posts]);
  return (
    <div className="app">
      <Header />
      <div className="flex align-center flex-col-reverse  md:flex-row md:justify-evenly md:w-[84%] m-auto">
        <Posts />

        <Form />
      </div>
    </div>
  );
}

export default App;
