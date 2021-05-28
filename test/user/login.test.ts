import { testApiHandler } from 'next-test-api-route-handler';
// Import the handler under test from the pages/api directory
import handler from '../../pages/api/user/login';
import 'jest';
import { testConnect, disconnect } from '@Internal/Utils/databaseConnection';
import { expect, assert } from 'chai';
beforeAll(async () => {
  await testConnect('userlogin');
});

afterAll(async () => await disconnect());

describe('Test /user/login with email', () => {
  it('Works properly with email', async () => {
    await testApiHandler({
      requestPatcher: (req) => (req.url = '/api/user/login'),
      handler,
      test: async ({ fetch }) => {
        const body = {
          email: 'a@a.com',
          password: 'abcd',
        };
        const bodyJson = JSON.stringify(body);
        const res = await fetch({
          method: 'POST',
          headers: {
            // Must have the correct content type too
            'content-type': 'application/json',
          },
          body: bodyJson,
        });
        const dataResult = await res.json();
        expect(dataResult).to.have.property('authToken');
        assert(res.status == 200);
      },
    });
  });

  it('Works properly with username', async () => {
    await testApiHandler({
      requestPatcher: (req) => (req.url = '/api/user/login'),
      handler,
      test: async ({ fetch }) => {
        const body = {
          username: 'a',
          password: 'abcd',
        };
        const bodyJson = JSON.stringify(body);
        const res = await fetch({
          method: 'POST',
          headers: {
            // Must have the correct content type too
            'content-type': 'application/json',
          },
          body: bodyJson,
        });
        const dataResult = await res.json();
        expect(dataResult).to.have.property('authToken');
        assert(res.status == 200);
      },
    });
  });
});

export const runLogin = async (): Promise<string> => {
  let token = '';
  await testApiHandler({
    requestPatcher: (req) => (req.url = '/api/user/login'),
    handler,
    test: async ({ fetch }) => {
      const body = {
        username: 'a',
        password: 'abcd',
      };
      const bodyJson = JSON.stringify(body);
      const res = await fetch({
        method: 'POST',
        headers: {
          // Must have the correct content type too
          'content-type': 'application/json',
        },
        body: bodyJson,
      });
      const dataResult = await res.json();
      expect(dataResult).to.have.property('authToken');
      assert(res.status == 200);
      token = dataResult.authToken;
    },
  });
  return token;
};
