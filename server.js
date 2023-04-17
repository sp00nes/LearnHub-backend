'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./model/user');

mongoose.connect(process.env.DB_URL);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Mongoose is connected');
});

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3002;

app.post('/addUser', addUser);
async function addUser(req, res, next){
  try {
    let createUser = await User.create(req.body);
    res.status(200).send(createUser);
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

app.listen(PORT, () => console.log(`listening on ${PORT}`));