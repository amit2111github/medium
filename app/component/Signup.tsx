'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import api from '../utils/axios';
import { useRouter } from 'next/navigation';
import Error from './Error';

function Signup() {
  const router = useRouter();
  const [state, setState] = useState({ name: '', password: '', email: '' });
  const [status, setStatus] = useState({ error: false, loading: false });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState((state) => {
      return { ...state, [event.target.name]: event.target.value };
    });
  };
  const handleSubmit = async () => {
    setStatus({ error: false, loading: true });
    const data: any = await api.post('/api/user', state);
    setStatus({ error: false, loading: false });
    // console.log(data);
    if (data.error) {
      setStatus((status) => {
        return { ...status, error: data.error };
      });
      return;
    }
    router.push('/signin');
  };
  return (
    <div className="border flex justify-center flex-col pt-[100px] text-center shadow-2xl mt-1 rounded border-none">
      <p className="font-serif text-3xl">Create New Account</p>
      <div className="mb-6 w-2/4 mx-auto">
        <Error error={status.error} />
        <div className="mb-6 mt-4">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 text-left"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Enter your name"
            required
            disabled={status.loading}
          />
        </div>
        <div className="mb-6 mt-4">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 text-left"
          >
            Email address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="john.doe@company.com"
            required
            disabled={status.loading}
          />
        </div>

        <div className="mb-6 mt-4">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 text-left"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="•••••••••"
            required
            disabled={status.loading}
          />
        </div>
        <div className="mt-6">
          <button
            onClick={handleSubmit}
            type="button"
            disabled={status.loading}
            className="w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2"
          >
            {status.loading ? 'Creating Account...' : 'Signup'}
          </button>
        </div>
        <div className="text-slate-500 mt-6">
          <Link href="/signin" className="cursor">
            <p>Already have an Account?</p>
          </Link>
          <p className="text-sm pt-4">
            This site is protected by reCAPTCHA Enterprise and the Google
            Privacy Policy and Terms of Service apply.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
