'use client';
import { useAuth } from '@/context/authContext';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import Register from '@/components/Login/Register';
import Login from '@/components/Login/Login';
import Header from '@/components/Header/Header';
import Hero from '@/components/HeroProps/HeroProps';
import PaymentPlan from '@/components/PaymentPlan/PaymentPlan';
import Footer from '@/components/Footer/Footer';
const LoginForm = () => {
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

  return (
    <>
      <Header />
      <Hero pageTitle="Login" />
      {!isAuthenticated && (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-8 md:flex-row md:justify-center md:items-center md:space-x-28 my-6 md:my-16"
        >
          <Login />
          <Register />
        </form>
      )}
      <PaymentPlan />
      <Footer />
    </>
  );
};

export default LoginForm;
