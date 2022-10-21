/* eslint-disable @typescript-eslint/no-empty-function */
import '@testing-library/jest-dom';
import React from 'react';
import Card from './Card';
import { fireEvent, screen } from '@testing-library/react';
import RenderWithi18n from '../../../components/shared/RenderWithi18n';
import { Gender, ICat } from '../homeInterfaces';

const cat: ICat = {
  id: 1,
  name: 'Sydney',
  phone: '111-111-1111',
  email: 'jamal@hotmail.com',
  image: {
    url: 'https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    alt: 'beautiful cat',
  },
  favoured: false,
  color: 'grey',
  gender: Gender.FEMALE,
};

describe('Card', () => {
  describe('Not Favorite card', () => {
    beforeEach(() => {
      RenderWithi18n(<Card item={cat} updateCats={() => {}} />);
    });
    test('should display name of cat', () => {
      expect(screen.getByText(cat.name)).toBeInTheDocument();
    });

    test('should display owner phone number', () => {
      expect(screen.getByText(cat.phone)).toBeInTheDocument();
    });

    test('should display owner email address', () => {
      expect(screen.getByText(cat.email)).toBeInTheDocument();
    });

    test('should display image of cat', () => {
      const image = screen.getByTestId('main-image');
      expect(image).toBeInTheDocument();
      expect(image).toHaveAttribute('src', cat.image.url);
    });

    test('should display ouline heart', () => {
      expect(screen.getByTestId('ouline-heart')).toBeInTheDocument();
    });
  });

  describe('Toggle Favorite Card', () => {
    test('should toggle the favorite button', () => {
      const updateCats = jest.fn();
      RenderWithi18n(<Card item={cat} updateCats={updateCats} />);
      expect(screen.getByTestId('ouline-heart')).toBeInTheDocument();
      const btn = screen.getByRole('button');
      fireEvent.click(btn);
      expect(updateCats).toBeCalled();
      expect(screen.getByTestId('filled-heart')).toBeInTheDocument();
    });
  });

  describe('Favorite card', () => {
    test('should display filled heart', () => {
      cat.favoured = true;
      RenderWithi18n(<Card item={cat} updateCats={() => {}} />);
      expect(screen.getByTestId('filled-heart')).toBeInTheDocument();
    });
  });
});
