'use strict';

const express = require('express');
const cors = require('cors');

const User = require('./model/user');

const app = express();

app.use(cors());
app.use(express.json());

app.post('/addUser', addUser);
async function addUser(req, res, next){
  try {
    const userRecord = new User(req.body);
    await userRecord.save();
    res.status(200).send(userRecord);
  } 
  catch (error) {
    console.log(error.message);
    next(error);
  }
}

app.use('/', (req, res) => {
  res.status(200).send('hello world...ONLINE');
});

// ERROR HANDLING
app.get('*', (req, res) => {
  res.status(404).send('Not available.');
});

app.use((error, req, res, next) => {
  res.status(500).send(error.message);
});

module.exports = {
  app: app, start: (PORT) => {
    app.listen(PORT, () => {
      console.log('Server is running on port ', PORT);
    });
  },
};
