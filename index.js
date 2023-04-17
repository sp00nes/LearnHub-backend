'use strict';

const mongoose = require('mongoose');
require('dotenv').config();
const app = require('./src/server');
const port = process.env.PORT || 3002;

mongoose.connect(process.env.DB_URL)
  .then(() => app.start(port));
