'use client';
import React from 'react';

const Register: React.FC = () => {
  return (
    <div>
      <div className="md:p-[75px]">
        <h1 className="text-4xl font-bold mb-9">Register</h1>
        <label htmlFor="email">Email Address</label> <br />
        <input
          type="email"
          name="email"
          id="email"
          className="px-4 border w-[423px] h-[75px] rounded-xl text-2xl outline-none my-9"
        />
        <p className="text-xl mb-4 w-[453px]">
          A link to set a new password will be sent to your email address.
        </p>
        <p className="text-xl mb-9 w-[453px] text-justify">
          Your personal data will be used to support your experience throughout
          this website, to manage access to your account, and for other purposes
          described in our <span className="font-bold">privacy policy.</span>
        </p>
        <input
          type="button"
          value="Register"
          className="w-[215px] h-[64px] border mr-9 rounded-2xl text-xl font-normal mt-24"
        />
      </div>
    </div>
  );
};

export default Register;
