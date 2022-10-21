/* eslint-disable @typescript-eslint/no-empty-function */
import '@testing-library/jest-dom';
import React from 'react';
import Cards from './Cards';
import { screen } from '@testing-library/react';
import RenderWithi18n from '../../../components/shared/RenderWithi18n';
import { cats } from '@src/mocks/cats';

describe('Cards', () => {
  beforeEach(() => {
    RenderWithi18n(<Cards cats={cats} updateCats={() => {}} />);
  });
  test('should contain five card in component', () => {
    expect(screen.getAllByRole('article').length).toBe(5);
  });
});
