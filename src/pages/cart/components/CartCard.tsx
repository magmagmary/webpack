import React, { FC } from 'react';
import Trash from '@src/components/shared/icons/Trash';
import { IProduct } from '@src/pages/products/productInterface';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { cartAction } from '../cartSlice';

const Card: FC<{ item: IProduct }> = ({ item }) => {
  const { t: translate } = useTranslation();
  const dispatch = useDispatch();
  return (
    <article className='p-4 border-b'>
      <img
        src={item.imageUrl}
        className='aspect-square object-contain mb-4 h-36'
      />
      <h3 className='text-black font-semibold  mb-4'>{item.name}</h3>
      <h6 className='text-sm text-gray-800 '>{item.detail}</h6>
      <button
        className='btn btn-primary center gap-2 '
        onClick={() => dispatch(cartAction.removeFromCart(item.id))}
      >
        <Trash fill='white' className='w-4' />
        {translate('products.remove')}
      </button>
    </article>
  );
};

export default Card;
