import { useAppDispatch } from '@src/hooks/redux';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Card from './Components/ProductCard';
import { IProduct } from './productInterface';
import { getAllProducts } from './productSelector';
import { fetchAllProducts } from './productSlice';

const Products = () => {
  const products = useSelector(getAllProducts);
  const dispath = useAppDispatch();

  useEffect(() => {
    dispath(fetchAllProducts());
  }, []);

  return (
    <div className='grid gap-8 grid-cols-2  lg:grid-cols-4 2xl:grid-cols-5 '>
      {products.map((item: IProduct) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Products;
