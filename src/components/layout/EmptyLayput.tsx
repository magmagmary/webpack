import React from 'react';
import { Outlet } from 'react-router';

const EmptyLayput = () => {
  return (
    <div className='bg-slate-400 bg-opacity-20 flex justify-center items-center min-h-screen'>
      <Outlet />
    </div>
  );
};

export default EmptyLayput;
