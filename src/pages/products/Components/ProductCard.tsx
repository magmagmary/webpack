import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { IProduct } from '../productInterface';

const Card: FC<{ item: IProduct }> = ({ item }) => {
  const { t: translate } = useTranslation();
  return (
    <article className='bg-white rounded-md p-8 text-center hover:shadow hover:bg-opacity-60'>
      <img
        src={item.imageUrl}
        className='aspect-square object-contain mx-auto mb-8 h-56'
      />
      <h3 className='text-black font-semibold text-center mb-8'>{item.name}</h3>
      <h6 className='text-black font-semibold text-center'>${item.price}</h6>
      <button className='btn btn-primary mx-auto'>
        {translate('products.add')}
      </button>
    </article>
  );
};

export default Card;
