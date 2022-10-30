import React, {
  createContext,
  useEffect,
  useState,
  Dispatch,
  SetStateAction,
} from 'react';
import Cards from './components/Cards';
import Filter from './components/Filter';
import { ICat, IFilter } from './catsInterfaces';
import { getCats } from './catsService';

interface IContxt {
  cats: ICat[];
  setcats: Dispatch<SetStateAction<ICat[]>>;
  mainCatsList: ICat[];
}

export const CatsContext = createContext<IContxt>({} as IContxt);

const Home = () => {
  const [cats, setcats] = useState<ICat[]>([] as ICat[]);
  const [filteredCats, setFilteredCats] = useState<ICat[]>([] as ICat[]);
  const [filters, setFilters] = useState<IFilter>({
    gender: 'all',
    isFavorite: 'all',
  });

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
    getCats().then((data: ICat[]) => {
      setcats(data);
    });
  }, []);

  useEffect(() => {
    filterCats();
  }, [filters, cats]);

  return (
    <div className='bg-gray-200 h-full grid grid-cols-3 2xl:grid-cols-5 gap-8'>
      <CatsContext.Provider
        value={{ cats: filteredCats, setcats, mainCatsList: cats }}
      >
        <Filter filters={filters} setFilters={setFilters} />
        <div className='col-span-2 2xl:col-span-4'>
          <Cards />
        </div>
      </CatsContext.Provider>
    </div>
  );
};

export default Home;
