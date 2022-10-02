import React from 'react';
import { useTranslation } from 'react-i18next';
import { Outlet, useNavigate, Link } from 'react-router-dom';
import logo from '@assets/images/logo.png';
import LocaleSwitcher from '@src/components/shared/LocaleSwitcher';

const Dashboardlayput = () => {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className='bg-blue-100   min-h-screen'>
      <nav className='flex items-center gap-5 text-xl py-4 px-10 bg-white shadow-xl w-full child:cursor-pointer sticky top-0'>
        <Link to='/dashboard'>
          <img src={logo} alt='' className='w-8 mr-8' />
        </Link>
        <Link to='/dashboard'>{translate('dashboard.nav.dashboard')}</Link>
        <Link to='/dashboard/test'>{translate('dashboard.nav.test')}</Link>
        <Link to='/dashboard/form'>{translate('dashboard.nav.form')}</Link>
        <p onClick={logout} className='text-red-500'>
          {translate('dashboard.nav.logout')}
        </p>
        <LocaleSwitcher customClass='flex-grow flex items-center justify-end'></LocaleSwitcher>
      </nav>
      <main className='px-10 py-8'>
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboardlayput;
