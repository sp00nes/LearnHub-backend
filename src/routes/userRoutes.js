'use strict';

const express = require('express');
const userRouter = express.Router();
const UserSchema = require('../model/user');

//to get send id in params
userRouter.get('/user/:id', async (req, res, next) => {
  const user = await UserSchema.findById(req.params.id);
  res.status(200).json(user);
});

//To post send user object in body
userRouter.post('/user', async (req, res, next) => {
  try {
    const userRecord = new UserSchema(req.body);
    await userRecord.save();

    res.status(201).json(userRecord);
  } catch (error) {
    next(error.message);
  }
});

//To update send user ID into param and new object into body
userRouter.put('/user/:id', async (req, res, next) => {
  const user = await UserSchema.findByIdAndUpdate(req.params.id, req.body, {new: true});
  res.status(200).send(user);
});

//To delete send user ID into param
userRouter.delete('/user/:id', async (req, res, next) => {
  await UserSchema.findByIdAndDelete(req.params.id);
  res.status(200).send('User Deleted');
});

module.exports = userRouter;
