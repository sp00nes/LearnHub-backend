'use strict';

const mongoose = require('mongoose');

const { Schema } = mongoose;

const courseSchema = new Schema({
  courseName: { type: String, required: true },
  owner_id: { type: String, required: true },
  description: { type: String, required: true },
  img_Url: { type: String },
  modules: { type: Array },
});

const courseModel = mongoose.model('course', courseSchema);

module.exports = courseModel;

// {
//   "courseName": "name",
//   "owner_id": "_id",
//   "description": "desc",
//   "password": "1234",
//   "modules": [
//     {
//       "name": "String",
//       "idx": "Number",
//       "lessonText": "String",
//       "Img": "String",
//       "questions": [
//         {
//           "questionText": "test",
//           "answer": "true",
//           "answerArray": [
//             "test",
//             "test",
//             "test",
//             "true"
//             ]
//         }
//       ]
//     }
//   ],
//   "activeCourses": []
// }
