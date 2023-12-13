'use client';
import { useAuth } from '@/context/authContext';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const { authenticate, isAuthenticated } = useAuth();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (await authenticate({ email, password })) {
      router.push('/');
    }
  };

  useEffect(() => {
    console.log('isAuthenticated', isAuthenticated);
    if (isAuthenticated) {
      router.push('/');
    } else {
      router.push('/login');
    }
  }, [isAuthenticated, router]);
  {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <div className="md:p-[75px]">
            <h1 className="text-4xl font-bold mb-9">Log In</h1>
            <label htmlFor="username" className="text-base">
              Username or Email Address
            </label>{' '}
            <br />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="email"
              required
              className="px-4 border w-[423px] h-[75px] rounded-xl text-2xl outline-none my-9"
            />
            <br />
            <label htmlFor="password" className="">
              Password
            </label>
            <br />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="password"
              required
              className="px-4 border w-[423px] h-[75px] rounded-xl text-2xl outline-none my-9"
            />
            <br />
            <div className="my-9 flex items-center gap-2">
              <input
                type="checkbox"
                className="w-[30px] h-[27px] border border-color-[#9f9f9f]"
              />
              <p className="text-base">Remember Me</p>
            </div>
            <div className="flex items-center justify-center gap-[31px] w-[100%]">
              <button
                onClick={handleSubmit}
                className="w-[215px] h-[64px] border mr-9 rounded-2xl text-xl font-normal"
              >
                Log in
              </button>
              <input
                type="button"
                value="Lost Your Password?"
                className="text-base"
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
};
export default Login;
