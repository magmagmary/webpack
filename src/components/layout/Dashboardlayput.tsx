import React from 'react';
import { Outlet, useNavigate, Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
const Dashboardlayput = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className='bg-blue-100   min-h-screen'>
      <nav className='flex items-center gap-5 text-xl py-2 px-10 bg-white shadow-xl w-full'>
        <Link to='/dashboard'>
          <img src={logo} alt='' className='w-8 mr-8' />
        </Link>
        <Link to='/dashboard'>Dashboard</Link>
        <Link to='/dashboard/test'>Test</Link>
        <p onClick={logout} className='flex-grow text-right'>
          Logout
        </p>
      </nav>

      <main className='px-10 py-8'>
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboardlayput;
