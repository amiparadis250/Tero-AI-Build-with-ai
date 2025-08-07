'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import images from '@/utils/constants/image';

const RegisterPage = () => {
  interface RegisterFormProps {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    
  };

  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen">
      {/* Left Section */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="mb-8">
            <div className="flex items-center gap-2">
              <Image
                src={images.logo} 
                alt="TERO AI"
                width={120}
                height={40}
                priority // Ensure the logo is loaded first
              />
            </div>
          </div>

          {/* Register Container */}
          <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
            <h1 className="text-2xl font-semibold text-gray-800 mb-2">
              Create your Account
            </h1>
            <p className="text-gray-600 mb-6">
              Join us to start your agricultural journey
            </p>
            {/* <div className="grid grid-cols-2 gap-4 mb-6">
              <button className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"
                  />
                </svg>
                <span className="text-sm font-medium text-gray-700">Google</span>
              </button>

              <button className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="#1877F2"
                    d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                  />
                </svg>
                <span className="text-sm font-medium text-gray-700">Facebook</span>
              </button>
            </div> */}

            {/* Register Form */}
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                {/* First Name Input */}
                <div>
                  <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
                    <svg
                      className="w-5 h-5 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    <input
                      type="text"
                      placeholder="First Name"
                      className="w-full pl-3 text-gray-800 placeholder-gray-500 border-none focus:ring-0 outline-none"
                    />
                  </div>
                </div>

                {/* Last Name Input */}
                <div>
                  <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
                    <svg
                      className="w-5 h-5 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="w-full pl-3 text-gray-800 placeholder-gray-500 border-none focus:ring-0 outline-none"
                    />
                  </div>
                </div>

                {/* Email Input */}
                <div>
                  <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
                    <svg
                      className="w-5 h-5 text-blue-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full pl-3 text-gray-800 placeholder-gray-500 border-none focus:ring-0 outline-none"
                    />
                  </div>
                </div>

                {/* Password Input */}
                <div>
                  <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
                    <svg
                      className="w-5 h-5 text-yellow-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                    <input
                      type="password"
                      placeholder="Password"
                      className="w-full pl-3 text-gray-800 placeholder-gray-500 border-none focus:ring-0 outline-none"
                    />
                  </div>
                </div>

                {/* Register Button */}
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium"
                >
                  Create Account
                </button>
              </div>
            </form>

            {/* Login Link */}
            <div className="mt-6 text-center">
              <span className="text-gray-600">Already have an account? </span>
              <Link href="/login" className="text-blue-600 hover:underline">
                Log In
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="hidden md:flex md:w-1/2 bg-blue-600 p-8 flex-col justify-center items-center">
        <div className="max-w-lg">
          {/* Image Container */}
          <div className="rounded-lg overflow-hidden mb-8">
            <Image
              src={images.plants}
              alt="Agriculture"
              width={600}
              height={400}
              priority 
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-6 h-6 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <h2 className="text-white text-2xl font-semibold mb-4">
              Welcome to the Future of Agriculture
            </h2>
            <p className="text-white/90">
              Join us to revolutionize agriculture with smarter, AI-driven solutions—let's
              build a sustainable and food-secure future together.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;