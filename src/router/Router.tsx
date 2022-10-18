import { Route, Routes } from 'react-router-dom';
import Error from '@src/pages/error';
import Dashboard from '@src/pages/dashboard/dashboard';
import Test from '@src/pages/dashboard/test/Test';
import EmptyLayput from '@src/components/layout/EmptyLayput';
import React from 'react';
import Dashboardlayout from '@src/components/layout/Dashboardlayout';
import ProtectedeRoute from './ProtectedeRoute';
import Form from '@src/pages/dashboard/form';
import Home from '@src/pages/Home';
import MainLayout from '@src/components/layout/MainLayout';

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
        <Route path='/dashboard/form' element={<Form />} />
      </Route>
      <Route element={<MainLayout />}>
        <Route path='/home' element={<Home />} />
      </Route>
      <Route element={<EmptyLayput />}>
        <Route path='*' element={<Error />} />
      </Route>
    </Routes>
  );
}

export default Router;
