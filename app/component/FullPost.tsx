'use client';
import React from 'react';
import { Avatar } from './Avatar';
import Link from 'next/link';

function FullPost({ post, userId }: { post: any; userId: string }) {
  // console.log(post);
  return (
    <div className="md:max-w-[60%] mx-auto w-[90%] px-2">
      <h1 className="text-4xl font-extrabold">{post.title}</h1>
      <div className="flex mt-8">
        <div className="flex flex-col justify-center">
          <Avatar size={7} />
        </div>
        <div className="flex flex-col justify-center ml-2">
          <p className="text-gray-500">
            {post.name}
            {post.authorid == userId && (
              <span
                onClick={(e) =>
                  (window.location.href = `/post/edit/${post.id}`)
                }
                className="bg-green-800 text-green-100 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full ml-4 cursor-pointer"
              >
                Edit
              </span>
            )}
          </p>
          <p className="text-gray-500">
            Published in jun 2, 2004{' '}
            {Math.max(2, Math.floor(post.content.length / 100))} min read
          </p>
        </div>
      </div>
      <p className="mt-8 text-xl text-justify text-gray-800">{post.content}</p>
    </div>
  );
}

export default FullPost;
