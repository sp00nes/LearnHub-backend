'use strict';

const superGoose = require('@code-fellows/supergoose');
const app = require('../src/server.js');

const client = superGoose(app.app);

describe('The server', () => {
  it('properly sends a 404 on an unknown route', async () => {
    const response = await client.get('/nothing');
    expect(response.status).toBe(404);
  });
  
  it('properly sends a 500 when an error occurs', async () => {
    const data = {};
    const response = await client.post('/user').send(data);
    expect(response.status).toBe(500);
  });
});
