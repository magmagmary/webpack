import Heart from '@src/components/shared/icons/Heart';
import React, { FC, memo, useContext, useState } from 'react';
import { CatsContext } from '../Cats';
import { ICat } from '../catsInterfaces';

const Card: FC<{
  item: ICat;
}> = ({ item }) => {
  const [favorite, setFavorite] = useState<boolean>(item.favoured);
  const { mainCatsList, setcats } = useContext(CatsContext);

  const updateMainCatsList = (id: number, state: boolean) => {
    const _cats: ICat[] = [...mainCatsList];
    const index = _cats.findIndex((cat) => cat.id === id);
    _cats[index].favoured = state;
    setcats(_cats);
  };

  const toggleFavoriteState = (id: number) => {
    updateMainCatsList(id, !favorite);
    setFavorite((pre: boolean) => !pre);
  };

  return (
    <article className='bg-white rounded-md border-gray-300 overflow-hidden relative hover:shadow-2xl h-80'>
      <button
        className='absolute top-3 ltr:right-3 rtl:left-3 bg-slate-300 w-8 aspect-square rounded-full center text-purple-800'
        onClick={() => toggleFavoriteState(item.id)}
      >
        <Heart
          data-testid={favorite ? 'filled-heart' : 'ouline-heart'}
          width='1.5rem'
          className={`mx-auto stroke-current  ${
            favorite ? 'fill-purple-800' : 'fill-slate-300'
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

export default memo(Card);