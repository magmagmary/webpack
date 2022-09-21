import React from 'react';
import { Outlet } from 'react-router';

const EmptyLayput = () => {
  return (
    <div>
      <h1>Empty Layout</h1>
      <Outlet />
    </div>
  );
};

export default EmptyLayput;
