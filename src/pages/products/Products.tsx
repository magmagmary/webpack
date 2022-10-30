import { products } from '@src/mocks/products';
import React from 'react';
import Card from './Components/ProductCard';
import { IProduct } from './productInterface';

const Products = () => {
  return (
    <div className='grid gap-8 grid-cols-2 bg-gray-300 lg:grid-cols-4 2xl:grid-cols-5'>
      {products.map((item: IProduct) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Products;
