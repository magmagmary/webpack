import React, { FC } from 'react';
import { ICat } from '../homeInterfaces';
import Card from './Card';

const Cards: FC<{
  cats: ICat[];
  updateCats: (a: number, B: boolean) => void;
}> = ({ updateCats, cats }) => {
  return (
    <div className='grid gap-8 2xl:gap-16 grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4'>
      {cats.map((cat: ICat) => (
        <Card item={cat} updateCats={updateCats} key={cat.id} />
      ))}
    </div>
  );
};

export default Cards;
