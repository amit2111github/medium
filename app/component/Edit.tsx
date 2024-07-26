'use client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import api from '../utils/axios';
import Error from './Error';
function Edit({ post }: { post: any }) {
  const router = useRouter();
  const [state, setState] = useState({
    title: post.title,
    content: post.content,
  });
  const [status, setStatus] = useState({ error: false, loading: false });
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setState((state) => {
      return { ...state, [event.target.name]: event.target.value };
    });
  };
  const handleSubmit = async () => {
    // console.log(state);
    setStatus({ error: false, loading: true });
    const data: any = await api.put(`/api/post/${post.id}`, state);
    setStatus({ error: false, loading: false });
    // console.log(data);
    if (data.error) {
      setStatus((status) => {
        return { ...status, error: data.error };
      });
      return;
    }
    router.push('/post/' + post.id);
  };
  return (
    <div className="w-full mb-4 rounded-lg bg-gray-50">
      <div className="flex items-center justify-between px-3 py-2">
        <div className="w-full">
          <div className="px-4 py-2 bg-white rounded-b-lg ">
            <Error error={status.error} />
            <textarea
              id="title"
              rows={2}
              name="title"
              onChange={handleChange}
              className="block w-full mt-2 px-2 pt-3 text-sm text-gray-800 bg-white outline-none border rounded"
              placeholder="Title..."
              required
              value={state.title}
            ></textarea>
          </div>
          <div className="px-4 py-2 bg-white rounded-b-lg w-full">
            <label htmlFor="editor" className="sr-only">
              Publish post
            </label>
            <textarea
              id="editor"
              rows={15}
              name="content"
              value={state.content}
              className="block w-full px-2 pt-3 text-sm text-gray-800 bg-white outline-none border rounded"
              placeholder="Write a post..."
              required
              onChange={handleChange}
            ></textarea>
          </div>
        </div>
      </div>
      <div className="text-center">
        <button
          onClick={handleSubmit}
          type="submit"
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 w-1/4"
        >
          {status.loading ? 'Updating...' : 'Publish post'}
        </button>
      </div>
    </div>
  );
}

export default Edit;
