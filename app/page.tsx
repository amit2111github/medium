import { redirect } from 'next/navigation';
import PostList from './component/PostList';
import { cookies } from 'next/headers';
export default function Home() {
  const cookieStore = cookies();
  const token = cookieStore.get('token')?.value;
  console.log(token);
  if (token) redirect('/post');
  else redirect('/signin');
}
