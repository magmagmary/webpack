import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const forceLogin = () => {
    localStorage.setItem('token', 'test');
    navigate('/');
  };

  return (
    <div className='text-center flex flex-col gap-10'>
      <h1 className='text-5xl font-medium text-blue-800'>Login Page</h1>
      <button
        onClick={forceLogin}
        className='bg-blue-600 text-white py-2 rounded-md w-1/2 mx-auto '
      >
        Login
      </button>
    </div>
  );
};

export default Login;
