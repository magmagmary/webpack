import React from 'react';
import { IProduct } from '../products/productInterface';
import Card from './components/CartCard';
import { useTranslation } from 'react-i18next';
import Basket from '@src/components/shared/icons/Basket';
import { Link } from 'react-router-dom';
import { cartproductsList } from './cartSelectors';
import { useSelector, useDispatch } from 'react-redux';
import { cartAction } from './cartSlice';

function Cart() {
  const { t: translate } = useTranslation();
  const basketItems: IProduct[] = useSelector(cartproductsList);
  const dispatch = useDispatch();

  return (
    <div className=' bg-gray-300 lg:grid-cols-4 2xl:grid-cols-5 center'>
      {basketItems.length > 0 ? (
        <div className='w-5/6 mx-auto bg-white p-8'>
          <h1 className='text-3xl font-bold border-b py-4 '>
            {translate('products.cart')} ({basketItems.length})
          </h1>
          {basketItems.map((item: IProduct) => (
            <Card item={item} key={item.id} />
          ))}
          <div className='text-center'>
            <button
              className='mx-auto btn btn-primary'
              onClick={() => dispatch(cartAction.clearAllitems())}
            >
              {translate('products.checkout')}
            </button>
          </div>
        </div>
      ) : (
        <div className='text-center py-8 bg-white rounded-lg w-1/2'>
          <Basket fill='#007AFF' className='w-36 mx-auto' />
          <h2 className='font-semibold mt-3 mb-10 text-xl'>
            {translate('products.empty')}
          </h2>
          <Link to='/products' className='btn btn-primary py-3'>
            {translate('products.products')}
          </Link>
        </div>
      )}
    </div>
  );
}

export default Cart;
