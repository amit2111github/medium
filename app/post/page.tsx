import React from 'react';
import PostList from '../component/PostList';
import Navbar from '../component/Navbar';
import api from '../utils/axios';
import { cookies } from 'next/headers';

const fetchPost = async (token: string) => {
  try {
    const data = await api.get('/api/post', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (err) {
    // console.log('failed to find post');
  }
};
async function page() {
  const cookieStore = cookies();
  const token: string = cookieStore.get('token')?.value || '';
  const post = await fetchPost(token);

  return (
    <div>
      <Navbar />
      <PostList post={post} />
    </div>
  );
}

export default page;
