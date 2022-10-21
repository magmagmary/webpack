import '@testing-library/jest-dom';
import React from 'react';
import Home from './Home';
import { fireEvent, screen, within } from '@testing-library/react';
import RenderWithi18n from '@src/components/shared/RenderWithi18n';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { cats } from '@src/mocks/cats';

const WriteInSelectElement = (selector: string, value: string): HTMLElement => {
  const element = screen.getByRole('combobox', { name: selector });
  fireEvent.change(element, {
    target: {
      value,
    },
  });
  return element;
};

const uiAccountEndpoint = `${process.env.IDP_BASE_URL}`;
const url = `${uiAccountEndpoint}cats`;

const handlers = [
  rest.get(url, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(cats), ctx.delay(150));
  }),
];

const server = setupServer(...handlers);
// Enable API mocking before tests.
beforeAll(() => server.listen());

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers());

// Disable API mocking after the tests are done.
afterAll(() => server.close());

describe('Home', () => {
  beforeEach(() => {
    RenderWithi18n(<Home />);
  });

  test('should contain five card in component', async () => {
    expect(await (await screen.findAllByRole('article')).length).toBe(5);
  });

  test('should filter to male and female cats after selecting the combobox', async () => {
    const catsElemets = await screen.findAllByRole('article');
    expect(catsElemets.length).toBe(5);
    WriteInSelectElement('Gender', 'female');
    expect(screen.getAllByRole('article').length).toBe(3);
    WriteInSelectElement('Gender', 'male');
    expect(screen.getAllByRole('article').length).toBe(2);
  });

  test('should filter to favorites and no-favoritess cats after selecting the combobox', async () => {
    const catsElemets = await screen.findAllByRole('article');
    expect(catsElemets.length).toBe(5);
    fireEvent.click(within(catsElemets[0]).getByRole('button'));
    fireEvent.click(within(catsElemets[3]).getByRole('button'));
    fireEvent.click(within(catsElemets[4]).getByRole('button'));
    WriteInSelectElement('Favorite', 'favorite');
    expect(screen.getAllByRole('article')).toStrictEqual([
      catsElemets[0],
      catsElemets[3],
      catsElemets[4],
    ]);
    WriteInSelectElement('Favorite', 'not_favorite');
    expect(screen.getAllByRole('article')).toStrictEqual([
      catsElemets[1],
      catsElemets[2],
    ]);
  });

  test('should filter to favorites female cats after selecting the combobox', async () => {
    const catsElemets = await screen.findAllByRole('article');
    fireEvent.click(within(catsElemets[0]).getByRole('button'));
    fireEvent.click(within(catsElemets[1]).getByRole('button'));
    fireEvent.click(within(catsElemets[2]).getByRole('button'));
    WriteInSelectElement('Gender', 'female');
    WriteInSelectElement('Favorite', 'favorite');
    expect(screen.getAllByRole('article')).toStrictEqual([
      catsElemets[0],
      catsElemets[2],
    ]);
  });
});
