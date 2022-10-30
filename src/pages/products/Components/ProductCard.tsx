import React, { FC, memo, useMemo } from 'react';
import { cartproductsList } from '@src/pages/cart/cartSelectors';
import { cartAction } from '@src/pages/cart/cartSlice';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { IProduct } from '../productInterface';

const Card: FC<{ item: IProduct }> = ({ item }) => {
  const { t: translate } = useTranslation();
  const dispatch = useDispatch();
  const basketItems: IProduct[] = useSelector(cartproductsList);

  const isItemInBasket = useMemo<boolean>(() => {
    return basketItems.findIndex((bs: IProduct) => bs.id === item.id) !== -1;
  }, [basketItems, item]);

  return (
    <article className='bg-white rounded-md p-8 text-center hover:shadow hover:bg-opacity-60'>
      <img
        src={item.imageUrl}
        className='aspect-square object-contain mx-auto mb-8 h-56'
      />
      <h3 className='text-black font-semibold text-center mb-8'>{item.name}</h3>
      <h6 className='text-black font-semibold text-center'>${item.price}</h6>
      {!isItemInBasket ? (
        <button
          className='btn btn-primary mx-auto'
          onClick={() => dispatch(cartAction.addToCart(item))}
        >
          {translate('products.add')}
        </button>
      ) : (
        <button
          className='btn btn-danger mx-auto'
          onClick={() => dispatch(cartAction.removeFromCart(item.id))}
        >
          {translate('products.remove')}
        </button>
      )}
    </article>
  );
};

export default memo(Card);
