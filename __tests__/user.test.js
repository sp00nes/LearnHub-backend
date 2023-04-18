'use strict';

const superGoose = require('@code-fellows/supergoose');
const app = require('../src/server.js');

const client = superGoose(app.app);

describe('The userRouter', () => {

  async function createRecord() {
    const data = {
      _id: 'testerId1234',
      userName: 'tester',
      password: 'pass1234',
      email: 'test@gmail.com',
      courses: [],
      activeCourses: [],
    };
    const response = await client.post('/user').send(data);
    return response.body;
  }

  it('can create a user', async () => {
    const record = await createRecord();
    expect(record.userName).toBe('tester');
    expect(record.password).toBe('pass1234');
  });

  it('can get a user', async () => {
    const record = await client.get('/user/testerId1234');
    expect(record.body.userName).toBe('tester');
    expect(record.body.password).toBe('pass1234');
  });

  it('can update a user', async () => {
    const record = await client.get('/user/testerId1234');
    record.body.userName = 'Tested';
    const updated = await client.put('/user/testerId1234').send(record.body);
    expect(updated.body.userName).toBe('Tested');
    expect(updated.body.password).toBe('pass1234');
  });

  it('can delete a user', async () => {
    const record = await client.delete('/user/testerId1234');
    expect(record.text).toBe('User Deleted');
  });
});
