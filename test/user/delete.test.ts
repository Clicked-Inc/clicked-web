import { testApiHandler } from 'next-test-api-route-handler';

// Import the handler under test from the pages/api directory
import handler from '../../pages/api/user/[id]';

import 'jest';
import { testConnect, disconnect } from '@Internal/Utils/databaseConnection';

import { expect, assert } from 'chai';
import { runLogin } from './login.test';
import { runRegister } from './register.test';
import { runGet } from './get.test';
beforeAll(async () => {
  await testConnect('userlogin');
});

afterAll(async () => await disconnect());

describe('Test User GET', () => {
  let userid = '';
  let authToken = 'Bearer ';
  beforeAll(async () => {
    authToken += await runLogin('b@b.com', 'abcd');
  });
  beforeEach(async () => {
    userid = await runRegister('c@c.com', 'c', 'abcd');
  });

  test('Works properly when admin', async () => {
    await testApiHandler({
      requestPatcher: (req) => (req.url = '/api/user/'),
      handler: handler,
      params: { id: userid },
      test: async ({ fetch }) => {
        const res = await fetch({
          method: 'DELETE',
          headers: {
            Authorization: authToken,
            'content-type': 'application/json',
          },
        });

        const dataResult = await res.json();
        expect(dataResult).to.have.property('user');
        assert(res.status == 200);

        runGet(userid, authToken, false);
      },
    });
  });
});
