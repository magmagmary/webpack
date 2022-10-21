import React from 'react';
import { Outlet } from 'react-router';
import { Link, useNavigate } from 'react-router-dom';
import logo from '@assets/images/logo.png';
import { useTranslation } from 'react-i18next';
import LocaleSwitcher from '../shared/LocaleSwitcher';

function MainLayout() {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();

  const forceLogin = () => {
    localStorage.setItem('token', 'test');
    navigate('/');
  };
  return (
    <div>
      <nav className='flex items-center gap-5 text-xl py-4 px-10 bg-white shadow-xl w-full child:cursor-pointer sticky top-0 z-50'>
        <Link to='/dashboard' className='flex-grow'>
          <img src={logo} alt='' className='w-8 mr-8' />
        </Link>
        <p
          onClick={forceLogin}
          className='text-primary ltr:border-r rtl:border-l border-gray-300 px-5'
        >
          {translate('login.btn')}
        </p>
        <LocaleSwitcher customClass='flex items-center justify-end' />
      </nav>
      <Outlet />
    </div>
  );
}

export default MainLayout;
