import { Navigate, Route, Routes } from 'react-router-dom';
import MainLayout from '@src/components/layout/MainLayout';
import Login from '@src/pages/login';
import Error from '@src/pages/error';
import Dashboard from '@src/pages/dashboard';
import Test from '@src/pages/dashboard/Test';
import EmptyLayput from '@src/components/layout/EmptyLayput';
import React, { FC } from 'react';
import Dashboardlayput from '@src/components/layout/Dashboardlayput';

function Index() {
  return (
    <Routes>
      <Route
        element={
          <RequireAuth>
            <Dashboardlayput />
          </RequireAuth>
        }
      >
        <Route path='/' element={<Dashboard />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/dashboard/test' element={<Test />} />
      </Route>
      <Route element={<MainLayout />}>
        <Route path='/login' element={<Login />} />
      </Route>
      <Route element={<EmptyLayput />}>
        <Route path='*' element={<Error />} />
      </Route>
    </Routes>
  );
}

const RequireAuth: FC<{ children: JSX.Element }> = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem('token');
  console.log('isAuthenticated', isAuthenticated);

  return isAuthenticated ? children : <Navigate to='/login' />;
};

export default Index;
