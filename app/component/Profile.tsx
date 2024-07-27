'use client';
import React, { useEffect, useState } from 'react';
import { Avatar } from './Avatar';
import Link from 'next/link';
import Logout from '@/public/logout.png';
import api from '../utils/axios';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

function Profile({ name, email }: { name: string; email: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const handleSignout = async () => {
    const data: any = await api.post('/api/user/logout');
    if (data.msg) {
      router.push('/signin');
      return;
    }
  };
  return (
    <>
      <div
        className="relative inline-block text-left group"
        onClick={(e) => setIsOpen((o) => !o)}
      >
        <div>
          <div className="inline-flex justify-center w-full text-sm font-medium text-gray-700 bg-white rounded-full border border-gray-300 shadow-sm hover:bg-gray-50 focus:outline-none">
            <Avatar size={7} />
          </div>
        </div>

        {isOpen && (
          <div className="absolute right-0 z-10 mt-2 origin-top-right rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              <p
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
                title="name"
              >
                {name}
              </p>
              <p
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
                title="email"
              >
                {email}
              </p>
              <p
                onClick={handleSignout}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex"
                role="menuitem"
                title="signout"
              >
                <div className="flex">
                  <p className="mr-2">Signout</p>
                  <Image
                    src={Logout}
                    alt="logout icon"
                    width={10}
                    height={10}
                  />
                </div>
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Profile;
