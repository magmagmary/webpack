import React, { createContext, useEffect, useState } from 'react';
import Cards from './components/CatsCards';
import Filter from './components/Filter';
import { ICat, IFilter } from './catsInterfaces';
import { fetchAllcats } from './catsSlice';
import { AppDispatch } from '@src/store';
import { useDispatch, useSelector } from 'react-redux';
import { getCatsList } from './catsSelector';

interface IContxt {
  cats: ICat[];
}

export const CatsContext = createContext<IContxt>({} as IContxt);

const Home = () => {
  const [filteredCats, setFilteredCats] = useState<ICat[]>([] as ICat[]);
  const [filters, setFilters] = useState<IFilter>({
    gender: 'all',
    isFavorite: 'all',
  });
  const cats: ICat[] = useSelector(getCatsList);
  const dispatch = useDispatch<AppDispatch>();

  const filterCats = () => {
    let _cats = [...cats];
    if (filters.gender !== 'all') {
      _cats = _cats.filter((cat) => cat.gender === filters.gender);
    }
    if (filters.isFavorite !== 'all') {
      const isFavoured = filters.isFavorite === 'favorite';
      _cats = _cats.filter((cat) => cat.favoured === isFavoured);
    }
    setFilteredCats(_cats);
  };

  useEffect(() => {
    dispatch(fetchAllcats());
  }, []);

  useEffect(() => {
    filterCats();
  }, [filters, cats]);

  return (
    <div className=' h-full grid grid-cols-3 2xl:grid-cols-5 gap-8'>
      <CatsContext.Provider value={{ cats: filteredCats }}>
        <Filter filters={filters} setFilters={setFilters} />
        <div className='col-span-2 2xl:col-span-4'>
          <Cards />
        </div>
      </CatsContext.Provider>
    </div>
  );
};

export default Home;
