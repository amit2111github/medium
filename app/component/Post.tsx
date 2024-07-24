import React from 'react';

function Post() {
  return (
    <div className="w-full mb-4 rounded-lg bg-gray-50">
      <div className="flex items-center justify-between px-3 py-2">
        <div className="w-full">
          <div className="px-4 py-2 bg-white rounded-b-lg ">
            <textarea
              id="title"
              rows={2}
              className="block w-full px-2 pt-3 text-sm text-gray-800 bg-white outline-none border rounded"
              placeholder="Title..."
              required
            ></textarea>
          </div>
          <div className="px-4 py-2 bg-white rounded-b-lg w-full">
            <label htmlFor="editor" className="sr-only">
              Publish post
            </label>
            <textarea
              id="editor"
              rows={15}
              className="block w-full px-2 pt-3 text-sm text-gray-800 bg-white outline-none border rounded"
              placeholder="Write a post..."
              required
            ></textarea>
          </div>
        </div>
      </div>
      <div className="text-center">
        <button
          type="submit"
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 w-1/4"
        >
          Publish post
        </button>
      </div>
    </div>
  );
}

export default Post;
