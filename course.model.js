import mongoose from "mongoose";

// set rule
const courseSchema = new mongoose.Schema({
  name: String,
  duration: Number,
  price: Number,
  tutorName: String,
});

// create table

const Course = mongoose.model("Course", courseSchema);

export default Course;
