import React from 'react';
import Card from './components/Card';
import { Gender, ICat } from './homeInterfaces';

const Home = () => {
  const cat: ICat = {
    id: 1,
    name: 'Sydney',
    ownerNumber: '111 11 111',
    ownerEmail: 'm@m.co',
    image:
      'https://svgnation.com/wp-content/uploads/2021/08/cat-monogram-svg-cut-file.jpg',
    gender: Gender.FEMALE,
    isFavorite: false,
  };
  return (
    <div className='bg-gray-600 min-h-screen py-4 px-10'>
      <Card item={cat}></Card>
    </div>
  );
};

export default Home;
