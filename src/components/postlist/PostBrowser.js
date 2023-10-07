import React from "react";
import PostItem from "./PostItem";
import { useDispatch, useSelector } from "react-redux";

export default function PostBrowser() {
  const posts = useSelector((state) => state.postReducer.posts);

  console.log({ posts });

  return (
    <main>
      <div className="mainLetters">
        <div className="optionMain">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-plus-lg"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
            />
          </svg>
        </div>
        <div className="optionMainspace">For you</div>
        <div className="optionMainspace">Following</div>
      </div>
      {posts.map((post) => (
        <PostItem key={post.id} data={post} />
      ))}
    </main>
  );
}
