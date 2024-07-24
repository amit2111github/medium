import Link from 'next/link';
import React from 'react';

function Signup() {
  return (
    <div className="border flex justify-center flex-col pt-[100px] text-center shadow-2xl mt-1 rounded border-none">
      <p className="font-serif text-3xl">Create New Account</p>
      <div className="mb-6 w-2/4 mx-auto">
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
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="mb-6 mt-4">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left"
          >
            Email address
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="john.doe@company.com"
            required
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
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="•••••••••"
            required
          />
        </div>
        <div className="mt-6">
          <button
            type="button"
            className="w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2"
          >
            Signup
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
