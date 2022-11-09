import React, { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import {postAdded} from './postsSlice'

export default function AddPostForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const dispatch = useDispatch()

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);

  const onSavePostClicked = (e) => {
    e.preventDefault()

    if (title && content) {
      dispatch(postAdded({id : nanoid() ,title, content}));
    // console.log(title,content)
      setTitle("");
      setContent("");
    }
  };

  const canSave = Boolean(title) && Boolean(content) //&& Boolean(userId);

  return (
    <>
      <div>
        <div className="mt-5 md:col-span-2 md:mt-0 m-auto justify-center">
          <div>
            <div id="posts" className="bg-gray-100 px-4 xl:px-0 py-12">
              <h1 className="text-center text-3xl lg:text-5xl tracking-wider text-gray-900">
                Add a New Post
              </h1>
            </div>
          </div>
          <form>
            <div className="shadow sm:overflow-hidden sm:rounded-md">
              <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                <label
                  htmlFor="postTitle"
                  className="block text-sm font-medium text-gray-700"
                >
                  Post Title:
                </label>
                <input
                  type="text"
                  id="postTitle"
                  name="postTitle"
                  value={title}
                  onChange={onTitleChanged}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
                <label
                  htmlFor="postContent"
                  className="block text-sm font-medium text-gray-700"
                >
                  Content:
                </label>
                <textarea
                  id="postContent"
                  name="postContent"
                  value={content}
                  onChange={onContentChanged}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div className="bg-gray-50 px-4 py-3 text-center sm:px-6">
                <button
                  type="submit"
                  onClick={onSavePostClicked}
                  disabled={!canSave}
                  className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Save Post
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

