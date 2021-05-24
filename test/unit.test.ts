import { testApiHandler } from 'next-test-api-route-handler';
// Import the handler under test from the pages/api directory
import endpoint from '../pages/api/user/register';
import type { PageConfig } from 'next';
import { describe, it } from 'mocha';
import { expect } from 'chai';
// Respect the Next.js config object if it's exported
const handler: typeof endpoint & { config?: PageConfig } = endpoint;
describe('Test /user/register', () => {
  it('Works properly', async () => {
    expect.hasAssertions();
    await testApiHandler({
      requestPatcher: (req) => (req.url = '/api/user/register'),
      handler,
      test: async ({ fetch }) => {
        const query = {
          email: 'abcd@abcd.com',
          username: 'abcd',
          role: 'student',
          password: 'abcd',
          firstName: 'anjan',
          lastName: 'bharadwaj',
          aspirationType: 'dive',
          skillInterests: ['programming', 'design'],
        };

        const res = await fetch({
          method: 'POST',
          headers: {
            // Must have the correct content type too
            'content-type': 'application/json',
          },
          body: JSON.stringify({
            query,
          }),
        });

        expect(await res.json()).to.have.property('user');
      },
    });
  });
});
