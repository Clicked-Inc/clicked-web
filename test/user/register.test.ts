import { testApiHandler } from 'next-test-api-route-handler';
// Import the handler under test from the pages/api directory
import handler from '../../pages/api/user/register';
import {
  testConnect,
  disconnect,
  clear,
} from '@Internal/Utils/databaseConnection';

import { expect, assert } from 'chai';
beforeAll(async () => {
  await testConnect('userregister');
});

afterEach(async () => await clear());
afterAll(async () => await disconnect());

describe('Test /user/register', () => {
  it('Works properly', async () => {
    await testApiHandler({
      requestPatcher: (req) => (req.url = '/api/user/register'),
      handler,
      test: async ({ fetch }) => {
        const body = {
          email: 'a@a.com',
          username: 'a',
          role: 'student',
          password: 'abcd',
          firstName: 'anjan',
          lastName: 'bharadwaj',
          aspirationType: 'dive',
          skillInterests: ['programming', 'design'],
          careerDevelopmentType: 'Select career development stage',
          bio: 'hey!',
          profilePic: 'asdasds',
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
        expect(dataResult).to.have.property('user');
        assert(res.status == 200);
      },
    });
  });
});
