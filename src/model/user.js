'use strict';

const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  userName: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String },
  courses: { type: Array, required: true },
  activeCourses: [{ course_id: String, complete: Boolean }],
});

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;
