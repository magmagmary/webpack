import '@testing-library/jest-dom';
import React from 'react';
import Card from './Card';
import { fireEvent, screen } from '@testing-library/react';
import RenderWithi18n from '../../../components/shared/RenderWithi18n';
import { Gender, ICat } from '../homeInterfaces';

const cat: ICat = {
  id: 1,
  name: 'Sydney',
  ownerNumber: '111 11 111',
  ownerEmail: 'm@m.co',
  image:
    'https://svgnation.com/wp-content/uploads/2021/08/cat-monogram-svg-cut-file.jpg',
  gender: Gender.FEMALE,
  isFavorite: false,
};

describe('Card', () => {
  describe('Not Favorite card', () => {
    beforeEach(() => {
      RenderWithi18n(<Card item={cat} />);
    });
    test('should display name of cat', () => {
      expect(screen.getByText(cat.name)).toBeInTheDocument();
    });

    test('should display owner phone number', () => {
      expect(screen.getByText(cat.ownerNumber)).toBeInTheDocument();
    });

    test('should display owner email address', () => {
      expect(screen.getByText(cat.ownerEmail)).toBeInTheDocument();
    });

    test('should display image of cat', () => {
      const image = screen.getByTestId('main-image');
      expect(image).toBeInTheDocument();
      expect(image).toHaveAttribute('src', cat.image);
    });

    test('should display ouline heart', () => {
      expect(screen.getByTestId('ouline-heart')).toBeInTheDocument();
    });

    test('should toggle the favorite button', () => {
      const btn = screen.getByRole('button');
      expect(screen.getByTestId('ouline-heart')).toBeInTheDocument();
      fireEvent.click(btn);
      expect(screen.getByTestId('filled-heart')).toBeInTheDocument();
    });
  });

  describe('Favorite card', () => {
    beforeEach(() => {
      cat.isFavorite = true;
      RenderWithi18n(<Card item={cat} />);
    });
    test('should display filled heart', () => {
      expect(screen.getByTestId('filled-heart')).toBeInTheDocument();
    });
  });
});
