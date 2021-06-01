import { testApiHandler } from 'next-test-api-route-handler';
// Import the handler under test from the pages/api directory
import handler from '../../pages/api/user/register';
import {
  testConnect,
  disconnect,
  clear,
} from '@Internal/Utils/databaseConnection';

import { expect, assert } from 'chai';
describe('Test /user/register', () => {
  beforeAll(async () => {
    await testConnect('userregister');
  });

  afterEach(async () => await clear());
  afterAll(async () => await disconnect());

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

  it('Works properly without optional fields', async () => {
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
          skillInterests: [],
          careerDevelopmentType: 'Select career development stage',
          bio: 'hey!',
        };
        const bodyJson = JSON.stringify(body);
        const res = await fetch({
          method: 'POST',
          headers: {
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

  it('Fails without field: email', async () => {
    await testApiHandler({
      requestPatcher: (req) => (req.url = '/api/user/register'),
      handler,
      test: async ({ fetch }) => {
        const body = {
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
            'content-type': 'application/json',
          },
          body: bodyJson,
        });
        assert(res.status == 400);
      },
    });
  });

  it('Fails without field: username', async () => {
    await testApiHandler({
      requestPatcher: (req) => (req.url = '/api/user/register'),
      handler,
      test: async ({ fetch }) => {
        const body = {
          email: 'a@a.com',
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
            'content-type': 'application/json',
          },
          body: bodyJson,
        });
        assert(res.status == 400);
      },
    });
  });

  it('Fails with invalid field: role', async () => {
    await testApiHandler({
      requestPatcher: (req) => (req.url = '/api/user/register'),
      handler,
      test: async ({ fetch }) => {
        const body = {
          email: 'a@a.com',
          username: 'a',
          role: 'Invalid',
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
            'content-type': 'application/json',
          },
          body: bodyJson,
        });
        assert(res.status == 400);
      },
    });
  });

  it('Fails with invalid field: careerDevelopmentType', async () => {
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
          careerDevelopmentType: 'Invalid',
          bio: 'hey!',
          profilePic: 'asdasds',
        };
        const bodyJson = JSON.stringify(body);
        const res = await fetch({
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: bodyJson,
        });
        assert(res.status == 400);
      },
    });
  });

  it('Fails when username is taken', async () => {
    await testApiHandler({
      requestPatcher: (req) => (req.url = '/api/user/register'),
      handler,
      test: async ({ fetch }) => {
        let body = {
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
        let bodyJson = JSON.stringify(body);
        await fetch({
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: bodyJson,
        });
        body.email = 'b@b.com';
        bodyJson = JSON.stringify(body);
        const res = await fetch({
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: bodyJson,
        });
        assert(res.status == 409);
      },
    });
  });

  it('Fails when email is taken', async () => {
    await testApiHandler({
      requestPatcher: (req) => (req.url = '/api/user/register'),
      handler,
      test: async ({ fetch }) => {
        let body = {
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
        let bodyJson = JSON.stringify(body);
        await fetch({
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: bodyJson,
        });
        body.username = 'b';
        bodyJson = JSON.stringify(body);
        const res = await fetch({
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: bodyJson,
        });
        assert(res.status == 409);
      },
    });
  });
});
