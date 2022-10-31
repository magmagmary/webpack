import React, { createContext, useEffect, useState } from 'react';
import Cards from './components/Cards';
import Filter from './components/Filter';
import { ICat, IFilter } from './catsInterfaces';
import { Trans } from 'react-i18next';
import { fetchAllcats } from './catsSlice';
import store, { AppDispatch } from '@src/store';
import axiosClient from '@src/plugins/axios';
import { useDispatch, useSelector } from 'react-redux';
import { getCatsList } from './catsSelector';

interface IContxt {
  cats: ICat[];
  mainCatsList: ICat[];
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
    axiosClient.setupAxiosInterceptors();
    dispatch(fetchAllcats());
  }, []);

  useEffect(() => {
    filterCats();
  }, [filters, cats]);

  return (
    <div className='bg-gray-200 h-full grid grid-cols-3 2xl:grid-cols-5 gap-8'>
      <CatsContext.Provider value={{ cats: filteredCats, mainCatsList: cats }}>
        <Filter filters={filters} setFilters={setFilters} />
        <div className='col-span-2 2xl:col-span-4'>
          <h2 className='bg-red-200 p-2 mb-5'>
            <Trans i18nKey='cats.title' />
          </h2>
          <Cards />
        </div>
      </CatsContext.Provider>
    </div>
  );
};

export default Home;
