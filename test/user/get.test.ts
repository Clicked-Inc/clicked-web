import { testApiHandler } from 'next-test-api-route-handler';
// Import the handler under test from the pages/api directory
import handler from '../../pages/api/user/login';
import 'jest';
import { testConnect, disconnect } from '@Internal/Utils/databaseConnection';

import { expect, assert } from 'chai';
import { runLogin } from './login.test';
beforeAll(async () => {
  await testConnect('userlogin');
});

afterAll(async () => await disconnect());
const callback1 = async (authToken): Promise<void> => {
  test('Works properly', async () => {
    const testUserId = '60ac8789635233fdb4bcdd7d';
    await testApiHandler({
      requestPatcher: (req) => (req.url = '/api/user/' + testUserId),
      handler,
      test: async ({ fetch }) => {
        const res = await fetch({
          method: 'GET',
          headers: {
            Authorization: authToken,
            'content-type': 'application/json',
          },
        });
        const dataResult = await res.json();
        expect(dataResult).to.have.property('user');
        assert(res.status == 200);
      },
    });
  });
};

const callback2 = async (authToken): Promise<void> => {
  test('Works properly', async () => {
    await testApiHandler({
      requestPatcher: (req) => (req.url = '/api/user/get'),
      handler,
      test: async ({ fetch }) => {
        const res = await fetch({
          method: 'GET',
          headers: {
            Authorization: authToken,
            'content-type': 'application/json',
          },
        });
        const dataResult = await res.json();
        expect(dataResult).to.have.property('user');
        assert(res.status == 200);
      },
    });
  });
};
describe('Test User GET (when not logged in)', () => {
  runLogin(callback1);
});
describe('Test User GET (when logged in)', () => {
  runLogin(callback2);
});
