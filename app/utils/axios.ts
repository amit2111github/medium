import axios from 'axios';
import { redirect } from 'next/navigation';

const baseURL = process.env.BACKEND_API || 'cannot read',
  isServer = typeof window === 'undefined';

console.log(baseURL, 'base url');
console.log(process.env.PORT, 'port');
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
