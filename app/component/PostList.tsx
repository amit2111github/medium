import Link from 'next/link';
import React from 'react';
import { Avatar } from './Avatar';

function PostList() {
  return [1, 2, 3, 4].map((i) => (
    <div className="md:max-w-[60%] border-b mx-auto w-[90%] px-2 py-4" key={i}>
      <Link href="/post/1" className="cursor">
        <div className="flex mb-2">
          <Avatar size={7} />
          <div className="flex flex-col justify-center ml-2">
            <p>Tari Lablala</p>
          </div>
        </div>
        <h1 className="text-2xl font-bold">
          5 amazing new JavaScript features in ES15 (2024)
        </h1>
        <p className="text-gray-500 py-4">
          5 juicy ES15 features with new functionality for cleaner and shorter
          JavaScript code in 2024. 5 juicy ES15 features with new functionality
          for cleaner and shorter JavaScript code in 2024.
        </p>
      </Link>
    </div>
  ));
}

export default PostList;
