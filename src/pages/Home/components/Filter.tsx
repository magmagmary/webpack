import React, { ChangeEvent, FC, memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Gender, IFilter } from '../homeInterfaces';

const Filter: FC<{
  filters: IFilter;
  setFilters: (a: IFilter) => void;
}> = ({ filters, setFilters }) => {
  const favoriteOprion = ['all', 'favorite', 'not_favorite'];
  const genderOptions = ['all', ...Object.values(Gender)];
  const { t: translate } = useTranslation();

  return (
    <div className='flex flex-col gap-5'>
      <div className='form-group'>
        <label className='form-label' htmlFor='favorite'>
          {translate('filter.favorite')}
        </label>
        <select
          name='favorite'
          defaultValue={filters.isFavorite}
          onChange={(e) => {
            setFilters({
              ...filters,
              isFavorite: e.target.value,
            });
          }}
          className='form-control '
          id='favorite'
          data-testid='favorite'
        >
          {favoriteOprion.map((item: string) => (
            <option value={item} key={item}>
              {translate(`filter.${item}`)}
            </option>
          ))}
        </select>
      </div>
      <div className='form-group'>
        <label className='form-label' htmlFor='gender'>
          {translate('filter.gender')}
        </label>
        <select
          name='gender'
          defaultValue={filters.gender}
          onChange={(e) => {
            setFilters({
              ...filters,
              gender: e.target.value,
            });
          }}
          className='form-control '
          id='gender'
          data-testid='gender'
        >
          {genderOptions.map((item: string) => (
            <option value={item} key={item}>
              {translate(`filter.${item}`)}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default memo(Filter);
