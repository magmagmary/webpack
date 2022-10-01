import { Route, Routes } from 'react-router-dom';
import Login from '@src/pages/login';
import Error from '@src/pages/error';
import Dashboard from '@src/pages/dashboard/dashboard';
import Test from '@src/pages/dashboard/test/Test';
import EmptyLayput from '@src/components/layout/EmptyLayput';
import React from 'react';
import Dashboardlayout from '@src/components/layout/Dashboardlayout';
import ProtectedeRoute from './ProtectedeRoute';

function Router() {
  return (
    <Routes>
      <Route
        element={
          <ProtectedeRoute>
            <Dashboardlayout />
          </ProtectedeRoute>
        }
      >
        <Route path='/' element={<Dashboard />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/dashboard/test' element={<Test />} />
      </Route>
      <Route element={<EmptyLayput />}>
        <Route path='/login' element={<Login />} />
      </Route>
      <Route element={<EmptyLayput />}>
        <Route path='*' element={<Error />} />
      </Route>
    </Routes>
  );
}

export default Router;
