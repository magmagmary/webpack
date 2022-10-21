import React, { useEffect, useState } from 'react';
import Cards from './components/Cards';
import Filter from './components/Filter';
import { ICat, IFilter } from './homeInterfaces';
import { getCats } from './homeService';

const Home = () => {
  const [cats, setcats] = useState<ICat[]>([] as ICat[]);
  const [filteredCats, setFilteredCats] = useState<ICat[]>([] as ICat[]);
  const [filters, setFilters] = useState<IFilter>({
    gender: 'all',
    isFavorite: 'all',
  });

  const filterCats = () => {
    const clonedCats = [...cats];
    let _cats = clonedCats;
    if (filters.gender !== 'all') {
      _cats = clonedCats.filter((cat) => cat.gender === filters.gender);
    }
    if (filters.isFavorite !== 'all') {
      const isFavoured = filters.isFavorite === 'favorite';
      _cats = clonedCats.filter((cat) => cat.favoured === isFavoured);
    }
    setFilteredCats(_cats);
  };

  console.log('cats', cats.length);

  useEffect(() => {
    getCats().then((data: ICat[]) => {
      setcats(data);
    });
  }, []);

  useEffect(() => {
    filterCats();
  }, [filters, cats]);

  const updateCats = (id: number, state: boolean) => {
    const _cats: ICat[] = [...cats];
    const index = _cats.findIndex((cat) => cat.id === id);
    _cats[index].favoured = state;
    setcats(_cats);
  };

  return (
    <div className='bg-gray-200 min-h-screen py-4 px-10 grid grid-cols-3 2xl:grid-cols-5 gap-8'>
      <Filter filters={filters} setFilters={setFilters} />
      <div className='col-span-2 2xl:col-span-4'>
        <Cards cats={filteredCats} updateCats={updateCats} />
      </div>
    </div>
  );
};

export default Home;
