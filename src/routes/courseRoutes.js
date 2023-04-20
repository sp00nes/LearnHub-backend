'use strict';

const express = require('express');
const courseRouter = express.Router();
const courseSchema = require('../model/course');

//gets all courses
courseRouter.get('/course', async(req, res, next) => {
  const courses = await courseSchema.find();
  res.status(200).json(courses);
});
//to get send id in params
courseRouter.get('/course/:id', async (req, res, next) => {
  const course = await courseSchema.findById(req.params.id);
  res.status(200).json(course);
});

//To post send course object in body
courseRouter.post('/course', async (req, res, next) => {
  try {
    const courseRecord = new courseSchema(req.body);
    await courseRecord.save();

    res.status(201).json(courseRecord);
  } catch (error) {
    next(error.message);
  }
});

//To update send course ID into param and new object into body
courseRouter.put('/course/:id', async (req, res, next) => {
  const course = await courseSchema.findByIdAndUpdate(req.params.id, req.body, {new: true});
  res.status(200).send(course);
});

//To delete send course ID into param
courseRouter.delete('/course/:id', async (req, res, next) => {
  await courseSchema.findByIdAndDelete(req.params.id);
  res.status(200).send('course Deleted');
});

module.exports = courseRouter;
