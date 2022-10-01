import React, { FC } from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedeRoute: FC<{ children: JSX.Element }> = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem('token');

  return isAuthenticated ? children : <Navigate to='/login' />;
};

export default ProtectedeRoute;
