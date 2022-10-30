import { cats } from '@src/mocks/cats';
import { getCats } from './catsService';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

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

describe('Service Tests', () => {
  test('should return five cats from "getCats" service', async () => {
    expect(await (await getCats()).length).toBe(5);
  });
});
