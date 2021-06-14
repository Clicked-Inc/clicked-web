import { testApiHandler } from 'next-test-api-route-handler';
// Import the handler under test from the pages/api directory
import registerHandler from '../pages/api/user/register';
import loginHandler from '../pages/api/user/login';
import getHandler from '../pages/api/user/[id]/index';

import { expect, assert } from 'chai';
import { IUser } from '@Internal/Models/index';
export const runRegister = async (
  email: string,
  username: string,
  password: string,
  role: string
): Promise<string> => {
  let userid = '';
  await testApiHandler({
    requestPatcher: (req) => (req.url = '/api/user/register'),
    handler: registerHandler,
    test: async ({ fetch }) => {
      const body = {
        email,
        username,
        role,
        password,
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
      userid = dataResult.user._id;
    },
  });
  return userid;
};

export const runLogin = async (
  email: string,
  password: string
): Promise<string> => {
  let token = '';
  await testApiHandler({
    requestPatcher: (req) => (req.url = '/api/user/login'),
    handler: loginHandler,
    test: async ({ fetch }) => {
      const body = {
        email,
        password,
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

export const runGet = async (
  userid: string,
  authToken: string,
  expectedToSuceed: boolean
): Promise<unknown> => {
  let user = {};
  await testApiHandler({
    requestPatcher: (req) => (req.url = '/api/user/[id]'),
    handler: getHandler,
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
      if (expectedToSuceed) {
        assert(res.status == 200);
        expect(dataResult).to.have.property('user');
        user = <IUser>dataResult.user;
      } else {
        assert(res.status == 404);
        expect(dataResult).to.not.have.property('user');
      }
    },
  });
  if (expectedToSuceed) {
    return <IUser>user;
  }
  return;
};
