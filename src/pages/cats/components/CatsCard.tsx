import React, { FC } from 'react';
import Heart from '@src/components/shared/icons/Heart';
import { ICat } from '../catsInterfaces';
import { toggleFavoriteCat } from '../catsSlice';
import { useAppDispatch } from '@src/hooks/redux';

const Card: FC<{
  item: ICat;
}> = ({ item }) => {
  const dispatch = useAppDispatch();

  return (
    <article className='bg-white rounded-md border-gray-300 overflow-hidden relative hover:shadow-2xl h-80'>
      <button
        className='absolute top-3 ltr:right-3 rtl:left-3 bg-slate-300 w-8 aspect-square rounded-full center text-purple-800'
        onClick={() => dispatch(toggleFavoriteCat(item.id))}
      >
        <Heart
          data-testid={item.favoured ? 'filled-heart' : 'ouline-heart'}
          width='1.5rem'
          className={`mx-auto stroke-current  ${
            item.favoured ? 'fill-purple-800' : 'fill-slate-300'
          }`}
        />
      </button>
      {item.image && (
        <img
          src={item.image.url}
          alt={item.image.alt}
          className='h-2/3 w-full object-cover mx-auto'
          data-testid='main-image'
        />
      )}
      <div className='flex flex-col justify-center items-center gap-1 text-purple-800 py-2 '>
        <h2 className='truncate'>{item.name}</h2>
        <p>{item.phone}</p>
        <p>{item.email}</p>
      </div>
    </article>
  );
};

export default Card;
