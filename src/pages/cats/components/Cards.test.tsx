/* eslint-disable @typescript-eslint/no-empty-function */
import '@testing-library/jest-dom';
import React from 'react';
import Cards from './Cards';
import { screen } from '@testing-library/react';
import RenderWithi18n from '../../../components/shared/RenderWithi18n';
import { CatsContext } from '../Cats';
import { cats } from '@src/mocks/cats';

describe('Cards', () => {
  beforeEach(() => {
    RenderWithi18n(
      <CatsContext.Provider
        value={{ cats, setcats: () => {}, mainCatsList: cats }}
      >
        <Cards />
      </CatsContext.Provider>,
    );
  });
  test('should contain five card in component', () => {
    expect(screen.getAllByRole('article').length).toBe(5);
  });
});
