'use server';
import Link from 'next/link';
import React from 'react';
import { Avatar } from './Avatar';
import Pagination from './Pagination';

function PostList({ post, page }: { post: any; page: number }) {
  return (
    <>
      <div className="min-h-96">
        {post.map((cur: any, i: number) => (
          <div
            className="md:max-w-[60%] border-b mx-auto w-[90%] px-2 py-4"
            key={i}
          >
            <Link href={`/post/${cur.id}`} className="cursor">
              <div className="flex mb-2">
                <Avatar size={7} />
                <div className="flex flex-col justify-center ml-2">
                  <p>{cur.authorname}</p>
                </div>
              </div>
              <h1 className="text-2xl font-bold">{cur.title}</h1>
              <p className="text-gray-500 py-4">{cur.content.trim()}...</p>
            </Link>
          </div>
        ))}
      </div>

      <div className="flex justify-center py-4">
        <Pagination currentPage={page} morePostAvailable={post.length == 10} />
      </div>
    </>
  );
}

export default PostList;
