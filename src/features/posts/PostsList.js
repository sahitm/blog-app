import React from "react";
import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";

function PostsList() {
  const posts = useSelector(selectAllPosts);

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

  const renderedPosts = posts.map((post) => (
    <article key={post.id}>
      <div>
        <img
          className="w-full"
          src={`https://cdn.tuk.dev/assets/components/111220/Blg-6/blog(${getRandomInt(1,5)}).png`}
          alt={`post-${post.id}`}
        />
        <div className="py-2 px-4 w-full flex justify-between bg-indigo-700">
          <p className="text-sm text-white font-semibold tracking-wide"></p>
          <p className="text-sm text-white font-semibold tracking-wide"></p>
        </div>
        <div className="bg-white px-3  lg:px-6 py-4 rounded-bl-3xl rounded-br-3xl">
          <h1 className="text-lg text-gray-900 font-semibold tracking-wider">
            {post.title}
          </h1>
          <p className="text-gray-700 text-sm  lg:text-base  lg:leading-8 pr-4 tracking-wide mt-2">
            {post.content}
          </p>
        </div>
      </div>
    </article>
  ));

  return (
    <div>
      <div id="posts" className="bg-gray-100 px-4 xl:px-0 py-12">
        <div className="mx-auto container">
          <h1 className="text-center text-3xl lg:text-5xl tracking-wider text-gray-900">
            Posts
          </h1>
          <div className="mt-12 lg:mt-24 ">
            <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-1 gap-8">
              <div>
                <div className="md:w-1/2 m-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-1 gap-8">
                  {renderedPosts}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostsList;
