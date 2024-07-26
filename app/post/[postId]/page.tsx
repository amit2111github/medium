import FullPost from '@/app/component/FullPost';
import Navbar from '@/app/component/Navbar';
import api from '@/app/utils/axios';
import { useParams } from 'next/navigation';
import React from 'react';
import { cookies } from 'next/headers';

const fetchPost = async (token: string, id: number) => {
  try {
    const data = await api.get('/api/post/' + id, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (err) {
    // console.log('failed to find post');
  }
};

async function page({ params }: { params: { postId: number } }) {
  const cookieStore = cookies();
  const token: string = cookieStore.get('token')?.value || '';
  const post = await fetchPost(token, params.postId);
  const data: any = await api.get('/api/user', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  // console.log('crrent usert', data);
  return (
    <>
      <Navbar />
      <div className="py-10">
        <FullPost userId={data.id} post={post} />
      </div>
    </>
  );
}

export default page;
