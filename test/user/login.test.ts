import { testApiHandler } from 'next-test-api-route-handler';
// Import the handler under test from the pages/api directory
import handler from '../../pages/api/user/login';
import 'jest';
import {
  testConnect,
  disconnect,
  clear,
} from '@Internal/Utils/databaseConnection';
import { expect, assert } from 'chai';
import { runRegister } from '../helper';

describe('Test /user/login with email', () => {
  beforeAll(async () => {
    await testConnect('userlogin');
    await runRegister('a@a.com', 'a', 'abcd', 'student');
  });
  afterAll(async () => {
    await clear();
    await disconnect();
  });

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
