'use strict';

const superGoose = require('@code-fellows/supergoose');
const app = require('../src/server.js');

const client = superGoose(app.app);

describe('The courseRouter', () => {

  async function createRecord() {
    const data = {
      _id: 'testerId1234',
      courseName: 'test course',
      owner_id: 'test_id',
      description: 'test the testing tester',
      modules: [
        {
          name: 'test',
          idx: '0',
          lessonText: 'How do you test?',
          lessonImg: 'str',
          questions: [
            {
              questionTxt: 'test?',
              answer: 'test',
              answerArr: [
                'test',
                'tester',
                'test test',
                'no',
              ],
            },
          ],
        },
      ],
    };
    const response = await client.post('/course').send(data);
    return response.body;
  }

  it('can create a course', async () => {
    const record = await createRecord();
    expect(record.courseName).toBe('test course');
    expect(record.modules[0].name).toBe('test');
  });

  it('can get a course', async () => {
    const record = await client.get('/course/testerId1234');
    expect(record.body.courseName).toBe('test course');
    expect(record.body.modules[0].name).toBe('test');
  });

  it('can get all courses', async () => {
    const record = await client.get('/course');
    expect(record.body[0]).not.toBe(null);
  });

  it('can update a user', async () => {
    const record = await client.get('/course/testerId1234');
    record.body.courseName = 'Tested';
    const updated = await client.put('/course/testerId1234').send(record.body);
    expect(updated.body.courseName).toBe('Tested');
    expect(record.body.modules[0].name).toBe('test');
  });

  it('can delete a user', async () => {
    const record = await client.delete('/course/testerId1234');
    expect(record.text).toBe('course Deleted');
  });
});
