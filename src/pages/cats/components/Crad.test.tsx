import '@testing-library/jest-dom';
import React from 'react';
import Card from './Card';
import { fireEvent, screen } from '@testing-library/react';
import RenderWithi18n from '../../../components/shared/RenderWithi18n';
import { CatsContext } from '../Cats';
import { cats } from '@src/mocks/cats';

describe('Card', () => {
  describe('Not Favorite card', () => {
    beforeEach(() => {
      RenderWithi18n(
        <CatsContext.Provider value={{ cats, mainCatsList: cats }}>
          <Card item={cats[0]} />
        </CatsContext.Provider>,
      );
    });
    test('should display name of cat', () => {
      expect(screen.getByText(cats[0].name)).toBeInTheDocument();
    });

    test('should display owner phone number', () => {
      expect(screen.getByText(cats[0].phone)).toBeInTheDocument();
    });

    test('should display owner email address', () => {
      expect(screen.getByText(cats[0].email)).toBeInTheDocument();
    });

    test('should display image of cat', () => {
      const image = screen.getByTestId('main-image');
      expect(image).toBeInTheDocument();
      expect(image).toHaveAttribute('src', cats[0].image.url);
    });

    test('should display ouline heart', () => {
      expect(screen.getByTestId('ouline-heart')).toBeInTheDocument();
    });

    test('should toggle the favorite button', () => {
      expect(screen.getByTestId('ouline-heart')).toBeInTheDocument();
      fireEvent.click(screen.getByRole('button'));
      expect(screen.getByTestId('filled-heart')).toBeInTheDocument();
    });
  });

  describe('Favorite card', () => {
    test('should display filled heart', () => {
      cats[0].favoured = true;
      RenderWithi18n(
        <CatsContext.Provider value={{ cats, mainCatsList: cats }}>
          <Card item={cats[0]} />
        </CatsContext.Provider>,
      );
      expect(screen.getByTestId('filled-heart')).toBeInTheDocument();
    });
  });
});
