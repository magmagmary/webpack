import React, { useMemo } from 'react';
import { Outlet } from 'react-router';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '@assets/images/logo.png';
import { useTranslation } from 'react-i18next';
import LocaleSwitcher from '../shared/LocaleSwitcher';
import Basket from '../shared/icons/Basket';
import { useSelector } from 'react-redux';
import { cartproductsCount } from '@src/pages/cart/cartSelectors';

function MainLayout() {
  const navigate = useNavigate();
  const { t: translate } = useTranslation();
  const location = useLocation();
  const basketItemsCount = useSelector(cartproductsCount);

  const forceLogin = () => {
    localStorage.setItem('token', 'test');
    navigate('/');
  };

  const shouldDisplayCart = useMemo<boolean>(() => {
    return !!location.pathname.match('/products');
  }, [location.pathname]);

  return (
    <div>
      <nav className='flex items-center gap-5 text-xl py-4 px-10 bg-white shadow-xl w-full child:cursor-pointer sticky top-0 z-50 h-16'>
        <div className='flex-grow flex items-center gap-5'>
          <Link to='/dashboard'>
            <img src={logo} alt='' className='w-8 mr-8' />
          </Link>
          <Link to='/cats' className='center'>
            {translate('nav.cats')}
          </Link>
          <Link to='/products' className='center'>
            {translate('nav.products')}
          </Link>
        </div>
        {shouldDisplayCart && (
          <Link to='/cart' className='flex  text-primary relative'>
            <span className='absolute -top-1 ltr:-right-2 rtl:-left-2 text-[10px] rounded-full p-2 w-4 h-4 center bg-primary text-white'>
              {basketItemsCount}
            </span>
            <Basket fill='#007AFF' className='h-6 w-auto' />
          </Link>
        )}

        <p
          onClick={forceLogin}
          className='text-primary ltr:border-r rtl:border-l border-gray-300 px-5'
        >
          {translate('login.btn')}
        </p>
        <LocaleSwitcher customClass='flex items-center justify-end' />
      </nav>
      <div className='child:px-10 child:py-4 h-[calc(100vh-4rem)]'>
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;
