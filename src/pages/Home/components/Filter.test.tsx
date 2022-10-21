import '@testing-library/jest-dom';
import React from 'react';
import Filter from './Filter';
import { fireEvent, screen } from '@testing-library/react';
import RenderWithi18n from '../../../components/shared/RenderWithi18n';
import { IFilter } from '../homeInterfaces';

const WriteInSelectElement = (selector: string, value: string): HTMLElement => {
  const element = screen.getByRole('combobox', { name: selector });
  fireEvent.change(element, {
    target: {
      value,
    },
  });
  return element;
};

describe('Filters', () => {
  beforeEach(() => {
    const filter: IFilter = {
      isFavorite: 'all',
      gender: 'all',
    };
    const setFilters = jest.fn();
    RenderWithi18n(<Filter filters={filter} setFilters={setFilters} />);
  });

  test('should display the correct number of options', () => {
    expect(screen.getAllByRole('option').length).toBe(6);
  });

  test("shold have 'all' value at start", () => {
    expect(screen.getByRole('combobox', { name: 'Favorite' })).toHaveValue(
      'all',
    );
    expect(screen.getByRole('combobox', { name: 'Gender' })).toHaveValue('all');
  });

  test('shold chnage the Favorite select from "all" to "favorite" ', () => {
    const element = WriteInSelectElement('Favorite', 'favorite');
    expect(element).toHaveValue('favorite');
  });

  test('shold chnage the Gender select from "all" to "female" ', () => {
    const element = WriteInSelectElement('Gender', 'female');
    expect(element).toHaveValue('female');
  });
});
