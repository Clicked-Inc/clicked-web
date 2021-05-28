import { testApiHandler } from 'next-test-api-route-handler';

// Import the handler under test from the pages/api directory
import handler1 from '../../pages/api/user/[id]';
import handler2 from '../../pages/api/user/get';

import 'jest';
import { testConnect, disconnect } from '@Internal/Utils/databaseConnection';

import { expect, assert } from 'chai';
import { runLogin } from './login.test';
import { IUser, User } from '@Internal/Models/index';
beforeAll(async () => {
  await testConnect('userlogin');
});

afterAll(async () => await disconnect());

describe('Test User GET', () => {
  let authToken = 'Bearer ';
  beforeAll(async () => {
    authToken += await runLogin('a@a.com', 'abcd');
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
    const testUserId = '60ac8789635233fdb4bcdd7d';
    await testApiHandler({
      requestPatcher: (req) => (req.url = '/api/user/'),
      handler: handler1,
      params: { id: testUserId },
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

export const runGet = async (
  userid: string,
  authToken: string,
  expectedToSuceed: boolean
): Promise<unknown> => {
  let user = {};
  await testApiHandler({
    requestPatcher: (req) => (req.url = '/api/user/'),
    handler: handler1,
    params: { id: userid },
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
      if (expectedToSuceed) {
        user = <IUser>dataResult.user;
      }
    },
  });
  if (expectedToSuceed) {
    return <IUser>user;
  }
  return;
};
