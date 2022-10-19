import Heart from '@src/components/shared/icons/Heart';
import React, { FC, useState } from 'react';
import { ICat } from '../homeInterfaces';

const Card: FC<{ item: ICat }> = ({ item }) => {
  const [favorite, setFavorite] = useState<boolean>(item.isFavorite);
  return (
    <div className='bg-white rounded-md border-gray-300 overflow-hidden relative w-52'>
      <button
        className='absolute top-3 ltr:right-3 rtl:left-3 bg-slate-300 w-8 aspect-square rounded-full center text-purple-800'
        onClick={() => {
          setFavorite((pre: boolean) => !pre);
        }}
      >
        <Heart
          data-testid={favorite ? 'filled-heart' : 'ouline-heart'}
          width='1.5rem'
          className={`mx-auto stroke-current ${
            favorite ? 'fill-purple-800' : 'fill-slate-300'
          }`}
        />
      </button>
      {item.image && (
        <img
          src={item.image}
          alt={item.name}
          className='h-2/3 object-contain'
          data-testid='main-image'
        />
      )}
      <div className='flex flex-col justify-center items-center gap-3 text-purple-800 p-4'>
        <h2>{item.name}</h2>
        <p>{item.ownerNumber}</p>
        <p>{item.ownerEmail}</p>
      </div>
    </div>
  );
};

export default Card;
