'use strict';

//Stuff idk the name of
const express = require('express');
const cors = require('cors');
//Error handlers
const handle500 = require('./error-handlers/500.js');
const handle404 = require('./error-handlers/404.js');
//Routes
const userRoutes = require('./routes/userRoutes');
//Our Express app
const app = express();

//stuff to use before everything app level something idk
app.use(cors());
app.use(express.json());
//actually use routes
app.use(userRoutes);
//base route
app.use('/', (req, res) => {
  res.status(200).send('Server Online');
});
//error handlers
app.use(handle404);
app.use(handle500);

//Export to Index
module.exports = {
  app: app, start: (PORT) => {
    app.listen(PORT, () => {
      console.log('Server is running on port ', PORT);
    });
  },
};
