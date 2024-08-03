const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
  c_id: { type: String, required: true, unique: true },
  t_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Trainer",
    required: true,
  },
  c_name: { type: String, required: true },
});

const Course = mongoose.model("Course", CourseSchema);
module.exports = Course;
