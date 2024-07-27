import React from 'react';
import PostList from '../component/PostList';
import Navbar from '../component/Navbar';
import api from '../utils/axios';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const fetchPost = async (token: string, page: number) => {
  try {
    const data = await api.get('/api/post?page=' + page, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (err) {
    // console.log('failed to find post');
  }
};
async function page({ searchParams }: { searchParams: { page: number } }) {
  const page = searchParams.page || 1;
  if (page <= 0) redirect('/post');
  console.log(searchParams, 'my page', page);
  const cookieStore = cookies();
  const token: string = cookieStore.get('token')?.value || '';
  const post = await fetchPost(token, page);
  return (
    <div>
      <Navbar />
      <PostList post={post} page={page} />
    </div>
  );
}

export default page;
