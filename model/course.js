'use strict';

const mongoose = require('mongoose');

const { Schema } = mongoose;

const courseSchema = new Schema({
  courseName: { type: String, required: true },
  owner_id: { type: String, required: true },
  description: { type: String, required: true },
  modules: [{ 
    name: String, 
    idx: Number,  
    lessonText: String,
    Img: String,
    questions: [{questionTxt: String, answer: String, answerArr: {type: Array, required: true}}],
  }],
  activeCourses: [{ course_id: String, complete: Boolean }],
});

const courseModel = mongoose.model('course', courseSchema);

module.exports = courseModel;
