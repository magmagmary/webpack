import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();

  const forceLogin = () => {
    localStorage.setItem('token', 'test');
    navigate('/');
  };

  return (
    <div className='text-center flex flex-col gap-10'>
      <h1 className='text-5xl font-medium text-blue-800'>
        {translate('login.title')}
      </h1>
      <button onClick={forceLogin} className='btn-primary w-1/2 mx-auto '>
        {translate('login.btn')}
      </button>
    </div>
  );
};

export default Login;
