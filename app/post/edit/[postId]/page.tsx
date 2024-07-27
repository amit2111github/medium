import Navbar from '@/app/component/Navbar';
import api from '@/app/utils/axios';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

import React from 'react';
import Edit from '@/app/component/Edit';

async function page({ params }: { params: { postId: string } }) {
  const postId = params.postId;
  const cookieStore = cookies();
  const token: string = cookieStore.get('token')?.value || '';

  const post: any = await api.get(`/api/post/${postId}`, {
    headers: {
      Authorization: `Beares ${token}`,
    },
  });
  console.log(post, 'for edit');
  const data: any = await api.get('api/user', {
    headers: {
      Authorization: `Beares ${token}`,
    },
  });
  if (post.authorid != data.id) {
    window.location.href = '/post/' + post.id;
  }
  return (
    <div>
      <Navbar />
      <Edit post={post} />
    </div>
  );
}

export default page;
