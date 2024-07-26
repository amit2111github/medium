import Link from 'next/link';
import React from 'react';
import { Avatar } from './Avatar';

function PostList({ post }: { post: any }) {
  // console.log(post);
  return post.map((cur: any, i: number) => (
    <div className="md:max-w-[60%] border-b mx-auto w-[90%] px-2 py-4" key={i}>
      <Link href={`/post/${cur.id}`} className="cursor">
        <div className="flex mb-2">
          <Avatar size={7} />
          <div className="flex flex-col justify-center ml-2">
            <p>{cur.authorname}</p>
          </div>
        </div>
        <h1 className="text-2xl font-bold">{cur.title}</h1>
        <p className="text-gray-500 py-4">{cur.content}</p>
      </Link>
    </div>
  ));
}

export default PostList;
