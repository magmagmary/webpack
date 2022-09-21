import React from 'react';
import { Outlet, useNavigate, Link } from 'react-router-dom';

const Dashboardlayput = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div>
      <h1>Dashboard layput </h1>
      <nav>
        <Link to='/dashboard'>Dashboard</Link>
        <Link to='/dashboard/test'>Test</Link>
        <p onClick={logout}>Logout</p>
      </nav>
      <Outlet />
    </div>
  );
};

export default Dashboardlayput;
