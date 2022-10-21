import React, { FC, useContext } from 'react';
import { CatsContext } from '../Home';
import { ICat } from '../homeInterfaces';
import Card from './Card';

const Cards = () => {
  const { cats } = useContext(CatsContext);
  return (
    <div className='grid gap-8 2xl:gap-16 grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4'>
      {cats && cats.map((cat: ICat) => <Card item={cat} key={cat.id} />)}
    </div>
  );
};

export default Cards;
