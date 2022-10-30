import React from 'react';
import { products } from '@src/mocks/products';
import { IProduct } from '../products/productInterface';
import Card from './components/CartCard';
import { useTranslation } from 'react-i18next';
import Basket from '@src/components/shared/icons/Basket';

function Cart() {
  const { t: translate } = useTranslation();

  return (
    <div className=' bg-gray-300 lg:grid-cols-4 2xl:grid-cols-5 h-full center'>
      {products.length === 0 ? (
        <div className='w-5/6 mx-auto bg-white p-8 h-full'>
          <h1 className='text-3xl font-bold border-b py-4 '>
            {translate('products.cart')} (4)
          </h1>
          {products.map((item: IProduct) => (
            <Card item={item} key={item.id} />
          ))}
          <div className='text-center'>
            <button className='mx-auto btn btn-primary'>
              {translate('products.checkout')}
            </button>
          </div>
        </div>
      ) : (
        <div className='text-center py-8 bg-white rounded-lg w-1/2'>
          <Basket fill='red' className='w-36 mx-auto' />
          <h2 className='font-bold mt-3 mb-5 text-2xl'>
            {translate('products.empty')}
          </h2>
          <button className='btn btn-primary'>
            {translate('products.products')}
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
