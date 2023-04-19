'use strict';

const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  userName: { type: String, required: true, unique: true },
  email: { type: String, unique: true },
  courses: { type: Array },
  activeCourses: { type: Array },
});

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;
