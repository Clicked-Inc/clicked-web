import { testApiHandler } from 'next-test-api-route-handler';

// Import the handler under test from the pages/api directory
import handler from '../../pages/api/user/[id]/index';

import 'jest';
import {
  testConnect,
  disconnect,
  clear,
} from '@Internal/Utils/databaseConnection';

import { assert } from 'chai';
import { runLogin, runRegister, runGet } from '../helper';

describe('Test User DELETE', () => {
  let userid = '';
  let authToken = '';
  beforeAll(async () => {
    await testConnect('userdelete');
    await runRegister('b@b.com', 'b', 'abcd', 'admin');
    authToken = 'Bearer ' + (await runLogin('b@b.com', 'abcd'));
  });
  beforeEach(async () => {
    userid = await runRegister('c@c.com', 'c', 'abcd', 'student');
  });

  afterAll(async () => {
    await clear();
    await disconnect();
  });
  test('Works properly when admin', async () => {
    await testApiHandler({
      requestPatcher: (req) => (req.url = '/api/user/[id]'),
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
        assert(res.status == 200);
        runGet(userid, authToken, false);
      },
    });
  });
});
