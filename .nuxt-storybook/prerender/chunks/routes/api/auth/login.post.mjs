import { defineEventHandler, readBody, setResponseStatus } from 'file:///Users/khaledoghli/Work/BID-New-Nuxt/node_modules/.pnpm/h3@1.11.1/node_modules/h3/dist/index.mjs';

const DUMMY_USER = {
  id: 1,
  name: 'John Doe',
  email: 'admin@example.com',
  password: 'admin',
};
const login_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  if (body.email !== DUMMY_USER.email || body.password !== DUMMY_USER.password) {
    setResponseStatus(event, 401, 'Unauthenticated');
    return {
      error: 'Unauthenticated',
    };
  }
  return {
    token: `dummy-token-${DUMMY_USER.id}`,
    user: DUMMY_USER,
  };
});

export { login_post as default };
// # sourceMappingURL=login.post.mjs.map
