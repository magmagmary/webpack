import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Error from '@src/pages/error';
import Dashboard from '@src/pages/dashboard/dashboard';
import Test from '@src/pages/dashboard/test/Test';
import EmptyLayput from '@src/components/layout/EmptyLayput';
import Dashboardlayout from '@src/components/layout/Dashboardlayout';
import ProtectedeRoute from './ProtectedeRoute';
import Form from '@src/pages/dashboard/form';
import MainLayout from '@src/components/layout/MainLayout';
import Cats from '@src/pages/cats';
import Home from '@src/pages/home';
import Products from '@src/pages/products';
import Cart from '@src/pages/cart';
import Posts from '@src/pages/posts';
import Post from '@src/pages/posts/Post';
import NewPost from '@src/pages/posts/components/NewPost';

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
        <Route path='/cats' element={<Cats />} />
        <Route path='/products' element={<Products />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/posts'>
          <Route path='new' element={<NewPost />} />
          <Route path='edit/:postId' element={<NewPost />} />
          <Route path=':postId' element={<Post />} />
          <Route index element={<Posts />} />
        </Route>
      </Route>
      <Route element={<EmptyLayput />}>
        <Route path='*' element={<Error />} />
      </Route>
    </Routes>
  );
}

export default Router;
