import { testApiHandler } from 'next-test-api-route-handler';

// Import the handler under test from the pages/api directory
import handler1 from '../../pages/api/user/[id]/index';
import handler2 from '../../pages/api/user/get';

import 'jest';
import {
  testConnect,
  disconnect,
  clear,
} from '@Internal/Utils/databaseConnection';

import { expect, assert } from 'chai';
import { IUser } from '@Internal/Models/index';
import { runRegister, runLogin } from '../helper';
let userId = '';

describe('Test User GET', () => {
  let authToken = '';
  beforeAll(async () => {
    await testConnect('userget');
    userId = await runRegister('a@a.com', 'a', 'abcd', 'student');
    authToken = 'Bearer ' + (await runLogin('a@a.com', 'abcd'));
  });

  afterAll(async () => {
    await clear();
    await disconnect();
  });
  test('Works properly when logged in', async () => {
    await testApiHandler({
      requestPatcher: (req) => (req.url = '/api/user/get'),
      handler: handler2,
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

  test('Works properly when not logged in', async () => {
    await testApiHandler({
      requestPatcher: (req) => (req.url = '/api/user/'),
      handler: handler1,
      params: { id: userId },
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
});
