import axios from 'axios';
import { redirect } from 'next/navigation';

const baseURL =
    process.env.NEXT_PUBLIC_BACKEND_API || 'https://medium-ba74.vercel.app',
  isServer = typeof window === 'undefined';

console.log(baseURL, 'base url');
console.log(process.env.NEXT_PUBLIC_PORT, 'port');
const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

api.interceptors.response.use(
  function (response) {
    return response?.data;
  },
  function (error) {
    console.log(error.response, 'dd');
    if (error.response?.status === 401) {
      redirect('/signin');
    }
    return error.response?.data;
  }
);

export default api;
